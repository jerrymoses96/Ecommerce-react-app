const FooterNote = () => {
  return (
    <div>
      <div className="wrapper flex flex-col justify-between md:flex-row my-3 ">
        <p>© 2023 Localhost, Inc. All Rights Reserved</p>
        <div className="flex flex-col gap-0 md:flex-row md:gap-5">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default FooterNote;
