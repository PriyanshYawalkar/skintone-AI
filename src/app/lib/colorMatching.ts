// Simple rule-based color matching logic
export const matchColorToSkinTone = (skinTone: string) => {
    const colorMap: Record<string, string[]> = {
      light: ['gold', 'rose gold'],
      medium: ['silver', 'blue'],
      dark: ['black', 'dark brown'],
    };
  
    return colorMap[skinTone] || ['gray'];
  };
  