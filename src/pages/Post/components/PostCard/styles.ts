import styled from "styled-components";

export const PostContainer = styled.section`
    width: 100%;
    height: 16.25rem;
    background-color: ${props => props.theme.basepost};
    border-radius: 10px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    position: relative;
`

export const PostTitle = styled.div`
    color: ${props => props.theme.basetitle};
    
    font-size: 1.25rem;
`

export const PostDescription = styled.div`
    
`
export const RelativeTime = styled.span`
    color: ${props => props.theme.basespan};
    font-size: 0.875rem;

    position: absolute;
    top: 2.375rem;
    right: 2rem;

`