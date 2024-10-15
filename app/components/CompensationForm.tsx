'use client';

import React from 'react';

interface Props {
    inputs: any;
    setInputs: any;
}

const CompensationForm: React.FC<Props> = ({ inputs, setInputs }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((prevInputs: any) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    return (
        <form className="space-y-4">
            {/* Repeat similar input blocks for each parameter */}
            <div>
                <label className="block text-gray-700">Salaire fixe (€):</label>
                <input
                    type="number"
                    name="fixedSalary"
                    value={inputs.fixedSalary}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
                />
            </div>
            {/* Add other input fields similarly */}
        </form>
    );
};

export default CompensationForm;