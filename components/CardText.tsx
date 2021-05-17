import styled from '@emotion/styled'
import React from 'react'
import { WrapperCard } from './WrapperCard'

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
font-style: normal;
font-weight: bold;
font-size: 125px;
line-height: 56px;
color: #000000;
`

interface ICardProps {
    onAction: (value) => void,
    position: number
}

const CardText: React.FC<ICardProps> = ({position, onAction}) => {

    return (
        <div>
            <WrapperCard>
                <WrapperText>
                    <Title>Скорость</Title>
                    <InputField
                    defaultValue={position}
                    type="number"
                    step='0.5'
                    />
                    <Title>сек.</Title>
                </WrapperText>
                <WrapperBtn>
                    <Btn onClick={() => position > 0.5 && onAction(position - 0.5)}>-</Btn>
                    <Btn onClick={() => onAction(position + 0.5)}>+</Btn>
                </WrapperBtn>
            </WrapperCard>
        </div>
    )
}

export default CardText
