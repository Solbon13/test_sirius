import styled from '@emotion/styled'
import { Head } from 'next/document'
import CardRange from '../components/CardRange'
import CardText from '../components/CardText'
import Header from '../components/Header'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Link from 'next/link'
import { ButtonEmotion } from '../components/ButtonEmotion'

const Wrapper = styled.div`
  background: #F7F9FF;
  min-height: 100vh;
  width: 100%;
`

const WrapperBody = styled.div`
  min-height: 70vh;
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  column-gap: 40px;
`

export default function Home() {

  const { wordsCount, lettersCount, distance, distanceInc, speed } = useTypedSelector(state => state.games)
  const { setWordsCount, setLettersCount, setDistanceCount, setDistanceIncCount, setSpeed } = useActions()

  return (
    <div>
      {/* <Head>
        <title>Поле зрения</title>
      </Head> */}
      <Wrapper>
        <Header title='Тренажер «Поле зрения»'/>
        <WrapperBody>
          <CardRange
            title='Сколько слов'
            labelArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            position={wordsCount}
            step='1'
            onAction={setWordsCount} />
          <CardRange
            title='Стартовое расстояние'
            labelArray={[5, 10, 15, 20, 25, 30, 35, 40]}
            position={distance}
            step='5'
            onAction={setDistanceCount} />
          <CardRange
            title='Сколько букв в словах'
            labelArray={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            position={lettersCount}
            step='1'
            onAction={setLettersCount} />
          <CardRange
            title='Увеличение расстояния'
            labelArray={[5, 10, 15, 20, 25, 30, 35, 40]}
            position={distanceInc}
            step='5'
            onAction={setDistanceIncCount} />
          <CardText
            position={speed}
            onAction={setSpeed} />
          <Link href='/games'>
            <a>
          <ButtonEmotion>Старт</ButtonEmotion>
          </a>
          </Link>
        </WrapperBody>
      </Wrapper>
    </div>
  )
}
