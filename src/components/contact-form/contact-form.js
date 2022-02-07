import React from 'react'
import * as styles from './contact-form.module.scss'

const ContactForm = () => {
  return (
    <form 
      name="Contact Form" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="moreInfo"
      action="/contact/thank-you" 
      className={styles.contactForm}>
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <label htmlFor="txtName">Name:</label>
        <input type="text" name="name" id="txtName" required />
      </div>
      <div>
        <label htmlFor="txtEmail">Email:</label>
        <input type="email" name="email" id="txtEmail" required />
      </div>
      <div>
        <label htmlFor="txtMessage">Message:</label>
        <textarea name="message" id="txtMessage" required />
      </div>
      <div className={styles.hidden}>
        <label htmlFor="txtMoreInfo">More Info:</label>
        <input type="text" name="moreInfo" id="txtMoreInfo" />
      </div>
      <a target="_blank" rel="noreferrer" href="/privacy-policy">Privacy Policy</a>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm