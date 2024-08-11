"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { Button } from "react-bootstrap";

type ScheduleParams = {
  title: string;
  desc: string;
  price: string;
  duration: string;
};

function ScheduleContent() {
  const searchParams = useSearchParams();
  const [params, setParams] = useState<ScheduleParams>({
    title: "",
    desc: "",
    price: "",
    duration: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchParams) {
      setParams({
        title: searchParams.get("title") || "",
        desc: searchParams.get("desc") || "",
        price: searchParams.get("price") || "",
        duration: searchParams.get("duration") || "",
      });
      setLoading(false);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex w-full  h-[calc(100vh-80px)] p-3 justify-center">
        <div className="flex w-full h-full laptop:w-80 bg-[#303030] rounded-xl justify-center">
          <span className="text-white font-bold self-center">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full  h-[calc(100vh-80px)] p-3 justify-center">
      <div className="flex flex-col w-full h-full laptop:w-80 bg-[#303030] rounded-xl p-4">
        <span className="w-full text-center font-bold p-3 text-white text-2xl">
          {params.title}
        </span>
        <hr className="text-white w-[90%] self-center" />
        <span className="text-white p-3 self-center mb-8">{params.desc}</span>
        <div className="flex w-full flex-row justify-evenly items-center p-3 border rounded-xl">
          <span className="text-white">{params.duration}</span>
          <span className="bg-[#0B3880] text-white font-bold drop-shadow p-3 rounded-lg">
            {params.price}
          </span>
        </div>
        <div className="w-full flex flex-col h-full justify-evenly text-white">
          <span className="w-full border-b">data</span>
          <span className="w-full border-b">horário</span>
        </div>
        <Button className="p-3">SALVAR AGENDAMENTO</Button>
      </div>
    </div>
  );
}

function Schedule() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <ScheduleContent />
      </Suspense>
    </>
  );
}

export default Schedule;
