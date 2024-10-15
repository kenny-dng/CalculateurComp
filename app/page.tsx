'use client'; 

import Head from 'next/head';
import CompensationForm from './components/CompensationForm';
import PerformanceSliders from './components/PerformanceSliders';
import CompensationResults from './components/CompensationResults';
import { useState } from 'react';

export default function Home() {
  const [inputs, setInputs] = useState({
    fixedSalary: 1000,
    variablePerMeeting: 20,
    boosterAmount: 50,
    accelerator: 25,
    decelerator: 25,
    averageSalePrice: 2500,
    monthlyTargetMeetings: 20,
    closingRate: 25,
  });

  const [performance, setPerformance] = useState({
    meetingsHeld: 20,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <Head>
        <title>Calculateur de Compensation Commercial</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Calculateur de Compensation
        </h1>
        <div className="mt-8">
          <CompensationForm inputs={inputs} setInputs={setInputs} />
        </div>
        <div className="mt-8">
          <PerformanceSliders performance={performance} setPerformance={setPerformance} />
        </div>
        <div className="mt-8">
          <CompensationResults inputs={inputs} performance={performance} />
        </div>
      </main>
    </div>
  );
}