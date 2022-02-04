import React from 'react'
import * as styles from './contact-form.module.scss'

const ContactForm = () => {
  return (
    <form name="Contact Form" method="POST" data-netlify="true" className={styles.contactForm}>
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <label for="txtName">Name:</label>
        <input type="text" name="name" id="txtName" required />
      </div>
      <div>
        <label for="txtEmail">Email:</label>
        <input type="email" name="email" id="txtEmail" required />
      </div>
      <div>
        <label for="txtMessage">Message:</label>
        <textarea name="message" id="txtMessage" required />
      </div>
      <a target="_blank" href="/privacy-policy">Privacy Policy</a>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm