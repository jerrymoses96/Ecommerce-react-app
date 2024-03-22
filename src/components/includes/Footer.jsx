import FooterLinks from "./FooterLinks";
import FooterNote from "./FooterNote";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-[#F4F4F4] "
        style={{
          borderTop: "1px solid #E8ECF2",
          borderBottom: "1px solid #E8ECF2",
        }}
      >
        <div className="wrapper my-5">
          <FooterLinks />
        </div>
      </div>
      <FooterNote />
    </div>
  );
};

export default Footer;
