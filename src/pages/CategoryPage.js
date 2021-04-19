import styled from 'styled-components';
import {useEffect, useState} from 'react';
import CardGame from '../components/CardGame';


const CardBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
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


function CategoryPage(props) {
  console.log('category', props);
  const {name} = props.match.params;
  const [games, setgames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=ca61123216c44a7e9edc35c07faf7790&genres=${name}`)
      .then(res => res.json())
      .then(
        (res) => {
          setgames(res.results);
          setIsLoaded(false);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [isLoaded]);

  if(error) {
    return <div>Ошибка: {error.message}</div>;
  } else if(isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return <div>
      <Button onClick={() => props.history.goBack()}>back</Button>
      <CardBlock>
        {games.map(game => (<CardGame key={ game.id} game={game}/>))}
      </CardBlock>
    </div>
  }
  
}

export default CategoryPage;