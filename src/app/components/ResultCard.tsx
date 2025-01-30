import React from 'react';
import Image from 'next/image';

interface ResultCardProps {
  color: string;
  strapImage: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ color, strapImage }) => (
  <div className="p-4 border rounded shadow-md">
    <Image src={strapImage} alt="Watch strap" className="w-full h-32 object-cover mb-2" />
    <div className="text-center">
      <p className="text-lg font-semibold">Color: {color}</p>
    </div>
  </div>
);

export default ResultCard;
