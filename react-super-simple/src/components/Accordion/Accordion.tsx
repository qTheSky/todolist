import React from 'react';


type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleTypeProps = {
    title: string
}


function AccordionTitle(props: AccordionTitleTypeProps) {
    return (
        <h3>--{props.title}--</h3>
    )
}


function AccordionBody() {
    {
        return (
            <ul>
                <ul>1</ul>
                <ul>2</ul>
                <ul>3</ul>
            </ul>
        )
    }
}

export default Accordion;