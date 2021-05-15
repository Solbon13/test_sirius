import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    color: #2B3172;
    width: 70vw;
   text-align: center;
`

const Wrapper = styled.div`
    background: url("./images/logo.png") right no-repeat;
    box-sizing: border-box;
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = (props) => {
    return (
        <Wrapper>
            <H1>{props.title}</H1>
            {/* <Link href='/'>
                <a>
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={340}
                        height={140}
                    />
                </a>
            </Link> */}
        </Wrapper>
    )
}

export default Header