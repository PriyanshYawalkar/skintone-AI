import { useState, useEffect } from "react";
//import { getRecommendedColors } from "../utils/getRecommendations";

export function useRecommendations(skinTone: string | null) {
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    if (skinTone) {
      const colors = getRecommendedColors(skinTone);
      setRecommendations(colors);
    }
  }, [skinTone]);

  return { recommendations };
}
