import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo from "@/components/WhatsApp Image 2024-08-10 at 04.25.33_a2fbaa82.jpg"
import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="flex w-full h-20 justify-between items-center p-3 bg-[#303030] text-white">
        <div className="flex gap-3">
        {/* <Image src={logo} alt="" className="h-full w"/> */}
        <span>LOGO HERE</span>
        </div>
        <div className="flex gap-3">
        <Link href={"https://wa.me/message/EMVKG6FU7VXTI1"} target="_blank">
          <Button className="flex flex-row items-center gap-1 text-white font-bold bg-[#0CAD2F] border-none p-3">
            <span><FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6"/></span>
            <span>WhatsApp</span>
          </Button>
        </Link>
        </div>
      </div>
    </>
  );
}
export default NavBar;
