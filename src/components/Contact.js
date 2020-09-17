import React, { Component } from 'react';
import '../styles/contact.css';

export class Contact extends Component {
    constructor(){
        super();
        this.sendEmail = this.sendEmail.bind(this);
    }
    sendEmail(e){
        console.log('ye');
        e.preventDefault();
    }
    render() {
        return (
            <div className="page-container contact-page">
                <div className="contact-info">
                    <h1>Contact</h1>
                    <p>Get in touch via the form on this page, or reach out via the methods below to arrange a time to chat.</p>
                    <div className="contact-info-details">
                        <a href="tel:646-236-6015">646-236-6015</a>
                        <a href="mailto:rkatz235@gmail.com">rkatz235@gmail.com</a>
                    </div>
                </div>
                <div className="contact-form">
                    <form className="contact-form" onSubmit={this.sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input className="button" type="submit" value="Send" id="form-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact
