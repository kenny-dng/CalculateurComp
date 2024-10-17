// AreaChartView.tsx
'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { DataPoint } from '../types';

interface Props {
    data: DataPoint[];
}

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const revenue = payload[1].value as number;
        const cost = payload[0].value as number;
        const margin = revenue - cost;
        return (
            <div className="custom-tooltip" style={{ backgroundColor: "#888", border: "1px solid #ccc", padding: "10px" }}>
                <p className="label">{`RDV: ${label}`}</p>
                <p>{`Coût: ${cost} €`}</p>
                <p>{`Chiffre d'affaires: ${revenue} €`}</p>
                <p>{`Marge: ${margin} €`}</p>
            </div>
        );
    }
    return null;
};

const AreaChartView: React.FC<Props> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data} margin={{top: 10,right: 30,left: 0,bottom: 0,}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rdv" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area
                    type="monotone"
                    dataKey="cost"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                />
                <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartView;