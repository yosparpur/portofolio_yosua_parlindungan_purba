import React from 'react';

function Contact() {
  return (
    <article className="contact-section">
      <h2>Contact</h2>
      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <h4>Email</h4>
          <a href="mailto:yosuappurba@gmail.com">yosuappurba@gmail.com</a>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <h4>Phone</h4>
          <p>+62 812-9330-1937</p>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <h4>Location</h4>
          <p>Depok, Jawa Barat, Indonesia</p>
        </div>
      </div>
    </article>
  );
}

export default Contact;