import styled from 'styled-components';
import {useEffect, useState} from 'react';
import CardGame from '../components/CardGame';

const Content = styled.div`
  padding: 10px;
  flex: 1 1 70%
`

const CardBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FilterBlock = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #000;
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: #333;
  }
`;

function Home() {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [order, setOreder] = useState('released')

  useEffect(() => {
    if(isLoaded) {
      loadData();
    }
  }, [isLoaded]);

  const loadData = (isOrder = false) => {
    const link = `https://api.rawg.io/api/games?key=ca61123216c44a7e9edc35c07faf7790&page=${page}&ordering=-${order}`;
    fetch(link)
      .then(res => res.json())
      .then(
        (data) => {
          if(isOrder) {
            setGames(data.results)
          } else {
            setGames( [...games, ...data.results]);
            setPage(prevPage => prevPage + 1);
          }
          setIsLoaded(false);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .finally(() => {
        setIsLoaded(false);
      })
  }


  const filterGames = (e) => {
    if(e !== order) {
      setPage(1);
      setOreder(e);
      loadData(true)
    }
  }

  useEffect (() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    };
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 
      ) {
      setIsLoaded(true);
    }
  }


  if(error) {
    return <div>
      <div>Ошибка: {error.message}</div>
    </div>;
  } 
  return <div>
    <FilterBlock>
      <Button onClick={() => filterGames('released')}>released</Button>
      <Button onClick={() => filterGames('rating')}>rating</Button>
    </FilterBlock> 
    <CardBlock>
      {games.map(game => (<CardGame key={ game.id} game={game}/>))}
    </CardBlock>
    {isLoaded && <div>loading...</div>}
  </div>
  
  
}

export default Home;