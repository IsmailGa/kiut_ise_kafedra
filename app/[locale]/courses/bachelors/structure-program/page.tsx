"use client";
import React from "react";
import img from "@/public/assets/courses/structure_of_program_.png";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useRouter } from "next/navigation";

const StructurePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Responsive Header */}
      <div className="p-4 sticky top-0 bg-white shadow-sm z-[9999]">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white 
                     rounded-lg shadow hover:bg-primary-dark transition-all
                     md:text-base text-sm"
        >
          ← Назад
        </button>
      </div>

      <div className="max-w-6xl mx-auto p-4 w-full h-full ">
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={3}
          wheel={{ step: 0.1 }}
          pinch={{ step: 50 }}
          doubleClick={{ disabled: true }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <div className="flex flex-col items-center gap-4">
              {/* Mobile Controls */}
              <div className="flex gap-4 mb-4 md:hidden">
                <button
                  onClick={() => zoomIn()}
                  className="p-2 bg-primary text-white rounded-full shadow"
                >
                  +
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="p-2 bg-primary text-white rounded-full shadow"
                >
                  -
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="p-2 bg-primary text-white rounded-full shadow"
                >
                  ↻
                </button>
              </div>
              <div className="overflow-hidden w-full">
                <TransformComponent
                  wrapperStyle={{
                    width: "100%",
                    height: "auto",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={img}
                    alt="Program Structure"
                    placeholder="blur"
                    className="w-full h-auto rounded-lg shadow-lg "
                    style={{ touchAction: "pan-x pan-y" }}
                  />
                </TransformComponent>
              </div>
            </div>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default StructurePage;
