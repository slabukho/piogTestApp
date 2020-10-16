import styled from 'styled-components'


export const HeaderStyled = styled.div`
    display:flex;
    width:100%;
    height: 5vh;
    background-color: blueviolet;
    position:sticky;
    top:0;
    &>img{
        width:30px;
        position:absolute;
        right:30px;
        top:50%;
        transform:translateY(-50%);
        cursor: pointer;
    }
    &>a{
        color:#fff;
        text-decoration: none;
        position:absolute;
        right:30px;
        top:50%;
        transform:translateY(-50%);
        cursor: pointer;
    }
`;