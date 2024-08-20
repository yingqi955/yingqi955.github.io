import {Button, ButtonGroup, Container, Row, Col, Image, Navbar} from './import.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import profile from './photos/profile-pic.jpg';



function App() {
  return (
    <div className="App">
      
        <Row>
          {/* profile picture */}
          <Col>
          <Image src={profile} alt="Profile" fluid roundedCircle/>
          </Col>

          <Col xs={10} >
          {/* button */}
          <ButtonGroup aria-label = "modes" data-bs-theme="light">
            <Button id= "music" variant = "primary"><i class="gg-music-note"></i></Button>
            <Button variant = "primary">Light</Button>
            <Button variant = "primary">Dark</Button>
          </ButtonGroup>
          </Col>

        </Row>
      

      <Container fluid>
        <Row>
          <Col>
          <div className = "content">

          <p id="myName" fluid>
            Yingqi Chen
          </p>


          </div>
            
          </Col>

          <Col>
          Nothinng here
          </Col>

          <Col>
          Nothing here
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;