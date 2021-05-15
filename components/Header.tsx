import styled from '@emotion/styled'
import Image from 'next/image'

const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    color: #2B3172;
    width: 70vw;
    display: flex;
    justify-content: center;
    
`

const Wrapper = styled.div`
background: #F7F9FF;
box-sizing: border-box;
display: flex;
width: 100%;
margin-bottom: 30px;
`
const Header = () => {
    return (
        <Wrapper>
            <H1>Тренажер «Поле зрения»</H1>
            <Image
                src="/images/logo.png"
                alt="Logo"
                width={340}
                height={140}
            />
        </Wrapper>
    )
}

export default Header