import Markdown from "react-markdown";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Header } from "../../components/Header";
import { PostHeader } from "./components/PostHeader";
import { ErrorContainer, LodingContainer, PostContent, SyntaxHighlighterCustom } from "./styles";
import { useContext, useEffect } from "react";
import { GithubContext } from "../../contexts/githubContext";
import { useParams } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

export function Post() {
  const { postId } = useParams()

  const { loading, error, postById, fetchPostById } = useContext(GithubContext)

  async function loadPost() {
    await fetchPostById(Number(postId))
  }

  useEffect(()=>{
    if (postId !== undefined) {
      loadPost()
    }
  },[])

  const isLoading = loading.isLoading && loading.resource === "getPost"
  const isError = error.isError && error.resource === "getPost"

    return (
        <div>
            <Header/>
            <PostHeader />
            {
              isLoading ? (
                <LodingContainer>
                  <AiOutlineLoading size={24}/> 
                  Buscando Post
                </LodingContainer>
              ) : (
                <PostContent>
                    <Markdown
                    components={{
                        code(props) {
                          const {children, className, ...rest} = props
                          const match = /language-(\w+)/.exec(className || '')
                          return match ? (
                            <SyntaxHighlighterCustom
                                style={dracula}
                                language={match[1]}
                                PreTag="div"
                                {...rest}
                                >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighterCustom>
                          ) : (
                            <code {...rest} className={className}>
                              {children}
                            </code>
                          )
                        }
                      }}>
                    {postById.content}
                    </Markdown>
                </PostContent>
              )
            }
            {
              isError && (
                <ErrorContainer>
                  <MdOutlineReportGmailerrorred size={40}/>

                  <h3>{error.message}</h3>
                </ErrorContainer>
              )
            }
            
        </div>
    )
}