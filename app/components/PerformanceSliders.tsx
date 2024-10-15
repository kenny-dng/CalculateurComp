'use client'; 

import React from 'react';

interface Props {
    performance: any;
    setPerformance: any;
}

const PerformanceSliders: React.FC<Props> = ({ performance, setPerformance }) => {

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerformance((prevPerformance: any) => ({
            ...prevPerformance,
            [name]: value,
        }));
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-gray-700">RDV Réalisés:</label>
                <input
                    type="range"
                    min="0"
                    max="50"
                    name="meetingsHeld"
                    value={performance.meetingsHeld}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span>{performance.meetingsHeld}</span>
            </div>
            {/* Add other sliders similarly */}
        </div>
    );
};

export default PerformanceSliders;