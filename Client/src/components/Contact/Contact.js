import AnimatedPage from "../AnimatedPage";
import { ContactContainer, ContactDetailsContainer, ContactFormContainer } from "./Contact.styled";
import ContactForm from "./ContactForm";
import ContactInfo from './ContactInfo';

function Contact() {
  return (
    <AnimatedPage>
    <ContactContainer>
        <ContactDetailsContainer>
      <ContactFormContainer>
        <ContactForm />
      </ContactFormContainer>
      <ContactInfo />
      </ContactDetailsContainer>
    </ContactContainer>
    </AnimatedPage>
  );
}

export default Contact;
