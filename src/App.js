import React,{Fragment} from 'react';
import { Nav } from 'rsuite';
import { HashRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';

import Sidenav from 'rsuite/Sidenav';
import Dropdown from 'rsuite/Dropdown';

import Navbar from 'rsuite/Navbar';

import Sidebar from 'rsuite/Sidebar';
import Content from 'rsuite/Content';
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';

// eslint-disable-next-line react/display-name

const NavLink = React.forwardRef((props, ref) => {
  const location = useLocation();
  return (
    <Nav.Item {...props} ref={ref} active={props.to === location.pathname} as={Link} />
  );
});

const styles = {
  width: 240,
  display: 'inline-table',
  marginRight: 10,

};

const MySidenav = ({ appearance, ...props }) => {
  return (
    <div style={styles}>
      <Sidenav appearance={appearance} defaultOpenKeys={['3']}>
        <Sidenav.Body>
          <Nav {...props}>

            <Dropdown eventKey="3" title="Formulario" >
            <Dropdown.Item eventKey="3-1" href="#/form">Form</Dropdown.Item>
            </Dropdown>
            <Dropdown eventKey="4" title="Componentes">
              <Dropdown.Item eventKey="4-1" href="#/inputs">Inputs</Dropdown.Item>
              <Dropdown.Item eventKey="4-2" href="#/inputs">Dropdown-list</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Etiquetas</Dropdown.Item>
              <Dropdown.Item eventKey="4-4">Calendario</Dropdown.Item>
              <Dropdown.Item eventKey="4-5">Radio-Button</Dropdown.Item>
              <Dropdown.Item eventKey="4-6">Checkbox</Dropdown.Item>
              <Dropdown.Item eventKey="4-7">Botones</Dropdown.Item>

            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

function Home() {
  return (
    <Fragment>
      <h2>Home</h2> 
      <p>Elija unas de las opciones del sidebar</p>
    </Fragment>
  );
}

function Form() {
  return <h2>Form</h2>;
}

function Inputs() {
  return <h2>Inputs</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default function App() {

  //https://rsuitejs.com/components/sidenav/
  const [activeKey, setActiveKey] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState(['3', '4']);

  return (
<Router>
  <Header>
      <Navbar appearance="default">
      <Navbar.Brand href="#">
        CELERYK
      </Navbar.Brand>
          <Nav>
            <Nav.Item ><NavLink to="/">Inicio</NavLink></Nav.Item>
            <Nav.Item>Documentacion</Nav.Item>
            <Nav.Item>Acerca de..</Nav.Item>
            <Dropdown title="Mas">
              <Dropdown.Item>Company</Dropdown.Item>
              <Dropdown.Item>Team</Dropdown.Item>
              <Dropdown.Item>Contact</Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav pullRight>
            <Nav.Item>Settings</Nav.Item>
          </Nav>
      </Navbar>
  </Header>

      <Container>
            <Sidebar>
                <MySidenav
                activeKey={activeKey}
                openKeys={openKeys}
                onSelect={setActiveKey}
                onOpenChange={setOpenKeys}
                appearance="inverse"
              />
            </Sidebar>

              <Content>
                  <Switch>
                    <Route path="/form">
                      <Form />
                    </Route>
                    <Route path="/inputs">
                      <Inputs />
                    </Route>
                    <Route path="/users">
                      <Users />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
              </Content>
      </Container>
  </Router>
  );
}
