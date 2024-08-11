import React from "react";
import Review from "./reviews/Review";

function Reviews() {
  return (
    <>
      <div className="bg-[#303030] text-white rounded p-2 drop-shadow laptop:h-[calc(100vh-325px)]">
        <span className="font-bold">Avaliações</span>
        <div className="mt-2">
          <Review />
        </div>  
      </div>
    </>
  );
}
export default Reviews;