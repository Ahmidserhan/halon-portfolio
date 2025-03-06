import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ background: 'rgba(32, 32, 32, 0.7)' }}
      >
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
          <p className="section-subtitle">Let's create something amazing together</p>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Let's Build Something Together</h3>
            <p>Available for freelance work and full-time positions</p>
            <div className="contact-methods">
              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-envelope"></i>
                <span>email@example.com</span>
              </motion.div>
              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-phone"></i>
                <span>+1 234 567 890</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="form-group">
              <input type="text" placeholder="Name" style={{ background: 'var(--background-light)' }} required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" style={{ background: 'var(--background-light)' }} required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" style={{ background: 'var(--background-light)' }} required></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
