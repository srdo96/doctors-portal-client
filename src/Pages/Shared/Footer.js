import React from "react";

const Footer = () => {
  return (
    <div className="bg-[url('../../assets/images/footer.png')]">
      <footer className="footer text-black mx-24 mt-20 ">
        <div>
          <span className="footer-title uppercase">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title uppercase">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title uppercase">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <div className="mt-28 text-center mb-9">
        <p> Copyright &copy; 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
