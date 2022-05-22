import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import {
  facebookLink,
  instagramLink,
  telegramLink,
  twitterLink,
  whatsappLink,
  youtubeLink
} from "../constants/socialLinkConstants";

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href={facebookLink}>
          <FaFacebook className="social-icon facebook-icon"></FaFacebook>
        </a>
      </li>
      <li>
        <a href={twitterLink}>
          <FaTwitter className="social-icon twitter-icon"></FaTwitter>
        </a>
      </li>
      <li>
        <a href={instagramLink}>
          <FaInstagram className="social-icon instagram-icon"></FaInstagram>
        </a>
      </li>
      <li>
        <a href={youtubeLink}>
          <FaYoutube className="social-icon youtube-icon"></FaYoutube>
        </a>
      </li>
      <li>
        <a href={whatsappLink}>
          <FaWhatsapp className="social-icon whatsapp-icon"></FaWhatsapp>
        </a>
      </li>
      <li>
        <a href={telegramLink}>
          <FaTelegram className="social-icon telegram-icon"></FaTelegram>
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
