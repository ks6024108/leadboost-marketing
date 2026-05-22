import ContactCTA from "../components/contact/ContactCTA";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";
import FAQ from "../components/contact/FAQ";

const ContactPage = () => {
  return (
    <>
      <main className="pt-20">
        <ContactCTA />

        <ContactInfo />

        <ContactMap />

        <FAQ />
      </main>
    </>
  );
};

export default ContactPage;
