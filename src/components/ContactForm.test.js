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
        const firstNameInput = screen.getByLabelText(/first Name/i);
        //console.log(firstNameInput);
        const lastNameInput = screen.getByLabelText(/last Name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);
        const submitButton = screen.getByRole("button", {name:/submit/i});

        //Fill out the inputs and click the button
        //first parameter, input field, second object is event parameter
        fireEvent.change(firstNameInput, {target: {name: 'firstName', value: 'Amy'}});
        fireEvent.change(lastNameInput, {target: {name: 'lastName', value: 'John'}});
        fireEvent.change(emailInput, {target: {name: 'email', value: 'amyjohn@gmail.com'}});
        fireEvent.change(messageInput, {target: {name: 'message', value: 'Science buddy!!!'}});
        fireEvent.click(submitButton);

        //Assert-test that the filled out input rendered on the page after clicking  submit 
        // {
        //     "firstName": "Amy",
        //     "lastName": "John",
        //     "email": "amyjohn@gmail.com",
        //     "message": "Science buddy!!!"
        //   }
        const renderFirstName = await screen.findByText( /"firstName": "Amy",/i)
        const renderLastName = await screen.findByText( /"lastName": "John",/i)
        const renderEmail = await screen.findByText( /"email": "amyjohn@gmail.com",/i)
        const renderMessage = await screen.findByText( /"message": "Science buddy!!!"/i)

        //screen.debug(); 

    });
    test('Required error for first name render', async () => {
        //Arrange - render the form
        render(<ContactForm />)

        //Act - query the input
        const firstNameInput = screen.getByLabelText(/first Name/i);
        
        //Click on and off the input element
        fireEvent.click(firstNameInput);
        fireEvent.blur(firstNameInput)

        //Assert - check to see if the error message rendered
        const firstNameReqError = await screen.findByText(/Looks like there was an error: Required/i)
    });
    test('Required error for last name render', async () => {
        //Arrange - render the form
        render(<ContactForm />)

        //Act - query each the input
        const lastNameInput = screen.getByLabelText(/last Name/i);
        
        //Click on and off the input element
        fireEvent.click(lastNameInput);
        fireEvent.blur(lastNameInput)

        //Assert - check to see if the error message rendered
        const lastNameReqError = await screen.findByText(/Looks like there was an error: Required/i)
    });
    test('Required error for email render', async () => {
        //Arrange - render the form
        render(<ContactForm />)

        //Act - query the input
        const emailInput = screen.getByLabelText(/email/i);
        
        //Click on and off the input element
        fireEvent.click(emailInput);
        fireEvent.blur(emailInput)

        //Assert - check to see if the error message rendered
        const emailReqError = await screen.findByText(/Looks like there was an error: Required/i)
    })
});