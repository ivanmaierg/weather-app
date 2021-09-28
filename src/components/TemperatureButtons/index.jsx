
import { units } from '@/types/units.types';
import React from 'react';
import UnitButton from '../Buttons/UnitButton';

const TemperatureButtons = () => {

    return (
        <div className="temperature-buttons">
            <UnitButton unit={units.C} size="rounded" fontSize="xxl">C°</UnitButton>
            <UnitButton unit={units.F} size="rounded" fontSize="xxl">F°</UnitButton>
        </div>
    )
}

export default TemperatureButtons;
