"use client"

import React, { useState } from 'react';
import SkinToneInput from './components/SkinToneInput';

const HomePage = () => {
  const [inputType, setInputType] = useState<'text' | 'image'>('text');

  return (
    <div className="max-w-md justify-center mx-auto p-4">
      <br />
      
      <div className="text-center mb-4">
        <button onClick={() => setInputType('text')} className="bg-blue-500 text-white py-2 px-4 rounded">
          Choose Skin Tone Text
        </button>
        <button onClick={() => setInputType('image')} className="bg-blue-500 text-white py-2 px-4 rounded ml-2">
          Upload Skin Tone Image
        </button>
      </div>
      <SkinToneInput type={inputType} />
      <button onClick={() => { console.log("Working"); setInputType('text'); }} className="bg-blue-500 text-white py-2 px-4 rounded justify-center content-center">
          Search
        </button>
    </div>
  );
};

export default HomePage;
