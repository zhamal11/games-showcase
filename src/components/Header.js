import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const HeaderStyle = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center

  }
  
`;

const HeaderLogo = styled.div`
  color: green;
  flex: 0 0 300px;

  @media (max-width: 767px) {
    flex: 0 0 50px

  }

`

const HeaderSearchBlock = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex: 0 0 300px;

  @media (max-width: 767px) {
    flex: 0 0 50px

  }
`;

const SearchList = styled.div`
  position: absolute;
  width: 300px;
  min-height: 400px;
  background-color: #eee;
  top: 50px;
  right: 30px;
`;

const List = styled.li`
  padding: 5px 10px;
`;

const Button = styled.button`
  position: absolute;
  top: 20%;
  right: 4px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
`;

function HeaderPage({history}) {
  const [value, setValue] = useState(''); 
  const [error, setError] = useState(null);
  const [games, setGames] = useState([]);

  const enterName = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    loadData();
  }, [value])

  const loadData = () => {
    fetch(`https://api.rawg.io/api/games?key=ca61123216c44a7e9edc35c07faf7790&search=${value}`)
    .then(res => res.json())
    .then(
      (response) => {
        setGames(response.results);
      },
      (error) => {
        setError(error);
      }
    )
  }


  return (<HeaderStyle>
    <HeaderLogo>Header logo</HeaderLogo>
    <HeaderSearchBlock>
      <Input type="text" value={value} onChange={event => enterName(event)}/>
      {value && <Button onClick={() => setValue('')}>X</Button>}
    </HeaderSearchBlock>
    {value && <SearchList>
      <ul>
        {games.map(game => <List key={game.id}>
          <Link 
            to={{
              pathname: `/games/${game.slug}`,
              gameProps: {game: game}
            }}
          >
            {game.name}
          </Link>
        </List>)}
      </ul>
    </SearchList>}
  </HeaderStyle>)
}

export default HeaderPage;