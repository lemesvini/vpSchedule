import Profile from "./Profile";
import Services from "./Services";
import Reviews from "./Reviews";

function MainContent() {
  return (
    <>
      <div className="h-full w-full flex flex-col pt-1 laptop:flex-row gap-3">
        <div className="laptop:hidden"><Profile /></div>
        <Services />
        <div className="flex flex-col gap-3 laptop:w-[50%]">
          <div className="hidden laptop:flex"><Profile /></div>
          <Reviews />
        </div>
      </div>
    </>
  );
}

export default MainContent;
