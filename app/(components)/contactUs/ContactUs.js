import React from 'react';

export default function ContactUs() {
  return (
    <div>
      <section className="location" style={{ textAlign: 'center', marginTop: '70px' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.753174445232!2d73.0586993689214!3d31.477759676546086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392241c6d89b9f37%3A0xa6e67ffc5de7fd8!2sSargodha%20Rd%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1711969693623!5m2!1sen!2s" width="80%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="content-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>NH9 Road, ABC Building</h5>
                <p>Ghaziabad, Uttar Pradesh, IN</p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+91 7445546525</h5>
                <p>Monday To Saturday, 9AM To 6PM</p>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <span>
                <h5>xyz@email.com</h5>
                <p>Email Us Your Query</p>
              </span>
            </div>
          </div>
          <div className="content-col">
            <form>
              <input type="text" placeholder="Enter Name" required />
              <input type="email" placeholder="Enter Email" required />
              <input type="text" placeholder="Enter Subject" required />
              <textarea rows="8" placeholder="Message" required></textarea>
              <button type="submit" className="hero_btn btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
