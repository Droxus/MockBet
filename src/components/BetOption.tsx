import React, { useState } from 'react';
import { Card, Typography, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type BetOptionProps = {
  title: string;
  multiplier: string;
};

const BetOption: React.FC<BetOptionProps> = ({ title, multiplier }) => {
  const [amount, setAmount] = useState("0");
  const [jackpot, setJackpot] = useState("0");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleJackpotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJackpot(e.target.value);
  };

  return (
    <Card className="flex items-center justify-between w-full max-w-lg p-2 bg-white-200 rounded-lg shadow-md my-2">
      <Typography variant="body2" className="flex-grow-0 text-sm w-56">
        {title} [{multiplier}]
      </Typography>
      <div className="flex items-center flex-grow justify-between mx-2">
        <div className="flex flex-col items-center mx-1">
          <TextField
            value={amount}
            onChange={handleAmountChange}
            variant="outlined"
            size="small"
            className="w-16 bg-white rounded-md text-xs"
            inputProps={{ className: 'text-xs' }}
          />
          <Typography variant="caption" className="text-gray-600 text-xs">
            Amount
          </Typography>
        </div>
        <ArrowForwardIcon fontSize="small" className='-mt-4' />
        <div className="flex flex-col items-center mx-1">
          <TextField
            value={jackpot}
            onChange={handleJackpotChange}
            variant="outlined"
            size="small"
            className="w-16 bg-white rounded-md text-xs"
            inputProps={{ className: 'text-xs' }}
          />
          <Typography variant="caption" className="text-gray-600 text-xs">
            Jackpot
          </Typography>
        </div>
      </div>
      <AddCircleIcon className="text-black ml-2 w-8 h-8 mx-2"/>
    </Card>
  );
};

export default BetOption;
