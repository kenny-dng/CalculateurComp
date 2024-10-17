'use client';

import React from 'react';

interface Props {
    result: {
        fixedSalary: number;
        variablePay: number;
        acceleratorPay: number;
        deceleratorPay: number;
        boosterAmount: number;
        totalPay: number;
        totalRevenueGenerated: number;
    };
}

const SummaryTab: React.FC<Props> = ({ result }) => {
    return (
        <table className="text-center">
            <thead>
                <tr>
                    <th className="border w-60 bg-gray-600 px-4 py-2">Description</th>
                    <th className="border w-40 bg-gray-600 px-4 py-2">Montant (€)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">Salaire fixe</td>
                    <td className="border px-4 py-2">{result.fixedSalary}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Rémunération variable</td>
                    <td className="border px-4 py-2">{result.variablePay}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Accélérateur</td>
                    <td className="border px-4 py-2">{result.acceleratorPay}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Décélérateur</td>
                    <td className="border px-4 py-2">{result.deceleratorPay}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Boosters</td>
                    <td className="border px-4 py-2">{result.boosterAmount}</td>
                </tr>
                <tr className="font-bold">
                    <td className="border px-4 py-2">Total rémunération</td>
                    <td className="border px-4 py-2">{result.totalPay}</td>
                </tr>
                <tr className="font-bold">
                    <td className="border px-4 py-2">Revenu généré</td>
                    <td className="border px-4 py-2">{result.totalRevenueGenerated}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default SummaryTab;