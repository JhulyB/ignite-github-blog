import { FaCalendarDay, FaComment } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosArrowBack, IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { InfoContainer, InfoContent, LinkContainer, LodingContainer, PostHeaderContainer, PostHeaderContent } from "./styles";
import { useContext } from "react";
import { GithubContext } from "../../../../contexts/githubContext";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { AiOutlineLoading } from "react-icons/ai";

export function PostHeader() {

    const { postById, myProfile, loading } = useContext(GithubContext)

    const isLoading = loading.isLoading && loading.resource === "getPost"
    
    return(
        <PostHeaderContainer>
            <LinkContainer>
                <Link to={"/"} ><IoIosArrowBack /> VOLTAR</Link>
                <Link to={"#"} >GITHUB <FaArrowUpRightFromSquare /> </Link>
            </LinkContainer>
            <PostHeaderContent>
                {
                    isLoading ? 
                        (
                            <LodingContainer>
                                <AiOutlineLoading size={24}/> 
                                Buscando Post
                            </LodingContainer>
                        )
                        : <h2>{postById.title}</h2>
                }
                <InfoContainer>
                    <InfoContent>
                        <IoLogoGithub size={18} />
                        {myProfile.username}
                    </InfoContent>
                    <InfoContent>
                        <FaCalendarDay />
                        {postById.createdAt && formatDistance(
                            new Date(postById.createdAt), 
                            new Date(), 
                            { 
                                addSuffix: true, 
                                locale: ptBR 
                            }
                        )}
                    </InfoContent>
                    <InfoContent>
                        <FaComment size={18} />
                        {postById.comments} comentário(s)
                    </InfoContent>
                </InfoContainer>
            </PostHeaderContent>
        </PostHeaderContainer>
    )
}