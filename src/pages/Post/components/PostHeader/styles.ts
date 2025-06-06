import styled from "styled-components";

export const PostHeaderContainer = styled.section`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
    padding: 2rem 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: -5rem;
    background-color: ${props => props.theme.baseprofile};
    border-radius: 10px;


    box-shadow: rgba(0, 0, 0, 0.28) 0px 7px 29px 0px;

    @media (max-width: 864px){
        margin-right: 1rem;
        margin-left: 1rem;
        width: auto;
    }

    @media (max-width: 530px) {
        gap: 1rem;
        padding: 1rem 1.25rem;
        padding-bottom: 2.25rem;

        a {
            top: 1rem;
            right: 1rem;
            font-size: 0.875rem;
        }
        
        h2 {
            font-size: 1.25rem;
        }

        p{
            font-size: 0.875rem;
        }
    }
`

export const PostHeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
`

export const InfoContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: auto;

    @media (max-width: 460px) {
        gap: 1rem;
        font-size: 0.75rem;
    }
`

export const InfoContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg{
        color: ${props => props.theme.baselabel};
    }
`

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        color: ${props => props.theme.blue};
        
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
    }
`


export const LodingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

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