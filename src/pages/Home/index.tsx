import { useContext } from "react";
import { Header } from "../../components/Header";
import { GithubContext } from "../../contexts/githubContext";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/searchForm";
import { BlogContainer, BlogList } from "./styles";

export function Home() {

    const { myProfile, posts, loading } = useContext(GithubContext)
    
    return (
        <div>
            <Header/>
            <Profile profile={myProfile} isLoading={loading.isLoading && loading.resource === "getUser"}/>
            <BlogContainer>
                <SearchForm/>
                <BlogList>
                    {
                        posts.map((post) => (
                            <PostCard key={post.postId} post={post}/>
                        ))
                    }

                </BlogList>
                
            </BlogContainer>
        </div>
    )
}