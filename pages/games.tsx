import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Title = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 900;
font-size: 60px;
line-height: 70px;
display: flex;
align-items: center;

color: #371548
`

const Games = () => {
    const { wordsCount, lettersCount, distance, distanceInc, speed, wordsArray } = useTypedSelector(state => state.games)

    const [index, setIndex] = useState(1)

    useEffect(() => {
        const id = setInterval(() => {
            // callApi()
            setIndex(index + 1)
        }, 3000);
        if (index == 3) clearInterval(id);
    }, )

    return (
        <div>
            <Title>{wordsArray[index]}</Title>
            
        </div>
    )
}

export default Games
