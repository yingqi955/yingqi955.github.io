import {Button, ButtonGroup, Container, Row, Col} from './import.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <img src="/photos/profile-pic.jpg" alt="Profile"></img>
          </Col>
          <Col xs={8}>1 0f 2</Col>
          <Col>
          {/* button */}
            <ButtonGroup aria-label = "modes">
            <Button variant = "secondary">Light</Button>
            <Button variant = "secondary">Dark</Button>
          </ButtonGroup>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;