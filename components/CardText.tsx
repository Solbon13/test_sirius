import styled from '@emotion/styled'
import React from 'react'

const WrapperCard = styled.div`
width: 708.31px;
height: 220.5px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 48.2498px;
`

const WrapperText = styled.div`
justify-content: center;
display: flex;
`

const WrapperBtn = styled.div`
justify-content: center;
display: flex;
margin-top: 15px;
`

const Title = styled.div`
font-style: normal;
font-weight: bold;
font-size: 45px;
line-height: 57px;
display: flex;
align-items: center;
color: #371548;
justify-content: center;
margin-top: 32px;
`

const InputField = styled.input`
width: 120px;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 19.9968px;
font-style: normal;
font-weight: bold;
font-size: 47.9924px;
line-height: 56px;
color: #000000;
text-align: center;
`

const Btn = styled.button`
width: 92px;
height: 92px;
background: #FDD207;
transform: rotate(-180deg);
border-radius: 10px;
`

const CardText = (props) => {

    return (
        <div>
            <WrapperCard>
                <WrapperText>
                    <Title>Скорость</Title>
                    <InputField
                    value={props.position}
                    />
                    <Title>сек.</Title>
                </WrapperText>
                <WrapperBtn>
                    <Btn onClick={() => props.onAction(props.position - 1)}>-</Btn>
                    <Btn onClick={() => props.onAction(props.position + 1)}>+</Btn>
                </WrapperBtn>
            </WrapperCard>
        </div>
    )
}

export default CardText
