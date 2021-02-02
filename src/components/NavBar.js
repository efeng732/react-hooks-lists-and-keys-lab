import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let newArr = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>

  ))

  return <nav>{newArr}</nav>;
}

export default NavBar;
