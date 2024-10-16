'use client';

import React from 'react';
import InputField from './InputField';
import { InputProps } from '../types';

interface Props {
    inputs: InputProps;
    setInputs: React.Dispatch<React.SetStateAction<InputProps>>;
}

const CompensationForm: React.FC<Props> = ({ inputs, setInputs }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((prevInputs: any) => ({
            ...prevInputs,
            [name]: Number(value),
        }));
    };

    return (
        <div className='flex flex-col space-y-2'>
            <h2 className="text-2xl font-bold">Paramètres de rémunération :</h2>
            <form className="grid grid-cols-3 gap-4">
                <InputField label="Salaire fixe (€)" name="fixedSalary" value={inputs.fixedSalary} onChange={handleChange} />
                <InputField label="Variable par RDV (€)" name="variablePerMeeting" value={inputs.variablePerMeeting} onChange={handleChange} />
                <InputField label="Booster (€)" name="boosterAmount" value={inputs.boosterAmount} onChange={handleChange} />
                <InputField label="Accélérateur (%)" name="accelerator" value={inputs.accelerator} onChange={handleChange} />
                <InputField label="Décélérateur (%)" name="decelerator" value={inputs.decelerator} onChange={handleChange} />
            </form>

            <h2 className="text-2xl font-bold">Objectifs et ratios :</h2>
            <form className="grid grid-cols-3 gap-4">
                <InputField label="Objectif RDV/mois" name="monthlyTargetMeetings" value={inputs.monthlyTargetMeetings} onChange={handleChange} />
                <InputField label="Taux de closing (%)" name="closingRate" value={inputs.closingRate} onChange={handleChange} />
                <InputField label="Prix moyen/vente (€)" name="averageSalePrice" value={inputs.averageSalePrice} onChange={handleChange} />
            </form>

        </div>
    );
};

export default CompensationForm;