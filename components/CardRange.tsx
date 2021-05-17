import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { FC, useState } from 'react'
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
    `
    // justify-content: space-between;

type CssPropsLabel = {
    marginleft: number
} & React.HTMLProps<HTMLDivElement>

const Label: FC<CssPropsLabel> = ({ children, marginleft }) => {
    return <div css={css`
        font-style: normal;
        font-weight: bold;
        font-size: 38.5998px;
        line-height: 45px;
        display: flex;
        align-items: center;
        color: #000000;
        width: ${marginleft}%;
    `}>
        {children}
    </div>
}

type CssProps = {
    val: number
} & React.HTMLProps<HTMLInputElement>

const InputField: FC<CssProps> = styled.input`
-webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  outline: 0;
  height: 23px;
  border-radius: 50px;
  background: ${(props: CssProps) =>
        `linear-gradient(to right, #FDD207 0%, #FDD207 ${props.val}%, #fff ${props.val}%, #fff 100%);`};
  

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 43.91px;
    height: 43.91px;
    background-image: radial-gradient(circle, #0E0C0B 40%, #FDD207 45%);
    border-radius: 50%;
    
  }

  ::-moz-range-thumb {
    width: 43.91px;
    height: 43.91px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #0E0C0B 40%, #FDD207 45%);
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

const CardRange: React.FC<ICardProps> = ({ onAction, title, labelArray, step, position }) => {

    const [value1, setValue] = useState((100 / labelArray.length * labelArray.indexOf(position) + 50 / labelArray.length));

    const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(100 / labelArray.length * labelArray.indexOf(Number(e.target.value)) + 50 / labelArray.length)
        onAction(Number(e.target.value))
    }

    return (
        <div>
            <WrapperCard>
                <WrapperRange>
                    <Title>{title}</Title>
                    <WrapperLabel>
                        {
                            labelArray.map((item, index) => <Label key={item} marginleft={(100 / labelArray.length)}>{item}</Label>)
                        }

                    </WrapperLabel>
                    <InputField type="range"
                        min={labelArray[0]}
                        max={labelArray[labelArray.length - 1]}
                        step={step}
                        value={position}
                        val={value1}
                        onChange={onClick}
                        list="steplist"
                    ></InputField>

                </WrapperRange>
            </WrapperCard>
        </div>
    )
}

export default CardRange
