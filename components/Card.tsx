import styled from '@emotion/styled'
import React from 'react'
import { WrapperCard } from './WrapperCard'

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

const WrapperRange = styled.div`
width: 533px;
margin: 0 auto;
`

const WrapperLabel = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const Label = styled.div`
font-style: normal;
font-weight: bold;
font-size: 38.5998px;
line-height: 45px;
display: flex;
align-items: center;
color: #000000;
`

const InputField = styled.input`
-webkit-appearance: none;
    width: 100%;
    height: 23px;
    cursor: pointer;
    background: #FDD207;
    border-radius: 50px;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 43.91px;
      height: 43.91px;
      background: radial-gradient(#0E0C0B 30%, #FDD207 20%);
      border-radius: 50%;
   }
`

interface ICardProps {
    onAction: (value) => void,
    title: string,
    labelArray: Array<number>,
    step: string,
    position: number
}

const Card: React.FC<ICardProps> = ({onAction, title, labelArray, step, position}) => {

    const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        onAction(Number(e.target.value))
    }

    return (
        <div>
            <WrapperCard>
                <WrapperRange>
                    <Title>{title}</Title>
                    <WrapperLabel>
                        {
                            labelArray.map((item) => <Label key={item}>{item}</Label>)
                        }
                    </WrapperLabel>
                    <InputField type="range"
                        min={labelArray[0]}
                        max={labelArray[labelArray.length - 1]}
                        step={step}
                        value={position}
                        onChange={onClick}
                        ></InputField>
                </WrapperRange>
            </WrapperCard>
        </div>
    )
}

export default Card
