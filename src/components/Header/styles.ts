import styled from "styled-components";
import headerBg from "/cover.png"

export const HeaderContainer = styled.header`
    background: url(${headerBg});
    background-size: cover;
    background-position: center;
    padding: 2.5rem 0 7.5rem;
    height: 18.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
`