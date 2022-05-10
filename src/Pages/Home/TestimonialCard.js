import React from "react";

const TestimonialCard = ({ img }) => {
  return (
    <div class="bg-white dark:bg-gray-800 w-80 shadow-lg mx-auto rounded-xl p-4">
      <p class="text-gray-600 dark:text-white">
        It is a long established fact that by the readable content of a lot
        layout. The point of using Lorem a more-or-less normal distribu to using
        Content here, content
      </p>
      <div class="flex items-center mt-4">
        <div class="block relative">
          <img
            alt="person"
            src={img}
            class="mx-auto object-cover rounded-full border-primary border-4 p-px h-10 w-10 "
          />
        </div>
        <div class="flex flex-col ml-2 justify-between">
          <span class="font-semibold text-indigo-500 text-sm">
            Winson Herry
          </span>
          <span class="dark:text-gray-400 text-xs flex items-center">
            California
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
