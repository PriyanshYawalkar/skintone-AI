import { detectSkinTone } from '../lib/skinToneDetection';
import { matchColorToSkinTone } from '../lib/colorMatching';

export const getRecommendations = (image?: File, skinToneText?: string) => {
  const skinTone = detectSkinTone(image, skinToneText);
  const colors = matchColorToSkinTone(skinTone);
  
  return colors.map(color => ({
    color,
    strapImage: `/images/${color}-strap.jpg` // Placeholder image path
  }));
};
