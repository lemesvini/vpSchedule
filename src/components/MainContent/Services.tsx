"use client"
import React from "react";
import SereviceCard from "./services/Card";
import ServiceTabs from "./services/tabs";

function Services() {
  return (
    <>
      <div className="bg-[#303030] text-white laptop:h-[calc(100vh-100px)] overflow-y-auto no-scrollbar rounded p-2 w-full flex flex-col gap-3">
        <ServiceTabs />
      </div>
    </>
  );
}
export default Services;