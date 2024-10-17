'use client';

import React from 'react';
import { InputProps, PerformanceProps } from '../types';

interface Props {
    inputs: InputProps;
    performance: PerformanceProps;
}

const CompensationResults: React.FC<Props> = ({ inputs, performance }) => {
    const calculateResults = () => {
        // Convert input values to numbers
        const fixedSalary = Number(inputs.fixedSalary);
        const variablePerMeeting = Number(inputs.variablePerMeeting);
        const boosterAmount = Number(inputs.boosterAmount);
        const accelerator = Number(inputs.accelerator);
        const decelerator = Number(inputs.decelerator);
        const averageSalePrice = Number(inputs.averageSalePrice);
        const monthlyTargetMeetings = Number(inputs.monthlyTargetMeetings);
        const closingRate = Number(inputs.closingRate);
        const meetingsHeld = Number(performance.meetingsHeld);

        // Calculate sales made
        const salesMade = (meetingsHeld * closingRate) / 100;

        // Variable compensation
        let variableComp = meetingsHeld * variablePerMeeting;

        // Apply decelerator if below target
        if (meetingsHeld < monthlyTargetMeetings) {
            variableComp -= (variableComp * decelerator) / 100;
        }

        // Apply accelerator if above 1.5 times target
        if (meetingsHeld > 1.5 * monthlyTargetMeetings) {
            variableComp += (variableComp * accelerator) / 100;
        }

        // Boosters
        const boosters = Math.floor(salesMade / 10) * boosterAmount;

        // Total compensation
        const totalComp = fixedSalary + variableComp + boosters;

        // Revenue generated
        const revenueGenerated = salesMade * averageSalePrice;

        return {
            totalComp,
            revenueGenerated,
            margin: revenueGenerated - totalComp,
        };
    };

    const results = calculateResults();

    return (
        <div className="text-left">
            <h2 className="text-2xl font-bold">Résultats</h2>
            <p>Salaire fixe: {inputs.fixedSalary} €</p>
            <p>Compensation totale: {results.totalComp.toFixed(2)} €</p>
            <p>Revenu généré: {results.revenueGenerated.toFixed(2)} €</p>
            <p>Marge générée: {results.margin.toFixed(2)} €</p>
        </div>
    );
};

export default CompensationResults;