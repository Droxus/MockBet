import React from 'react';
import BetOption from './BetOption';

const BetOptionsList: React.FC = () => {
  const betOptions = [
    { title: '1st team win', multiplier: 'x2', amount: '154,238', jackpot: '672,341' },
    { title: '2nd team win', multiplier: 'x2', amount: '154,238', jackpot: '672,341' },
    { title: 'Draw', multiplier: 'x2', amount: '154,238', jackpot: '672,341' },
  ];

  return (
    <div className="flex flex-col items-center px-2">
      {betOptions.map((option, index) => (
        <BetOption 
          key={index} 
          title={option.title} 
          multiplier={option.multiplier}
        />
      ))}
    </div>
  );
};

export default BetOptionsList;
