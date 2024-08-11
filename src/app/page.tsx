import NavBar from "@/components/NavBar";
import MainContent from "@/components/MainContent/MainContent"

export default function Home() {
  return (
    <>
    <NavBar />
    <div className="p-2">
      <MainContent />
    </div>
    </>
  );
}
