import React from "react";

function Loading() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md relative animate-pulse">
      <div className="w-full h-48 bg-gray-300" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="h-4 w-20 bg-gray-300 rounded" />
          <div className="h-3 w-12 bg-gray-300 rounded" />
          <div className="h-5 w-5 bg-gray-300 rounded-full" />
        </div>
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4" />
        <div className="h-4 bg-gray-300 rounded mb-1 w-1/2" />
        <div className="h-4 bg-gray-300 rounded mb-3 w-full" />
        <div className="h-4 bg-gray-300 rounded w-24" />
      </div>
    </div>
  );
}

export default Loading;
