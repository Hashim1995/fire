'use client'
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';


const LoginForm = ({ isOpen, toggle, args }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        // You can add your submit logic here
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} {...args}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            {...register('email', { required: true })}
                        />
                        {errors?.email && <span>This field is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            {...register('password', { required: true })}
                        />
                        {errors?.password && <span>This field is required</span>}
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>
                    Do Something
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>

    );
};

export default LoginForm