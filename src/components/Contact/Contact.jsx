import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mqaboqel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <p className={styles.contactDescription}>
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Whether you have a question or just want to say hello, feel free to reach out!
            </p>

            <div className={styles.contactMethods}>
              <a 
                href="mailto:keem.kasali@gmail.com" 
                className={styles.contactMethod}
              >
                <div className={styles.methodIcon}>
                  <SiGmail />
                </div>
                <div className={styles.methodDetails}>
                  <h3>Email</h3>
                  <p>keem.kasali@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/hakeem-kasali-313772361" 
                className={styles.contactMethod}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className={styles.methodIcon}>
                  <FaLinkedin />
                </div>
                <div className={styles.methodDetails}>
                  <h3>LinkedIn</h3>
                  <p>Connect with me professionally</p>
                </div>
              </a>

              <a 
                href="https://github.com/Hakeem-404" 
                className={styles.contactMethod}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className={styles.methodIcon}>
                  <FaGithub />
                </div>
                <div className={styles.methodDetails}>
                  <h3>GitHub</h3>
                  <p>Check out my code repositories</p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Send me a message</h3>
              
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  rows="5"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a 
            href="mailto:keem.kasali@gmail.com" 
            className={styles.socialLink}
            aria-label="Email"
          >
            <SiGmail />
          </a>
          <a 
            href="https://www.linkedin.com/in/hakeem-kasali-313772361" 
            className={styles.socialLink}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Hakeem-404" 
            className={styles.socialLink}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;