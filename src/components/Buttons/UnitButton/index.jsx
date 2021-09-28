import { changeUnit } from '@/reducers/unitReducer';
import React from 'react'
import { useDispatch } from 'react-redux';
import Button from '../button';


const UnitButton = ({ unit, children }) => {
    const dispatch = useDispatch();
    const handleOnClick = (e) => {
        dispatch(changeUnit(unit));
        e.preventDefault();
    }
    return (
        <>
            <Button style={{ fontSize: '0.9rem', marginRight: '1rem' }} onClick={handleOnClick} size="rounded" fontSize="xxl">{children}</Button>
        </>
    )
}

export default UnitButton;