import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from ".././components/ContactForm";

describe('Tests Contact Form', () => {
    //Test that the contact form renders
    test('Renders Contact Form without errors', () => {
        render(<ContactForm />);
    });
    test('User can successfully fill out form', async () => {
        //Arrange - render the form
        render(<ContactForm />)

        //Act - query each input and the submit button
        // const firstNameInput = screen.getByLabelText(/firstName/i);
        
        const firstNameInput = screen.getByLabelText(/first Name/i);
        //console.log(firstNameInput);
        const lastNameInput = screen.getByLabelText(/last Name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);
        const submitButton = screen.getByRole("button", {name:/submit/i});

        // //kubes
        // const firstNameInput = screen.getByLabelText(/first name/i);
        // const lastNameInput = screen.getByLabelText(/last name/i);

        //Fill out the inputs and click the button
        //first parameter, input field, second object is event parameter
        fireEvent.change(firstNameInput, {target: {name: 'firstName', value: 'Amy'}});
        fireEvent.change(lastNameInput, {target: {name: 'lastName', value: 'John'}});
        fireEvent.change(emailInput, {target: {name: 'email', value: 'amyjohn@gmail.com'}});
        fireEvent.change(messageInput, {target: {name: 'message', value: 'Science buddy!!!'}});
        fireEvent.click(submitButton);

        //Assert-test that the filled out input rendered on the page after clicking  submit 
        // const info = await screen.findByText(`{
        //     "firstName": "Amy",
        //     "lastName": "John",
        //     "email": "amyjohn@gmail.com",
        //     "message": "Science buddy!!!"
        //   }`)
        screen.debug();

    })
});