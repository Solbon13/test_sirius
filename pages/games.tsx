import styled from '@emotion/styled'
import Link from 'next/link'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useActions } from '../hooks/useActions'
import useInterval from '../hooks/useInterval'
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

const Wrapper = styled.div`
display: flex;
height: 80vh;
justify-content: center;
`

const Games = () => {
    const { wordsCount, lettersCount, distance, distanceInc, speed, wordsArray } = useTypedSelector(state => state.games)
    const { setDistanceCount } = useActions()

    const [gamesArray, setGamesArray] = useState(wordsArray.filter((item) => item.length === lettersCount))
    if (gamesArray.length === 0) return (
        <>
            <Header />
            <Link href='/'>
                <a>
                    <Title>Пожалуйста измените количество букв в слове</Title>
                </a>
            </Link>
        </>
    )

    const [index, setIndex] = useState(0)

    const DistanceElement = styled.div`
        width: ${distance}px;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    let count = Math.floor(Math.random() * gamesArray.length)
    let gamesPole = (<Wrapper>
        <Title>{gamesArray[count].slice(0, Math.round(lettersCount / 2))}</Title>
        <DistanceElement>
            <svg width="45" height="38" viewBox="0 0 88 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88 2.99787C88 13.5849 85.5533 22.0654 80.66 28.4392C75.8199 34.8131 69.3841 38 61.3527 38C57.3636 38 53.7468 37.2168 50.5023 35.6503C47.311 34.0839 43.6676 31.2751 39.5721 27.2239C35.5298 23.1187 31.78 21.0661 28.3228 21.0661C25.6633 21.0661 23.4294 22.3895 21.621 25.0362C19.8658 27.683 18.9882 30.978 18.9882 34.9211L0 34.597C0 24.01 2.36688 15.6105 7.10063 9.39872C11.8876 3.13291 18.35 0 26.4878 0C30.5301 0 34.2267 0.810235 37.5775 2.4307C40.9284 3.99716 44.5718 6.80597 48.5077 10.8571C52.4968 14.8543 56.1668 16.8529 59.5177 16.8529C62.2303 16.8529 64.4376 15.5295 66.1396 12.8827C67.8948 10.1819 68.7724 6.85999 68.7724 2.91684L88 2.99787Z" fill="#371548" />
            </svg>
        </DistanceElement>
        <Title>{gamesArray[count].slice(Math.round(lettersCount / 2))}</Title>
    </Wrapper>)

    if (wordsCount - 1 === index) Router.push('/finish')

    useInterval(
        () => {
            setDistanceCount(distance + distanceInc)
            setIndex(index + 1)
        },
        wordsCount - 1 != index ? speed * 1000 : null,
    )


    return (
        <>
            <Header />
            {gamesPole}
        </>
    )
}

export default Games
