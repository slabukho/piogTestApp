import React from 'react'
import { useForm } from "react-hook-form";
import Input from '../../components/input'
import Button from '../../components/button'
import {
    FormStyled
} from './styled'
import { useDispatch } from 'react-redux';
import {authThunk} from '../../store/News/thunk'


const AuthPage=()=>{

    const { register, handleSubmit, errors } = useForm()
    const dispatch= useDispatch()
    const onSubmit= async() => {
        dispatch(authThunk())
    }
    return(
        <>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <label>Login:</label>
                <Input
                     name='login'
                     type='text'
                     placeholder='Enter your Email'
                     ref={register({ required: true})}
                />
                {errors.login&&<p>Required</p>}
                <Input
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                    ref={register({ required: true})}
                />
                 {errors.password&&<p>Required</p>}
                <Button
                    children='login'
                />
            </FormStyled>
        </>
    )
}


export default AuthPage