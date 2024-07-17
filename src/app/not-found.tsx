"use client";
import { useRouter } from "next/navigation";

function notFound() {
  const router = useRouter();
  return (
    <div className=" font-bold w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-[100px] text-blue-600">404</h1>
      <p className="text-[36px]">not found</p>
      <button onClick={() => router.back()}>Kembali</button>
    </div>
  );
}

export default notFound;
