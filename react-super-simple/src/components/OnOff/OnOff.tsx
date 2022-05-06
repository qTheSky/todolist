import React from 'react';
import s from './OnOff.module.css';

type OnOffProps = {
    on: boolean
}

export const OnOff = (props: OnOffProps) => {
    return (
        <div>
            {props.on && <SwitchOn/>}
            {!props.on && <SwitchOff/>}
        </div>
    )
}
const SwitchOn = ()=>{
    {
        return(
            <div>
            <span className={s.isOn}>ON</span><span>OFF</span> <span className={s.isOn}>O</span>
            </div>
        )
    }
}
const SwitchOff = ()=>{
    {
        return(
            <div>
            <span>ON</span><span className={s.isOff}>OFF</span> <span className={s.isOff}>O</span>
            </div>
        )
    }
}
