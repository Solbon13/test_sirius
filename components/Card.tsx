import styled from '@emotion/styled'
import React from 'react'

const WrapperCard = styled.div`
width: 708.31px;
height: 220.5px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 48.2498px;
justify-content: center;
display: flex;
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

const WrapperRange = styled.div`
width: 533px;
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

const Card = (props) => {

    const onAction = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        props.onAction(Number(e.target.value))
    }

    return (
        <div>
            <WrapperCard>
                <WrapperRange>
                    <Title>{props.title}</Title>
                    <WrapperLabel>
                        {
                            props.labelArray.map((item) => <Label key={item}>{item}</Label>)
                        }
                    </WrapperLabel>
                    <InputField type="range"
                        min={props.labelArray[0]}
                        max={props.labelArray[props.labelArray.length - 1]}
                        step={props.step}
                        value={props.position}
                        onChange={onAction}
                        ></InputField>
                </WrapperRange>
            </WrapperCard>
        </div>
    )
}

export default Card
