import { formatDistance } from "date-fns";
import { IPost } from "../../../../contexts/githubContext";
import { PostContainer, PostDescription, PostTitle, RelativeTime } from "./styles";
import { ptBR } from "date-fns/locale/pt-BR";

interface IPostCardProps{
    post: IPost
}

export function PostCard({ post }: IPostCardProps) {

    return(
        <PostContainer to={`/post/${post.postId}`}>
            <RelativeTime>
                {formatDistance(
                    new Date(post.createdAt), 
                    new Date(), 
                    { 
                        addSuffix: true, 
                        locale: ptBR 
                    }
                )}
            </RelativeTime>
            <PostTitle>{post.title}</PostTitle>
            <PostDescription>{post.content}...</PostDescription>
        </PostContainer>
    )
}