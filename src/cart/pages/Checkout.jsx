import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { useForm } from "../../hooks/useForm";
import { CheckoutForm } from "../components/CheckoutForm";
import { PurchaseSummary } from "../components/PurchaseSummary";

export const Checkout = () => {

  const [validated, setValidated] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(true)
  const { 
    name,
    lastname,
    email,
    confirmEmail,
    phone, 
    onInputChange
  } = useForm({
    name: '',
    lastname: '',
    email: '',
    confirmEmail:'',
    phone: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    // const form = event.currentTarget;
    validateEmails();

    // if (form.checkValidity() === false && emailIsValid)  {
    //   console.log('no valida aun');
    // }

    setValidated(true);
  };

  const validateEmails = () => {
    const isValid = email == confirmEmail;
    setEmailIsValid(isValid );
  };


  return (
    <div className="checkout-container">
      <CheckoutForm
        handleSubmit = { handleSubmit}
        validated = {validated}
        emailIsValid = { emailIsValid }
        name = {name}
        lastname = { lastname }
        email = {email}
        confirmEmail = {confirmEmail}
        phone = {phone}
        onInputChange={onInputChange}
        />
        <PurchaseSummary/>
    </div>
  )
}
