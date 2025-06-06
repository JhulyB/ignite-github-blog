import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
    width: 100%;
    height: 16.25rem;
    background-color: ${props => props.theme.basepost};
    border: 2px solid ${props => props.theme.basepost};
    border-radius: 10px;
    padding: 2rem;
    text-decoration: none;
    color: ${props => props.theme.basetext};

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    position: relative;
    transition: all .2s;

    &:hover{
        border: 2px solid ${props => props.theme.baselabel};
    }

    @media (max-width: 864px) {
        height: 12rem;
    }

    @media (max-width: 520px) {
        padding: 1rem;
        padding-top: 2rem;
    }
`

export const PostTitle = styled.div`
    color: ${props => props.theme.basetitle};
    
    font-size: 1.25rem;

    @media (max-width: 520px) {
        font-size: 1rem;
    }
`

export const PostDescription = styled.div`
    min-height: 5.5rem;
    width: 100%;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;

    @media (max-width: 670px) {
        font-size: 0.875rem;
        min-height: 3.5rem;
    }

`
export const RelativeTime = styled.span`
    color: ${props => props.theme.basespan};
    font-size: 0.875rem;

    position: absolute;
    top: 1rem;
    right: 2rem;

    @media (max-width: 520px) {
        font-size: 0.75rem;
    }
`