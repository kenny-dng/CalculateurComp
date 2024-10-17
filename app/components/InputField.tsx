'use client';

import React from 'react';

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "number", value, onChange }) => {
    return (
        <div className='min-w-min space-y-1'>
            <label className="block text-white-700">{label}:</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none text-black"
            />
        </div>
    );
};

export default InputField;