import styled from 'styled-components'



export const StyledModal = styled.div`
    position: fixed;
    left: 0;
    top:0;
    height: calc(100vh - 60px);
    width: 100vw;
    height:100vh;
    background-color: rgba(0, 0, 0, 0.5);
    color:grey;
    &>div{
        border-radius:15px;
        width: 40vw;
        height: auto;
        max-height:80vh;
        background-color: white;
        position: absolute;
        padding:30px;
        top: 7vh;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction:column;
        overflow: auto;
        &>span{
            cursor: pointer;
            color: green;
            position:absolute;
            right:15px;
        }
        &>img{
            width:100%;
        }
    }
    &>span{
        position: absolute;
        top: 85px;
        right: 100px;
        width: 55px;
        height: 55px;
        cursor: pointer;
        border: 1 solid black;
        border-radius: 50%;
        &::before,::after{
            content: "";
            position: absolute;
            top: 25px;
            left: 13.5px;
            width: 26px;
            height: 4px;
            background: black;
        };
        &:hover{
            background: white;
            }
        &::before{
                transform: rotate(45deg);
        }
        &::after{
                transform: rotate(-45deg);
        }
        
    }
`;
