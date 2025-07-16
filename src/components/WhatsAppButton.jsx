import React from "react";
import "../assets/css/components/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "919694498757";
  const message = "Hello! I'd like to know more about your courses.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={"./assets/images/home/whatsapp-icon.png"} alt="WhatsApp" className="whatsapp-icon" />
      How can I help you?
    </a>
  );
};

export default WhatsAppButton;
