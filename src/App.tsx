import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import logo from "./capy.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Joys Header</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Joy Mwaria - Hello
                World from UD
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                src={logo}
                alt="A painting of a capybara in a fancy suit holding a glass of wine"
            />
            <ul>
                <li>This</li>
                <li>is</li>
                <li>capy</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>omg I have a page</Col>
                        <Col>the page has two columns</Col>
                    </Row>
                    <div
                        style={{
                            backgroundColor: "#FF0000",
                            width: 700,
                            height: 300
                        }}
                    >
                        <Row>
                            <Col>omg I have a page</Col>
                            <Col>the page has two columns</Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default App;
