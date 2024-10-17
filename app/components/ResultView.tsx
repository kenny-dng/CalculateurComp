'use client';

import React from 'react';
import { InputProps, PerformanceProps } from '../types';
import SummaryTab from './SummaryTab';
import AreaChartView from './AreaChartView';

interface Props {
    inputs: InputProps;
    performance: PerformanceProps;
}

const ResultView: React.FC<Props> = ({ inputs, performance }) => {
    const successRate = performance.meetingsHeld / inputs.monthlyTargetMeetings;

    // Remuneration variable
    const variablePay = inputs.variablePerMeeting * performance.meetingsHeld;
    const acceleratorPay = successRate >= 1.5 ? (variablePay * (inputs.accelerator / 100)) : 0;
    const deceleratorPay = successRate < 1 ? (variablePay * (inputs.decelerator / 100)) : 0;

    // Boosters
    const sells = performance.meetingsHeld * inputs.closingRate / 100;
    const boost = Math.floor(sells / performance.soldPerBoost);
    const boosterAmount = boost * inputs.boosterAmount;

    // Revenu et marge
    const totalRevenueGenerated = sells * inputs.averageSalePrice;
    const totalPay = inputs.fixedSalary + variablePay + acceleratorPay - deceleratorPay + boosterAmount;

    const result = {
        fixedSalary: inputs.fixedSalary,
        variablePay: variablePay,
        acceleratorPay: acceleratorPay,
        deceleratorPay: deceleratorPay,
        boosterAmount: boosterAmount,
        totalPay: totalPay,
        totalRevenueGenerated: totalRevenueGenerated,
    };

    return (
        <div className="flex flex-row">
            <SummaryTab result={result} />
            <AreaChartView result={result} />
        </div>
    );
}

export default ResultView;