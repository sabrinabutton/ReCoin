import logo from './logo.svg';
import {Navbar, NavItem, DropdownMenu} from './NavBar'
import {BsList} from 'react-icons/bs'
import WebcamCapture from './WebcamCapture';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon = {<BsList/>}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <WebcamCapture/>
    </div>
  );
}



export default App;
