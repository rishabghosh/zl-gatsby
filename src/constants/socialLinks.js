import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://facebook.com">
          <FaFacebook className="social-icon facebook-icon"></FaFacebook>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitter className="social-icon twitter-icon"></FaTwitter>
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <FaInstagram className="social-icon instagram-icon"></FaInstagram>
        </a>
      </li>
      <li>
        <a href="https://youtube.com">
          <FaYoutube className="social-icon youtube-icon"></FaYoutube>
        </a>
      </li>
      <li>
        <a href="https://web.whatsapp.com">
          <FaWhatsapp className="social-icon whatsapp-icon"></FaWhatsapp>
        </a>
      </li>
      <li>
        <a href="https://telegram.org/">
          <FaTelegram className="social-icon telegram-icon"></FaTelegram>
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
