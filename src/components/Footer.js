import React from "react";
import "./../styles/components/footer.css";
import logo from "./../assets/images/logo-black.png"

const Footer = () => {
  return (
    <footer class="footer">
      <img src={logo} alt="" />
      <p class="copyright">
        © 2020 Kasa. All <span>rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
