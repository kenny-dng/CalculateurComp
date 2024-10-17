'use client';

import React from 'react';
import { PerformanceProps } from '../types';

interface Props {
    performance: PerformanceProps;
    setPerformance: React.Dispatch<React.SetStateAction<PerformanceProps>>;
}

const PerformanceSliders: React.FC<Props> = ({ performance, setPerformance }) => {

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerformance((prevPerformance) => ({
            ...prevPerformance,
            [name]: Number(value),
        }));
    };

    return (
        <div className=''>
            <h2 className="text-xl font-bold">Performance du commercial :</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className='flex flex-row justify-between'>
                        <label className="block text-white-700">RDV réalisés:</label>
                        <p className='flex-grow text-center'>{performance.meetingsHeld}</p>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        name="meetingsHeld"
                        value={performance.meetingsHeld}
                        onChange={handleSliderChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                <div>
                    <div className='flex flex-row justify-between'>
                        <label className="block text-white-700">Palier de vente (booster):</label>
                        <p className='flex-grow text-center'>{performance.soldPerBoost}</p>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        name="soldPerBoost"
                        value={performance.soldPerBoost}
                        onChange={handleSliderChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default PerformanceSliders;