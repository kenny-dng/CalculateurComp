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
    const generateResult = () => {
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

        return {
            fixedSalary: inputs.fixedSalary,
            variablePay: variablePay,
            acceleratorPay: acceleratorPay,
            deceleratorPay: deceleratorPay,
            boosterAmount: boosterAmount,
            totalPay: totalPay,
            totalRevenueGenerated: totalRevenueGenerated,
        };
    };

    const generateData = () => {
        const data = [];
        for (let meetingsHeld = 0; meetingsHeld <= 100; meetingsHeld +=5) {
            const successRate = meetingsHeld / inputs.monthlyTargetMeetings;

            // Remuneration variable
            const variablePay = inputs.variablePerMeeting * meetingsHeld;
            const acceleratorPay = successRate >= 1.5 ? (variablePay * (inputs.accelerator / 100)) : 0;
            const deceleratorPay = successRate < 1 ? (variablePay * (inputs.decelerator / 100)) : 0;

            // Boosters
            const sells = meetingsHeld * inputs.closingRate / 100;
            const boost = Math.floor(sells / performance.soldPerBoost);
            const boosterAmount = boost * inputs.boosterAmount;

            // Revenu et marge
            const totalRevenueGenerated = sells * inputs.averageSalePrice;
            const totalPay = inputs.fixedSalary + variablePay + acceleratorPay - deceleratorPay + boosterAmount;

            data.push({
                rdv: meetingsHeld,
                cost: totalPay,
                revenue: totalRevenueGenerated
            });
        }
        return data;
    };

    return (
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 p-2">
                <SummaryTab result={generateResult()} />
            </div>
            <div className="w-full md:w-3/4 p-2">
                <AreaChartView data={generateData()} />
            </div>
        </div>
    );
}

export default ResultView;