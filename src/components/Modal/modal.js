import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

const Popup = ({isOpen, toggle}) => {

    return (
    <>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>Login</ModalHeader>
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
                            <Input type="checkbox" name="remember"/>
                            Remember me
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