// AreaChartView.tsx
'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

const AreaChartView: React.FC<Props> = ({ result }) => {

    return (
        <ResponsiveContainer width="80%" height={400}>
            <AreaChart data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="RDV" label={{ value: 'Nombre de RDV', position: 'insideBottomRight', offset: -10 }} />
                <YAxis label={{ value: 'Euros (€)', angle: -90, position: 'insideLeft' }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip formatter={(value, name, props) => {
                    if (name === "Marge générée") {
                        const cost = props.payload['Cost'];
                        const margin = value - cost;
                        return [`${value} €`, `${name}`, `Marge: ${margin.toFixed(2)} €`];
                    }
                    return [`${value} €`, `${name}`];
                }} />
                <Area type="monotone" dataKey="Cost" stroke="#8884d8" fillOpacity={1} fill="url(#colorCost)" name="Coût" />
                <Area type="monotone" dataKey="Revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRevenue)" name="Chiffre d'affaires" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartView;