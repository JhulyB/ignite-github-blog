import { PostContainer, PostDescription, PostTitle, RelativeTime } from "./styles";

export function PostCard() {
    return(
        <PostContainer>
            <RelativeTime>Há 1 dia</RelativeTime>
            <PostTitle>JavaScript data types and data structures</PostTitle>
            <PostDescription>
                Programming languages all have built-in data structures, but these 
                often differ from one language to another. This article attempts 
                to list the built-in data structures available in...
            </PostDescription>
        </PostContainer>
    )
}