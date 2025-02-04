import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    comment: "The new iPhone 16 exceeded all my expectations. The camera quality is outstanding and the battery life is incredible!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Professional Photographer",
    comment: "As a photographer, the iPhone 16's camera system is a game-changer. The detail and color accuracy are simply amazing.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Digital Artist",
    comment: "The iPad Pro with M4 chip handles my artwork flawlessly. The display is gorgeous and the Apple Pencil integration is perfect.",
    rating: 5,
  },
  {
    name: "David Wilson",
    role: "Fitness Trainer",
    comment: "The Apple Watch Series 10 has revolutionized how I track my workouts. The health features are incredibly accurate!",
    rating: 5,
  }
];

export default function Coments(){
  return (
    <div className="w-full max-w-6xl mx-auto ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          What Our <span className="text-blue-600">Customers</span> Say
        </h2>
        <p className="text-gray-600 mt-4">
          Read about experiences from our satisfied customers
        </p>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <div className="bg-white p-6 rounded-xl shadow-lg m-4 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 flex-grow">{testimonial.comment}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

