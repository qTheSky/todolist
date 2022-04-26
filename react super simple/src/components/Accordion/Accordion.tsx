import React from "react";


type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody collapsed={props.collapsed} />
    </div>
}

type AccordionTitleTypeProps = {
    title: string
}


function AccordionTitle(props: AccordionTitleTypeProps) {
    return (
        <h3>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    if (props.collapsed === true){
        return (
            <ul>
                <ul>1</ul>
                <ul>2</ul>
                <ul>3</ul>
            </ul>
        );
    } else{
        return <></>
    }
}

export default Accordion;