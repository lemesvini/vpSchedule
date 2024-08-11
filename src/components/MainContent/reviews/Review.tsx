import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Review() {
  return (
    <>
      <div>
        <div className="border rounded p-3 flex flex-row items-center justify-evenly">
          <div>
            <span className="text-2xl font-bold">5.0</span>
            <span>/5</span>
            <span></span>
          </div>
          <div className="flex flex-row gap-1">
            <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-[#FADB14]" />
            <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-[#FADB14]" />
            <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-[#FADB14]" />
            <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-[#FADB14]" />
            <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-[#FADB14]" />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center p-2">
            <div className="flex flex-col">
              <span>NOME</span>
              <span className="text-[#a3a3a3]">Comentário</span>
            </div>
            <div className="flex flex-row">
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-2">
            <div className="flex flex-col">
              <span>NOME</span>
              <span className="text-[#a3a3a3]">Comentário</span>
            </div>
            <div className="flex flex-row">
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-2">
            <div className="flex flex-col">
              <span>NOME</span>
              <span className="text-[#a3a3a3]">Comentário</span>
            </div>
            <div className="flex flex-row">
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="h-4 w-4 text-[#FADB14]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Review;
