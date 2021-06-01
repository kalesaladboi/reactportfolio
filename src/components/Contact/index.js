import React, { useState } from 'react';
import {validateEmail } from '../../utils/helpers';

function Contact() {
  let errMsg = document.getElementById('errMsg');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
      errMsg.classList.remove('hide');
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        errMsg.classList.remove('hide');
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        errMsg.classList.add('hide');
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-10 col-xl-12">
                        <div className="intro">
                            <div className="hero-content">
                            <h1>Let's Get in Touch</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xxl-10 col-xl-12">
                        <div className="row">
                        <div className="col-md-8">
                            <form id="contact-form" className="mb-4" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email">Email address:</label>
                                        <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message">Message:</label>
                                        <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                                    </div>
                                    <div id="errMsg" className="mb-3 hide">
                                        <div className="alert alert-danger" role="alert">
                                            <p className="error-text">{errorMessage}</p>
                                        </div>
                                    </div>
                                    <button data-testid="button" className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
      );
}
export default Contact;