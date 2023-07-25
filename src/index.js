import "./styles/style.css";
import javascriptLogo from "./assets/javascript.svg";
import fwdpLogo from "/fwdp-stacked-tr.png";
import fwdpSvg from "/fwdp.svg";
import { setupCounter } from "./components/counter.js";
// From public folder
import viteLogo from "/vite.svg";

let name = document.getElementById("fname");
const btn = document.querySelector("#edit");

btn.addEventListener("click", () => {
  name.hasAttribute("disabled")
    ? name.removeAttribute("disabled")
    : name.setAttribute("disabled", true);

  //  let checkNameVal = ;
  // name.removeAttribute('disabled');
});
