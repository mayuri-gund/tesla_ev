import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"
import { Link } from 'react-router-dom';


function CollapsibleExample() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" variant='darkgreen' style={{   boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
      <Container >
        <Navbar.Brand href="/Home">
          <img src="Images/Tesla1.png" alt="website logo" style={{ width: 150, marginTop: -7, margin: 0 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: 30 }}>
            <Link className='nav-link' to="/Home">Home</Link>
            <Link className='nav-link' to="/EvProducts">Ev Products</Link>
            <Link className='nav-link' to="/EvCourses">Ev Courses</Link>
            
              <Link className='nav-link' to="/EvFranchise">Ev Franchise</Link>
              <Link className='nav-link' to="/EvCoeMou">Ev COE & MOU</Link>
              <Link className='nav-link' to="/EvJobs">Ev Jobs</Link>
              <Link className='nav-link' to="/EvRetro">Ev Retro</Link>
              <Link className='nav-link' to="/EvApp">Ev App</Link>
              <Link className='nav-link' to="/EvOnlineTest">Ev Online Test</Link>

          </Nav>
          <Nav className="me-auto1" style={{ marginLeft: 30 }}>
            <Link className='nav-link' to="/Gallery">Gallery</Link>
            <Link className='nav-link' to="/AboutUs">About Us </Link>
            <Link className='nav-link' to="/ContactUs">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
