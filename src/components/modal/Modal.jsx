import React from 'react'
import {StyledModal} from './styled'
import {  useSelector } from 'react-redux';
import {getIsAuthSelector} from '../../store/News/selectors'
import {enableScrollOnTarget} from '../../modules/NewsPage/stopScroll'

const Modal = ({setIsModal,post,enableScroll}) => {
    const isAuth = useSelector(getIsAuthSelector)
    const closeModal=()=>{
        setIsModal(false)
        enableScroll()
    }
    const click = (e) => {
        e.stopPropagation();
    }
    return (
        <StyledModal onClick={closeModal}>
            <div onClick={click}>
                <h4>{post.title}</h4>
                {isAuth&&<span>Edit...</span>}
                <img
                    src={post.picture}
                />
                <p>{post.date}</p>
                <p>{post.text}</p>
            </div>
            <span/>
        </StyledModal>
    )
}

export default Modal


