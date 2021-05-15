import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
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

const Wrapper = styled.div`
height: 80vh;
margin: 0 auto;
width: 100vw;
text-align: center;
`

const finish = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Link href='/'>
                    <a>
                        <Image
                            src="/images/finish.png"
                            alt="Finish"
                            width={464}
                            height={532}
                        />
                        <Title>Отличная работа!</Title>
                    </a>
                </Link>
            </Wrapper>
        </>
    )
}

export default finish
