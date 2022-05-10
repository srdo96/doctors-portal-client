import React from "react";

const Footer = () => {
  return (
    <div className="bg-[url('../../assets/images/footer.png')]">
      <footer class="footer text-black mx-24 mt-20 ">
        <div>
          <span class="footer-title uppercase">Services</span>
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span class="footer-title uppercase">ORAL HEALTH</span>
          <a class="link link-hover">Fluoride Treatment</a>
          <a class="link link-hover">Cavity Filling</a>
          <a class="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span class="footer-title uppercase">OUR ADDRESS</span>
          <a class="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <div className="mt-28 text-center mb-9">
        <p> Copyright &copy; 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
