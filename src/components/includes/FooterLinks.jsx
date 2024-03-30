const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:justify-between md:gap-0 text-base font-normal">
      <div className="md:w-1/3">
        <h2 className="text-xl font-semibold">Support</h2>
        <ul className="flex flex-col gap-1">
          <li><a href="#">Help Center</a></li>
          <li><a href="#">AirCover</a></li>
          <li><a href="#">Combating Discrimination</a></li>
          <li><a href="#">Supporting People with Disabilities</a></li>
          <li><a href="#">Cancellation Options</a></li>
          <li><a href="#">Report Neighborhood Concern</a></li>
        </ul>
      </div>
      <div className="md:w-1/3">
        <h2 className="text-xl font-semibold">Hosting</h2>
        <ul className="flex flex-col gap-1">
          <li><a href="#">Local Home</a></li>
          <li><a href="#">Cover for Hosts</a></li>
          <li><a href="#">Hosting Resources</a></li>
          <li><a href="#">Community Forum</a></li>
          <li><a href="#">Hosting Responsibly</a></li>
        </ul>
      </div>
      <div className="md:w-1/3">
        <h2 className="text-xl font-semibold">Localhost</h2>
        <ul className="flex flex-col gap-1">
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">New Features</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
