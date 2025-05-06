import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

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
            
            <div className="contact-email">
              <i className="fas fa-envelope"></i>
              <span>halonahmidserhan5@gmail.com</span>
            </div>
            
            <div className="contact-social-links">
              <motion.a 
                href="https://www.facebook.com/ahmidserhan.halon.9/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="https://github.com/Ahmidserhan" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ahmidserhan-halon-a10690360/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
            
            <div className="contact-methods">
              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>Zamboanga City, Philippines</span>
              </motion.div>
              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-phone"></i>
                <span>+639270640617</span>
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
