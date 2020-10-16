import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Input from '../../components/input'
import Button from '../../components/button'
import {
    FormStyled
} from './styled'
import newsData from './newsData'
import { useDispatch } from 'react-redux';
import { NewStyled, NewsStyled} from './styled'
import Header from '../../components/header'
import Modal from '../../components/modal'
import {disableScroll,enableScroll} from './stopScroll'


const New =( {post,setInner,setIsModal} )=>{
    const openModal=()=>{
        setInner(post)
        setIsModal(true)
        disableScroll()
    }
    return(
        <NewStyled>
            <h4>{post.title}</h4>
            <img
                src={post.picture}
                onClick={openModal}
            />
            <p
            onClick={openModal}
            >{post.text.substr(0,120)}...</p>
        </NewStyled>
    )
}


const News=()=>{
    const [isOpenModal, setIsModal] = useState(false)
    const [innerOfModal, setInner] = useState(null)
    return(
        <>
        <Header/>
        
        <NewsStyled>
            {newsData.map(item=>{
               return <New post={item} setInner={setInner} setIsModal={setIsModal}/>
            })}
        </NewsStyled>
        {isOpenModal&&
        <Modal
            setIsModal={setIsModal}
            post={innerOfModal}
            enableScroll={enableScroll}
        />}
        </>
    )
}


export default News