import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const CardStyle = styled.div`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px;
  min-height: 200px;
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImg = styled.div`
  & img {
    width: 200px;
    height: 150px;
  }
`;

const Button = styled.button`
  background-color: #000;
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #333;
  }
`;

const TextBlock = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 5px;
`;

function CardGame({history, game}) {

  const goToPage = () => {
    history.push('/games/'+game.slug, {gameProps: {game: game}});
  }

  return (<CardStyle>
    <div>
      <CardImg>
        <img src={game.background_image} alt=""/>
      </CardImg>
      <TextBlock>{game.name}</TextBlock>
      <TextBlock>{game.rating}</TextBlock>
      <TextBlock>{game.released}</TextBlock>
    </div>
    <div>
      <Button onClick={() => goToPage()}>Open</Button>
    </div>
</CardStyle>)
}

export default withRouter(CardGame);