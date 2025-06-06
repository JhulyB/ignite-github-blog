import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { AxiosError } from "axios";

export interface IProfile{
    username: string
    name: string;
    avatar: string;
    description: string;
    githubLink: string;
    company: string;
    followers: number;
    repo: string
}

export interface IPost{
    title: string;
    content: string;
    createdAt: string;
    postId: number;
    comments: number
}

interface ILoadingState{
    isLoading: boolean
    resource: null | "getAllPost" | "getPost" | "filterPosts" | "getUser"
}

interface IErrorState {
    isError: boolean
    message: string
    resource: null | "getAllPost" | "getPost" | "filterPosts" | "getUser"
}

interface GithubContextType {
    loading: ILoadingState
    error: IErrorState
    myProfile: IProfile
    posts: IPost[]
    postById: IPost
    fetchPostById: (postId: number) => Promise<void>
    fetchSearchPost: (postId: string) => Promise<void>
    fetchRepos: () => Promise<void>
    cleanErrorState: () => void
}

interface GithubProviderProps{
    children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

const GITHUB_USERNAME = "jhulyb"
const GITHUB_REPO = "ignite-github-blog"

export function GithubProvider({ children }: GithubProviderProps) {
    const [ myProfile, setMyProfile ] = useState<IProfile>({} as IProfile)
    const [ posts, setPosts ] = useState<IPost[]>([])
    const [ postById, setPostById ] = useState<IPost>({} as IPost)

    const [ loading, setLoading ] = useState<ILoadingState>({
        isLoading: false,
        resource: null
    })
    const [ error, setError ] = useState<IErrorState>({
        isError: false,
        message: "",
        resource: null
    })

    function startLoading(resource: "getAllPost" | "getPost" | "filterPosts" | "getUser"){
        setLoading({
            isLoading: true,
            resource
        })
    }

    function cleanLoadingState(){
        setLoading({
            isLoading: false,
            resource: null
        })
    }

    function handleError(resource: "getAllPost" | "getPost" | "filterPosts" | "getUser", message: string){
        setError({
            isError: true,
            message,
            resource
        })
    }

    function cleanErrorState(){
        setError({
            isError: false,
            message: "",
            resource: null
        })
    }

    const fetchUser = useCallback(async () => {

        try {
            startLoading("getUser")
            const response = await api.get(`/users/${GITHUB_USERNAME}`) 
    
            setMyProfile({
                username: response.data.login,
                avatar: response.data.avatar_url,
                company: response.data.company,
                description: response.data.bio ?? "Adicione sua bio",
                followers: response.data.followers,
                githubLink:response.data.url,
                name: response.data.name,
                repo: response.data.repos_url
            })
        } catch (error) {
            console.log("error: ", error);
            //
            
        } finally {
            cleanLoadingState()
        }
    }, []) 

    async function fetchRepos() {

        try {
            startLoading("getAllPost")
            
            const response = await api.get(`/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues`) 

            const data: IPost[] = response.data.map((issue: any) => ({
                title: issue.title,
                content: issue.body,
                createdAt: issue.updated_at,
                comments: issue.comments,
                postId: issue.number
            }))

            setPosts(data)
        } catch (error) {
            
        } finally{
            cleanLoadingState()
        }
        
    }

    async function fetchPostById(postId: number) {
        
        try {
            startLoading("getPost")
            
            const response = await api.get(`/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues/${postId}`)
            
            setPostById({
                comments: response.data.comments,
                content: response.data.body,
                createdAt: response.data.updated_at,
                postId,
                title: response.data.title
            })
        } catch (error) {
            if (error instanceof AxiosError) {
                let errorMessage = ""

                errorMessage = error.response?.data.message === "Not Found" 
                    ? "Post não encontrado" 
                    : error.response?.data.message
                    
                handleError("getPost", errorMessage)
            } else {
                throw error
            }
        } finally {
            cleanLoadingState()
        }
        
    }

    async function fetchSearchPost(query: string) {
        const queryEncode = encodeURI(query)

        try {
            startLoading("filterPosts")
            
            const response = await api.get(`/search/issues?q=${queryEncode}%20repo:${GITHUB_USERNAME}/${GITHUB_REPO}`)
    
            const data: IPost[] = response.data.items.map((issue: any) => ({
                title: issue.title,
                content: issue.body,
                createdAt: issue.updated_at,
                comments: issue.comments,
                postId: issue.number
            }))
    
            setPosts(data)
        } catch (error) {
            
        } finally {
            cleanLoadingState()

        }
        
    }

    useEffect(()=>{
        fetchUser()
    },[])

    useEffect(()=>{
        if (Object.keys(myProfile).length !== 0) {
            fetchRepos()
        }
    },[myProfile])
    
    
    return (
        <GithubContext.Provider 
            value={{ 
                loading,
                error,
                myProfile, 
                posts, 
                postById, 
                fetchPostById,
                fetchSearchPost,
                fetchRepos,
                cleanErrorState
            }}
            >
            {children}
        </GithubContext.Provider>
    )
}