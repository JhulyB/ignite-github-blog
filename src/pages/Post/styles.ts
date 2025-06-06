import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from "styled-components";

export const PostContent = styled.section`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
    margin-top: 4.5rem;
    padding: 2.5rem 2rem;

    white-space: pre-wrap;

    img{
        width: 100%;
        max-width: calc(864px - 64px);
        object-fit: cover;
    }

    @media (max-width: 530px) {
        margin-top: 2.25rem;
        padding-top: 1rem;

        h2 {
            font-size: 1.25rem;
        }

        p{
            font-size: 0.875rem;
        }
    }
`

export const SyntaxHighlighterCustom = styled(SyntaxHighlighter)`
    background-color: ${props => props.theme.basepost} !important;
    border-radius: 2px;
`;


export const LodingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: 13.25rem;
    width: 100%;
    
    svg {
        animation-name: spin;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        color: ${props => props.theme.blue}
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 100%;
`