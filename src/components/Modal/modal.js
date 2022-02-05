import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

const Popup = ({isOpen, toggle}) => {

    return (
    <>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle>Login</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label htmlFor='username'>UserName</Label>
                        <Input type="text" id="username" name="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'>Password</Label>
                        <Input type="password" id="password" name="password" />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" id='checkbox1' name="remember"/>
                            Remember me
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" id='checkbox2' name="newuser"/>
                            New User
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Login</Button>
                </Form>
            </ModalBody>
        </Modal>
    </>
  );
};

export default Popup;