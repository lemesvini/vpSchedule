"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { Button } from "react-bootstrap";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import TimeCard from "@/components/MainContent/services/TimeCard";

type ScheduleParams = {
  title: string;
  desc: string;
  price: string;
  duration: string;
};

function ScheduleContent() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [params, setParams] = useState<ScheduleParams>({
    title: "",
    desc: "",
    price: "",
    duration: "",
  });
  const [loading, setLoading] = useState(true);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const searchParams = useSearchParams();

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
      <div className="flex w-full h-[calc(100vh-80px)] p-3 justify-center">
        <div className="flex w-full h-full laptop:w-80 bg-[#303030] rounded-xl justify-center">
          <span className="text-white font-bold self-center">
            Carregando...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col laptop:flex-row justify-between laptop:justify-center laptop:mt-0 w-full h-[calc(100dvh-80px)] p-3 justify-center gap-4">
      <div className="flex flex-col laptop:flex-col laptop:items-center justify-between w-full max-w-96 laptop:w-fit bg-[#303030] rounded-xl p-4 text-white">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </div>
        <hr className="text-white w-[90%] self-center" />
        <div className="gap-2 flex w-fit h-fit flex-wrap justify-center p-2">
          {/* Consider making TimeCard dynamic */}
          {["9:00", "10:00", "11:00", "12:00"].map((time, index) => (
            <TimeCard key={index} value={time} onSelect={setSelectedTime} isSelected={time === selectedTime} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full max-w-96 h-full min-h-[480px] laptop:w-96 bg-[#303030] rounded-xl p-4 mb-4">
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
          <div className="w-full border-b flex justify-between">
            <span>Data:</span>
            <span className="font-bold">
              {date ? format(date, "dd/MM/yyyy") : "Select a date"}
            </span>
          </div>
          <div className="w-full flex border-b justify-between">
            <span>Horário:</span>
            <span className="font-bold">{selectedTime || "Select a time"}</span>
          </div>
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
