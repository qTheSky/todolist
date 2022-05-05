import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';



function App(props: any) {
    return (
        <div>
            {/*<Accordion title={"Menu"} collapsed={true} />*/}
            {/*<Accordion title={"Users"} collapsed={false} />*/}
            {/*<Rating value={3}/>*/}
            <OnOff on={true}/>
            <OnOff on={false}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType){
    return(
    <h1>{props.title}</h1>
    )
}

export default App;
