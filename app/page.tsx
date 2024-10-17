'use client';

import { useState } from 'react';
import CompensationForm from './components/CompensationForm';
import PerformanceSliders from './components/PerformanceSliders';
import ResultView from './components/ResultView';

import { InputProps, PerformanceProps } from './types';

export default function Home() {
  const [inputs, setInputs] = useState<InputProps>({
    fixedSalary: 1000,
    variablePerMeeting: 20,
    boosterAmount: 50,
    accelerator: 25,
    decelerator: 25,
    averageSalePrice: 2500,
    monthlyTargetMeetings: 20,
    closingRate: 25,
  });

  const [performance, setPerformance] = useState<PerformanceProps>({
    meetingsHeld: 20,
    soldPerBoost: 10,
  });

  return (
    <div className="flex flex-col items-center justify-center px-4 py-4 space-y-4 ">
      <h1 className="text-4xl font-bold text-center">Calculateur de compensation commerciale</h1>

      <div className="flex flex-col justify-center border-2 border-white rounded-lg p-4 space-y-2">
          <CompensationForm inputs={inputs} setInputs={setInputs} />
          <PerformanceSliders performance={performance} setPerformance={setPerformance} />
      </div>

      <ResultView inputs={inputs} performance={performance} />        
    </div>
  );
}