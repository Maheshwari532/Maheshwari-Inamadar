import React from "react";
function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can reach me at:</p>
      <ul className="contact-details">
        <li>Email: <a href="mailto:maheshwariinamadar28@gmail.com">maheshwariinamadar28@gmail.com</a></li>
        <li>Phone: +91 9845269954</li>
      </ul>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/maheshwari-inamadar-08b5283a8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Maheshwari532" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;