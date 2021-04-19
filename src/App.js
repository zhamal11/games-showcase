import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import GamePage from './pages/GamePage';
import CategoryPage from './pages/CategoryPage';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
`;

const Content = styled.div`
  padding: 10px;
  flex: 1 1 70%
`

function App() {


  
  return (
    <Wrapper>
      <Header/>
      <Container>
        <Sidebar />
        <Content>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route  path='/catalog' exact component={CatalogPage}/>
            <Route path='/catalog/:name' exact component={CategoryPage}/>
            <Route  path='/games/:name'  component={GamePage}/>
            <Route render={() => <h1>404!</h1>}/>
        </Switch>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default App;
