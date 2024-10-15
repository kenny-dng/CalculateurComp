'use client'; 

import React from 'react';

interface Props {
    inputs: any;
    performance: any;
}

const CompensationResults: React.FC<Props> = ({ inputs, performance }) => {
    const calculateResults = () => {
        // Extract input values
        const {
            fixedSalary,
            variablePerMeeting,
            boosterAmount,
            accelerator,
            decelerator,
            averageSalePrice,
            monthlyTargetMeetings,
            closingRate,
        } = inputs;

        const { meetingsHeld } = performance;
        const salesMade = (meetingsHeld * closingRate) / 100;
        let variableComp = meetingsHeld * variablePerMeeting;

        // Apply decelerator if below target
        if (meetingsHeld < monthlyTargetMeetings) 
            variableComp -= (variableComp * decelerator) / 100;

        // Apply accelerator if above 1.5 times target
        if (meetingsHeld > 1.5 * monthlyTargetMeetings) 
            variableComp += (variableComp * accelerator) / 100;

        const boosters = Math.floor(salesMade / 10) * boosterAmount;
        const totalComp = fixedSalary + variableComp + boosters;
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