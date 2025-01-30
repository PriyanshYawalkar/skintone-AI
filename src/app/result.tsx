import React from 'react';
import ResultCard from './components/ResultCard';

interface Recommendation {
  color: string;
  strapImage: string;
}

interface ResultsPageProps {
  recommendations: Recommendation[];
}

const ResultsPage: React.FC<ResultsPageProps> = ({ recommendations }) => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl text-center mb-4">Recommended Watch Straps</h2>
      <div className="grid grid-cols-2 gap-4">
        {recommendations.map((rec, index) => (
          <ResultCard key={index} color={rec.color} strapImage={rec.strapImage} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
