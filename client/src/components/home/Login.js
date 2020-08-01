import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { handleSignin } from '../../core/auth';

const Login = () => (
    <Card>
        <Card.Header><h3>Consultants Login</h3></Card.Header>
        <Card.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Drop an email to startup.banjarey@gmail.com for you forget your password
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={handleSignin}>Sign in</Button>

                <Form.Text className="text-muted">
                    Not a part of the consultant community? <span className="signup-cta">Create an account.</span>
                </Form.Text>
            </Form>
        </Card.Body>
    </Card>
)

export default Login;