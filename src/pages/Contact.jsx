import Navbar from "../Navbar/Navbar";
import ContactBanner from "../components/ContactBanner/ContactBanner";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactBanner />
      <ContactForm />
      <ContactInfo />
      <GoogleMap />
      <Footer />
    </>
  );
}

export default Contact;