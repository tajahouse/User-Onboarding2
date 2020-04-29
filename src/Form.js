import React from 'react';
import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup.string().required("Must include name."),
    email: Yup.string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long.")
      .required("Password is required"),
    terms: Yup.boolean().oneOf([true], "You must accept Terms and Conditions")
  });

const Form = () =>{
    return (
        <form>
            <label htmlFor="name">
                Name
                <input 
                id="name"
                type="text" 
                name="name" 
                />
            </label>
            <label htmlFor="email">
                Email
                <input
                id="email" 
                type="email" 
                name="email"
                />
            </label>
            <label htmlFor="password">
                password
                <input 
                id="password" 
                type="password" 
                name="password" 
                />
            </label>
            <label htmlFor="terms">
                Agree to terms and conditions?
                <input 
                id="terms" 
                type="checkbox" 
                name="terms"
                />
            </label>
            <button>Submit</button>
        </form>       
    );
}

export default Form;