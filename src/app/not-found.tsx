"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-deep-green">
      <h1 className="text-[87px] font-druk text-primary">404</h1>
      <p className="text-[#7C8685] mb-4">Page not found</p>
      <button 
        onClick={() => router.push("/")}
        className="px-4 py-2 bg-primary text-deep-green rounded"
      >
        Go Home
      </button>
    </div>
  );
} 