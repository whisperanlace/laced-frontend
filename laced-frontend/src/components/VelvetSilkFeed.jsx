import React from 'react';

const VelvetSilkFeed = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow"
        >
          <img
            src={img.url}
            alt={`Generated ${idx}`}
            className="w-full h-auto object-cover"
          />
          <div className="p-2 text-sm text-gray-600">
            {img.prompt}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VelvetSilkFeed;
