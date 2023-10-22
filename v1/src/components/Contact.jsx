/* eslint-disable react/no-unescaped-entities */
import whatsappIcon from "../assets/whatsapp-icon.png";
import chatIcon from "../assets/chat-icon.png";
const Contact = () => {
  return (
    <section className="contact">
      <div className="wrapper">
        <div className="grid-container">
          <div className="item">
            <h4>Email Us</h4>
            <p>
              Email us using our simple form and we'll respond within 10 working
              days.
            </p>
            <form>
              <input type="email" placeholder="Enter Your Email" />
              <button>Submit</button>
            </form>
          </div>
          <div className="item">
            <div className="icon">
              <img src={whatsappIcon} alt="" />
            </div>
            <h4>Whatsapp Support</h4>
            <p>Add us on WhatsApp & send queries for instant reply.</p>

            <button>+12-345-678-89089</button>
          </div>
          <div className="item">
            <div className="icon">
              <img src={chatIcon} alt="" />
            </div>
            <h4>chatIcon</h4>
            <p>The fastest way to get in touch with an Expert</p>

            <button>Live Chat</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
