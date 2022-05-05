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
            <div><span className={s.isOn}>!ON!</span><span>off</span></div>
        )
    }
}
const SwitchOff = ()=>{
    {
        return(
            <div><span>on</span><span className={s.isOff}>!OFF!</span></div>
        )
    }
}