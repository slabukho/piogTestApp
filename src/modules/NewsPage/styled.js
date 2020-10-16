import styled from 'styled-components'


export const NewsStyled = styled.div`
        width:100%;
        min-height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;

`;


export const NewStyled = styled.div`
    display:flex;
    flex-direction:column;
    width:40vw;
    margin:50px auto;
    background-color: grey;
    padding:20px;
    border-radius:25px;
    &>img{
        width:100%;
        cursor: pointer;
    }
    &>p{
            cursor: pointer;
        }
`;