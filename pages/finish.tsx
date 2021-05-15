import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'

const Title = styled.div`
font-style: normal;
font-weight: bold;
font-size: 64px;
line-height: 75px;
/* identical to box height */


color: #2B3172;
`

const finish = () => {
    return (
        <div>
            <Header />
            <Image
                src="/images/finish.png"
                alt="Finish"
                width={340}
                height={140}
            />
            <Title>Отличная работа!</Title>
        </div>
    )
}

export default finish
