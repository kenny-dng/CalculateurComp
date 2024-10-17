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
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: Number(value),
        }));
    };

    return (
        <div className='flex flex-col'>
            <h2 className="text-xl font-bold">Paramètres de rémunération :</h2>
            <form className="grid grid-cols-3 gap-3">
                <InputField label="Salaire fixe (€)" name="fixedSalary" value={inputs.fixedSalary} onChange={handleChange} />
                <InputField label="Variable par RDV (€)" name="variablePerMeeting" value={inputs.variablePerMeeting} onChange={handleChange} />
                <InputField label="Booster (€)" name="boosterAmount" value={inputs.boosterAmount} onChange={handleChange} />
                <InputField label="Accélérateur (+%)" name="accelerator" value={inputs.accelerator} onChange={handleChange} />
                <InputField label="Décélérateur (-%)" name="decelerator" value={inputs.decelerator} onChange={handleChange} />
            </form>

            <h2 className="text-xl font-bold mt-2">Objectifs et ratios :</h2>
            <form className="grid grid-cols-3 gap-3">
                <InputField label="Prix moyen/vente (€)" name="averageSalePrice" value={inputs.averageSalePrice} onChange={handleChange} />
                <InputField label="Objectif RDV/mois" name="monthlyTargetMeetings" value={inputs.monthlyTargetMeetings} onChange={handleChange} />
                <InputField label="Taux de closing (%)" name="closingRate" value={inputs.closingRate} onChange={handleChange} />
            </form>

        </div>
    );
};

export default CompensationForm;