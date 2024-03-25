const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:justify-between md:gap-0 text-base font-normal">
      <div className="md:w-1/3">
        <h2 className="text-xl font-semibold">Support</h2>
        <ul className="flex flex-col gap-1">
          <li>Help Center</li>
          <li>AirCover</li>
          <li>Combating Discrimination</li>
          <li>Supporting People with Disabilities</li>
          <li>Cancellation Options</li>
          <li>Report Neighborhood Concern</li>
        </ul>
      </div>
      <div className="md:w-1/3">
        <h2 className="text-xl font-semibold">Hosting</h2>
        <ul className="flex flex-col gap-1">
          <li>Local Home</li>
          <li>Cover for Hosts</li>
          <li>Hosting Resources</li>
          <li>Community Forum</li>
          <li>Hosting Responsibly</li>
        </ul>
      </div>
      <div className="md:w-1/3">
        <h2 className="text-xl font-semibold">Localhost</h2>
        <ul className="flex flex-col gap-1">
          <li>Newsroom</li>
          <li>New Features</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Gift Cards</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
