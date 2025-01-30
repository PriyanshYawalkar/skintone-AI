import React from 'react';

interface SkinToneInputProps {
  type: 'text' | 'image';
}

const SkinToneInput: React.FC<SkinToneInputProps> = ({ type }) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle image upload and skin tone detection logic
    const file = e.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUrl = reader.result as string;
            // Perform skin tone detection using imageDataUrl
            console.log('Image uploaded:', imageDataUrl);
            // Add your skin tone detection logic here
        };
        reader.readAsDataURL(file);
    }
  };

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle text input for skin tone
    const skinTone = e.target.value;
    console.log('Skin tone entered:', skinTone);
    // Add your skin tone handling logic here
    if (skinTone.toLowerCase() === 'light') {
        console.log('Skin tone is light');
    } else if (skinTone.toLowerCase() === 'medium') {
        console.log('Skin tone is medium');
    } else if (skinTone.toLowerCase() === 'dark') {
        console.log('Skin tone is dark');
    } else {
        console.log('Unknown skin tone');
    }
    // logic for handling text input skin tone
    if (skinTone.toLowerCase() === 'light') {
      console.log('Skin tone is light');
    } else if (skinTone.toLowerCase() === 'medium') {
      console.log('Skin tone is medium');
    } else if (skinTone.toLowerCase() === 'dark') {
      console.log('Skin tone is dark');
    } else {
      console.log('Unknown skin tone');
    }


    // Example logic for handling text input skin tone
    if (skinTone.toLowerCase() === 'light') {
      console.log('Skin tone is light');
    } else if (skinTone.toLowerCase() === 'medium') {
      console.log('Skin tone is medium');
    } else if (skinTone.toLowerCase() === 'dark') {
      console.log('Skin tone is dark');
    } else {
      console.log('Unknown skin tone');
    }
  };

  return (
    <div className="text-center">
      {type === 'image' ? (
        <input type="file" onChange={handleImageUpload} className="my-4 p-2 border rounded" />
      ) : (
        <input
          type="text"
          placeholder="Enter your skin tone (e.g., light, medium, dark)"
          onChange={handleTextInput}
          className="my-4 p-2 border rounded"
        />
      )}
    </div>
  );
};

export default SkinToneInput;
