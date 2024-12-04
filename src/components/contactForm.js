import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import * as styles from "./contactForm.module.css";
const ContactForm = () => {
  const form = useRef();
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formatPhoneNumber = (value) => {
    // Remove non-numeric characters
    const cleaned = ('' + value).replace(/\D/g, '');

    // Format the phone number with dashes for display
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  };

  const handlePhoneChange = (e) => {
    // Update the phone state with the raw value
    setPhone(e.target.value);
  };

  const handleBlur = (e) => {
    // Format the phone number on blur
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zjmg1vb', 'template_8dnd454', form.current, {
        publicKey: 'JBVgFRTEY8MobEEq4',
      })
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully!');
          setErrorMessage('');
          form.current.reset(); // Optionally reset the form
        },
        (error) => {
          setErrorMessage('Failed to send your message. Please try again.');
          setSuccessMessage('');
        },
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor='user_name'>Name</label>
          <input type="text" name="user_name" required placeholder="Name*" />
        </div>
        <div>
          <label htmlFor='user_email'>Email</label>
          <input type="email" name="user_email" required placeholder="email@example.com*" />
        </div>
        <div>
          <label htmlFor='user_phone'>Phone</label>
          <input
            type="tel"
            name="user_phone"
            placeholder="078-888-8080"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={handleBlur}  // Format on blur
            pattern="\d{3}-\d{3}-\d{4}"  // Basic pattern for 10-digit phone number
            required
          />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea name="message" required placeholder="Enter message*" />
        </div>
        <button type="submit" value="Send" className={styles.formBtn}>Send<FontAwesomeIcon icon={faArrowRight} /></button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default ContactForm;
