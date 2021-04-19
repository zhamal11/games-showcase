import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const CardStyle = styled.div`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px;
  min-height: 200px;
  flex: 0 0 200px;
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

function CardCatalog({category, history}) {
  
  const goAction = () => {
    history.push('/catalog/'+category.slug);
  }

  return (<CardStyle>
    <CardImg>
      <img src={category.image_background} alt=""/>
    </CardImg>
    <TextBlock>{category.name}</TextBlock>
    <TextBlock>count: {category.games_count}</TextBlock>
    <div>
      <Button onClick={()=> goAction()}>Open</Button>
    </div>
</CardStyle>)
}

export default withRouter(CardCatalog);