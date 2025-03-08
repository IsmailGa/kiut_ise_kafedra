"use client";
import React from "react";
import img from "@/public/assets/courses/structure_of_program_.png";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useRouter } from "next/navigation";

const StructurePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center pt-[20px]">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-primary text-white rounded"
      >
        Назад
      </button>
      <TransformWrapper>
        <div className="border border-gray-300 p-2">
          <TransformComponent>
            <Image src={img} alt="Zoomable Image" />
          </TransformComponent>
        </div>
      </TransformWrapper>
    </div>
  );
};

export default StructurePage;
