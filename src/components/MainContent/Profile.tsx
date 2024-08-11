import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faCar,
  faMugSaucer,
  faWheelchair,
  faWifi,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <>
      <div className="bg-[#303030] text-white rounded p-2 drop-shadow w-full">
        
        <p className="p-2 text-justify">
          Especialistas em cabelo e barba, local com uma boa conversa, bebidas
          quentes e aquela gelada!
        </p>
        <div className="p-2">
          <a
            className=""
            href="https://www.google.com/maps?q=Rua+Florian%C3%B3polis,371+d,+Chapec%C3%B3+89812530"
            target="_blank"
          >
            <div className="flex flex-row items-center gap-2 bg-white justify-center p-1 rounded-xl text-black">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="h-5 w-5 text-[#c24040]"
              />
              <strong className="">Rua Florianópolis, 371d - Centro</strong>
            </div>
          </a>
        </div>
        <div className="flex flex-wrap w-full text-[#a3a3a3]">
          <div className="w-[50%] p-2 flex flex-row gap-3 items-center">
            <FontAwesomeIcon icon={faWifi} className="h-5 w-5" />
            <p>WIFI</p>
          </div>
          <div className="w-[50%] p-2 flex flex-row gap-3 items-center">
            <FontAwesomeIcon icon={faMugSaucer} className="h-5 w-5" />
            <p>Lanches</p>
          </div>
          <div className="w-[50%] p-2 flex flex-row gap-3 items-center">
            <FontAwesomeIcon icon={faCar} className="h-5 w-5" />
            <p>Estacionamento</p>
          </div>
          <div className="w-[50%] p-2 flex flex-row gap-3 items-center">
            <FontAwesomeIcon icon={faWheelchair} className="h-5 w-5" />
            <p>Acessibilidade</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
