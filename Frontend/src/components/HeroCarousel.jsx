import React, { useState, useEffect } from "react";

/* Minimal, safe HeroCarousel so App.jsx import { HeroCarousel } works.
   Replace or expand with your previous animation/GSAP/Framer code once build is stable.
*/

export function HeroCarousel() {
  const slides = [
    {
      id: 1,
      title: "Leela Robotics Board: Learn • Build • Innovate",
      subtitle: "All-in-one microcontroller + chassis + sensors board.",
    },
    {
      id: 2,
      title: "Coding Made Simple",
      subtitle: "Block-based + Text-based Programming for everyone.",
    },
    {
      id: 3,
      title: "One Board. Infinite Learning Possibilities.",
      subtitle: "Transform your STEM education with Leela.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrentSlide((s) => (s + 1) % slides.length),
      4000
    );
    return () => clearInterval(t);
  }, [slides.length]);

  const prev = () =>
    setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
  const next = () => setCurrentSlide((s) => (s + 1) % slides.length);

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">
          {slides[currentSlide].title}
        </h2>
        <p className="text-gray-600 mb-6">{slides[currentSlide].subtitle}</p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="bg-white border rounded shadow-sm"
            aria-label="Previous slide"
          ></button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className=" bg-white border rounded shadow-sm"
            aria-label="Next slide"
          ></button>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
