import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import Button from "react-bootstrap/Button";

function SereviceCard(props: any) {
  return (
    <div className="hover:cursor-pointer drop-shadow border rounded-lg p-4 flex flex-col gap-3 w-full mb-2">
      <div className="flex flex-row w-full items-center">
        <div className="w-[50%] h-full flex-row">
          <p className="text-xl font-bold p-2">{props.title}</p>
          <p className="hidden laptop:flex p-2 text-sm font-light">{props.desc}</p>
        </div>
        <div className="w-[50%] flex flex-row items-center justify-end">
          <p className="p-3">{props.duration}</p>
          <p className="text-xl bg-[#0B3880] p-2 rounded-lg text-white">{props.price}</p>
        </div>
      </div>
      {/* <Button className="w-full">AGENDAR AGORA</Button> */}
    </div>
  );
}

export default SereviceCard;
