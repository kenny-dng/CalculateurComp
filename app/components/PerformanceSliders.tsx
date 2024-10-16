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
            [name]: Number(value),
        }));
    };

    return (
        <div className='space-y-2'>
            <h2 className="text-2xl font-bold">Performance du commercial :</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className='flex flex-row justify-between'>
                        <label className="block text-white-700">RDV réalisés:</label>
                        <p className='flex-grow text-center'>{performance.meetingsHeld}</p>
                    </div>
                    <input
                        type="range"
                        min="15"
                        max="30"
                        step="5"
                        name="meetingsHeld"
                        value={performance.meetingsHeld}
                        onChange={handleSliderChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                <div>
                    <div className='flex flex-row justify-between'>
                        <label className="block text-white-700">Ventes réalisées:</label>
                        <p className='flex-grow text-center'>{performance.salesMade}</p>
                    </div>
                    <input
                        type="range"
                        min="3.75"
                        max="7.5"
                        step="1.25"
                        name="salesMade"
                        value={performance.salesMade}
                        onChange={handleSliderChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default PerformanceSliders;