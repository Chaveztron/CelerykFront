import React from 'react';
import { Nav } from 'rsuite';
import { HashRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';

import Sidenav from 'rsuite/Sidenav';
import Dropdown from 'rsuite/Dropdown';

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
  marginRight: 10
};

const MySidenav = ({ appearance, ...props }) => {
  return (
    <div style={styles}>
      <Sidenav appearance={appearance} defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav {...props}>
            <Nav.Item eventKey="1" active >
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" >
              User Group
            </Nav.Item>
            <Dropdown eventKey="3" title="Advanced" >
              <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
              <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
              <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
            </Dropdown>
            <Dropdown eventKey="4" title="Settings">
              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
              <Dropdown.Menu eventKey="4-5" title="Custom Action">
                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default function App() {

  //https://rsuitejs.com/components/sidenav/
  const [activeKey, setActiveKey] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState(['3', '4']);

  return (
    <Router>
      <div>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/users">Users</NavLink>
        </Nav>

        <MySidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onSelect={setActiveKey}
        onOpenChange={setOpenKeys}
        appearance="inverse"
      />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
