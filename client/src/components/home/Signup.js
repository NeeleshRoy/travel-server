import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

import { handleSignup } from '../../core/auth';

const Signup = () => (
    <Card>
        <Card.Header><h3>Consultants Signup</h3></Card.Header>
        <Card.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Mobile phone number" />
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={handleSignup}>Sign in</Button>

                <Form.Text className="text-muted">
                    Already a part of the consultant community? <span className="signin-cta" onClick>Signin instead.</span>
                </Form.Text>
            </Form>
        </Card.Body>
    </Card>
)

export default Signup;