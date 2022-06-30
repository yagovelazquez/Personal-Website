import {
  ContactInfoContainer,
  ContactParagraph,
  IconsContainer,
  ParagraphsContainer,

} from "./ContactInfo.styled";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";


function ContactInfo() {
  return (
    <ContactInfoContainer>
      <IconsContainer>
        <a  rel="noopener noreferrer"  href="https://www.linkedin.com/in/yago-velazquez-1923b715a/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a rel="noopener noreferrer" href="https://github.com/yagovelazquez/" target="_blank">
          <FaGithub />
        </a>
        <a rel="noopener noreferrer" href="https://www.instagram.com/yagovelazquez/" target="_blank">
          <FaInstagram />
        </a>
      </IconsContainer>
      <ParagraphsContainer>
        <ContactParagraph>Web Developer</ContactParagraph>
        <ContactParagraph fontSize="1rem">+351 964788105 <b><i>(This number is currently only available for whatsapp)</i></b>
</ContactParagraph>
        <ContactParagraph fontSize="0.8rem" color="white">
          yagovelazquezsouzaa@gmail.com
        </ContactParagraph>
        <ContactParagraph>LISBON, PORTUGAL</ContactParagraph>
      </ParagraphsContainer>
    </ContactInfoContainer>
  );
}

export default ContactInfo;
