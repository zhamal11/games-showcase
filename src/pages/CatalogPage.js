import styled from 'styled-components';
import {useEffect, useState} from 'react';
import CardCatalog from '../components/CardCatalog';

const CardBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


function CatalogPage() {
  const [category, setCategory] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.rawg.io/api/genres?key=ca61123216c44a7e9edc35c07faf7790")
      .then(res => res.json())
      .then(
        (res) => {
          setCategory(res.results);
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
      <CardBlock>
        {category.map(item => (<CardCatalog key={item.id} category={item}/>))}
      </CardBlock>
    </div>
  }
  
}

export default CatalogPage;