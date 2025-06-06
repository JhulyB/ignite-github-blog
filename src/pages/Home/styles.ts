import styled from "styled-components";

export const BlogContainer = styled.div`
    width: 100%;
    max-width: 864px;
    margin: 4.5rem auto;

    @media (max-width: 864px) {
        margin-right: 1rem;
        margin-left: 1rem;
        width: auto;
    }
`

export const BlogList = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    margin-top: 3rem;

    @media (max-width: 864px) {
        grid-template-columns: 1fr;
    }
`