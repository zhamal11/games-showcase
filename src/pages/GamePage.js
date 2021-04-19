import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding: 10px;
  flex: 1 1 70%
`;

const ButtonBack = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  
  &:hover {
    background-color: #333;
  }
`;

const Wrapper = styled.div``;

const H1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 22px;
  margin: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  margin-bottom: 30px;
`;

const Slide = styled.div`
  width: 100%;
  margin: 20px;
`; 

const SlideFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SlideButton = styled.button`
  background-color: #000;
  padding: 10px 20px;
  margin: 10px;
  color: #fff;
  border: none;
  border-radius: 5px;
  
  &:hover {
    background-color: #333;
  }
`;

const SlideContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Block = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
`;

const GameLink = styled.a`
  color: blue;
  text-decoration: none;
  font-size: 20px;
  line-height: 22px;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
    color: red;
    margin: 10px 0;
  }
`;

function GamePage(props) {
  const {name} = props.match.params;
  const [gameData, setGameData] = useState({})
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenList, setScreenList] = useState([]);
  const [slide, setSlide] = useState(0);
  
  useEffect(() => {
    setIsLoaded(true);
    fetch(`https://api.rawg.io/api/games/${name}?key=ca61123216c44a7e9edc35c07faf7790`)
      .then(res => res.json())
      .then(
        (res) => {
          setGameData(res);
          setIsLoaded(false);
          console.log({res})
        },
        (error) => {
          setError(error);
        }
      )
  }, [name]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${gameData.id}/screenshots?key=ca61123216c44a7e9edc35c07faf7790`)
        .then(res => res.json())
        .then(
          (res) => {
            console.log(res);
            setScreenList(res.results);
          }
        )
  }, [gameData])

  const handleNext = () => {
    setSlide(prev => {
      if (prev >= screenList.length - 1) return 0;
      return prev + 1;
    });
  }

  const handlePrex = () => {
    setSlide(prev => {
      if (prev < 1) return screenList.length - 1;  
      return prev - 1;
    });
  }

  if(error) {
    return <div>Ошибка: {error.message}</div>;
  } else if(isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return <Content>
        <ButtonBack onClick={() => props.history.goBack()}>Back</ButtonBack>
        <Wrapper>
          <H1>{gameData.name}</H1>
          <Image src={gameData.background_image} alt={gameData.slug} />
          <Block>Date Released: {gameData.released}</Block>
          <Block>Rating {gameData.rating}</Block>
          <div>{gameData.description_raw}</div>
          <GameLink href={gameData.website}>go to offical game page</GameLink>
          <Slide>
            <SlideContent>
              <SlideImage src={screenList[slide]?.image} alt=""/>
            </SlideContent>
            <SlideFooter>
              <SlideButton onClick={() => handlePrex()}>prev</SlideButton>
              <SlideButton onClick={() => handleNext()}>next</SlideButton>
            </SlideFooter>
          </Slide>
        </Wrapper>
      </Content>
  }
}

export default GamePage;