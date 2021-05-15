import styled from '@emotion/styled'
import React from 'react'

const Btn = styled.button`
background: #FDD207;
border-radius: 81.5275px;
width: 390px;
height: 110px;
font-style: normal;
font-weight: bold;
font-size: 48.9165px;
line-height: 57px;
color: #371548;
margin: 50px 150px;
`

const Button = () => {
    return (
        <div>
           <Btn>Старт</Btn> 
        </div>
    )
}

export default Button
