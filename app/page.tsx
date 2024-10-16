'use client';

import CompensationForm from './components/CompensationForm';
import PerformanceSliders from './components/PerformanceSliders';
import CompensationResults from './components/CompensationResults';
import { useState } from 'react';
import { InputProps, PerformanceProps } from './types';

export default function Home() {
  // Initialiser l'état avec les types définis
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
    salesMade: 20,
  });

  return (
    <div className="items-center justify-center px-4 py-4">
      <h1 className="text-4xl font-bold mb-4">Calculateur de compensation commerciale</h1>

      <div className='min-w-min flex flex-wrap'>
        <div className="flex flex-col justify-center border-2 border-white rounded-lg space-y-4 p-4">
          <CompensationForm inputs={inputs} setInputs={setInputs} />
          <PerformanceSliders performance={performance} setPerformance={setPerformance} />
        </div>

        <div className="mt-4">
          <CompensationResults inputs={inputs} performance={performance} />
        </div>
      </div>
    </div>
  );
}