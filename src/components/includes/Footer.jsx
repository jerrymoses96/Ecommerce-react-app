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
          <div className="flex gap-60 text-base font-normal">
            <div>
              <ul className="flex flex-col gap-1">
                <li className="text-xl font-semibold">support</li>
                <li>help center</li>
                <li>AirCover</li>
                <li>Combating discrimination</li>
                <li>Supporting people with disabilities</li>
                <li>Cencellation options</li>
                <li>Report neighbourhood concern</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-1">
                <li className="text-xl font-semibold">Hosting</li>
                <li> Local home</li>
                <li>Cover for hosts</li>
                <li>Hosting resources</li>
                <li>Community forum</li>
                <li>Hosting responsibly</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-1">
                <li className="text-xl font-semibold">Localhost</li>
                <li>Newsroom</li>
                <li>New Features</li>
                <li>Careers</li>
                <li>Investres</li>
                <li>Gift cards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterNote />
    </div>
  );
};

export default Footer;
