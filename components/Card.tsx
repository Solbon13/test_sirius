import styled from '@emotion/styled'
import React, { useState } from 'react'
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

interface YourProps {
    invalid: boolean
  }

const InputField = styled.input`
-webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  outline: 0;
  height: 23px;
  border-radius: 50px;
  background: ${(props) =>
    `linear-gradient(to right, #FDD207 0%, #FDD207 ${props.theme}%, #fff ${props.theme}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 43.91px;
      height: 43.91px;
    background-image: radial-gradient(circle, #0E0C0B 40%, #FDD207 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  ::-moz-range-thumb {
    width: 43.91px;
    height: 43.91px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #0E0C0B 40%, #FDD207 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
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

    const [value1, setValue] = useState((100/ labelArray.length * labelArray.indexOf(position) + 50 / labelArray.length));

    const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(100/ labelArray.length * labelArray.indexOf(Number(e.target.value)) + 50 / labelArray.length)
        console.log(e.target.value, labelArray.indexOf(Number(e.target.value)))
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
                        theme={value1}
                        onChange={onClick}
                        ></InputField>
                </WrapperRange>
            </WrapperCard>
        </div>
    )
}

export default Card
