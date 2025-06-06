import styled from "styled-components";

export const SearchFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const SearchFormInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3{
        font-size: 1.125rem;
        color: ${props => props.theme.basesubtitle};
    }

    span{
        font-size: 0.875;
        color: ${props => props.theme.basespan};
    }
`

export const SearchFormContent = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;

    border-radius: 6px;
    background-color: ${props => props.theme.baseinput};

    border: 1px solid ${props => props.theme.blue};

    &:focus-within{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.blue};
    }

    input{
        flex: 1;
        border: 0;
        background-color: #00000000;
        color: ${props => props.theme.basetext};
        padding: 1rem 0;

        &:focus{
            box-shadow: 0 0 0 0;
        }

        &::placeholder{
            color: ${props => props.theme.baselabel};
        }
    }

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

export const EmptyQueryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px 16px;
    text-align: center;
`