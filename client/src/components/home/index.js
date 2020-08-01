import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            signIn: true
        }
    }
    render() {
        return (
            <div className="home">
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={8}>
                            <div className="cta_home">
                                <h1>Banjarey Administration</h1>
                            </div>
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            {
                                this.state.signIn ? <Login /> : <Signup />
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;