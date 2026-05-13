"use client"; // Dòng chữ ma thuật giúp component này có thể chuyển động
import React, { useState, useEffect } from 'react';

export default function HeroSlider({ slides }: { slides: any[] }) {
  const [current, setCurrent] = useState(0);

  // Tự động chuyển slide sau mỗi 5 giây
  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) return <div className="text-center py-10">Đang cập nhật Banner...</div>;

  return (
    <div className="relative w-full pb-12">
      {/* Khung chứa các slide */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-12 items-center px-2">
              <div>
                <h1 className="text-5xl font-extrabold mt-4 leading-tight">
                  {slide.heroTitle}
                </h1>
                <p className="mt-6 text-lg text-slate-600">
                  {slide.heroSubtitle}
                </p>
                <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                  Khám phá ngay
                </button>
              </div>
              <div className="rounded-3xl h-[400px] overflow-hidden shadow-2xl bg-white flex items-center justify-center border border-slate-100 p-4">
                <img src={slide.imageUrl} className="w-full h-full object-contain" alt={slide.heroTitle} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dấu chấm điều hướng */}
      {slides.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all ${
                current === index ? 'bg-blue-600 w-10' : 'bg-slate-300 w-3 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}