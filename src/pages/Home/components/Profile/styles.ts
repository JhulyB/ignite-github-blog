import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
    padding: 2rem 2.5rem;

    display: flex;
    gap: 2rem;
    margin-top: -5rem;
    background-color: ${props => props.theme.baseprofile};
    border-radius: 10px;

    position: relative;

    box-shadow: rgba(0, 0, 0, 0.28) 0px 7px 29px 0px;
    transition: all ease .2s;

    a{
        position: absolute;
        top: 2.5rem;
        right: 2rem;
        color: ${props => props.theme.blue};
        
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
    }

    img{
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
        object-fit: cover;
    }

    @media (max-width: 864px) {
        margin-right: 1rem;
        margin-left: 1rem;
        width: auto;

        img {
            width: 5rem;
            height: 5rem; 
        }
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

export const ProfileContent = styled.div`
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
        position: absolute;
        bottom: 0.5rem;
        left: 1.25rem;
        gap: 1rem;
        font-size: 0.75rem;
    }
`

export const InfoContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    white-space: nowrap;

    svg{
        color: ${props => props.theme.baselabel};
    }
`

export const LodingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: 13.25rem;
    width: 100%;
    max-width: 864px;
    margin: 0 auto;

    margin-top: -5rem;
    background-color: ${props => props.theme.baseprofile};
    border-radius: 10px;


    box-shadow: rgba(0, 0, 0, 0.28) 0px 7px 29px 0px;

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