import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarComponent = styled.div`
  flex: 0 0 30%;
  padding: 10px;
`;

const List = styled.li`
  & a {
    width: 100%;

    .link {
      width: 100%;
      padding: 10px;
      margin-bottom: 5px;
    }

    &:hover {
      .link {
        background-color: #eee;
      }
    }

    &.active {
      font-weight: bold;
      color: red;
      
      .link {
        background-color: #eee;
      }
    }
  }
`;

function Sidebar() {
  return (<SidebarComponent>
    <nav>
      <ul className="navbar">
        <List className="nav-link"><NavLink exact to="/"><div className='link'>Home</div></NavLink></List>
        <List className="nav-link"><NavLink to="/catalog"><div className='link'>Catalog</div></NavLink></List>
      </ul>
    </nav>
  </SidebarComponent>)
}

export default Sidebar;