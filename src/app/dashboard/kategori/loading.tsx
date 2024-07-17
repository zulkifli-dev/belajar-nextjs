import React from "react";

function loading() {
  return (
    <div className="space-y-2">
      <div className="bg-slate-300 animate-pulse w-[200px] h-8"></div>
      <div className="bg-slate-300 animate-pulse w-[200px] h-8"></div>
    </div>
  );
}

export default loading;
