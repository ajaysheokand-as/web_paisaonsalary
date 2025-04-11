import React from "react";

export default function Header({ title = "", des = "" }) {
  return (
    <header className="text-center py-12 bg-[#1D3E50] pt-40 text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-lg">{des}</p>
    </header>
  );
}
