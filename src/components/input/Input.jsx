import React from 'react'
import {InputStyled} from './styled'

const Input= React.forwardRef((props, ref)=>{
    return(
        <InputStyled
            ref={ref}
            {...props}
        />
    )
})


export default Input