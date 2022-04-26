import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./Rating/Rating";



// function declaration
function App(props: any) {
    // полезное что-то
    // обязана вернуть JSX
    return (
        <div>
            {/*<PageTitle title={"This is an APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3} />*/}
            <Accordion title={"Menu"} collapsed={true} />
            <Accordion title={"Friends"} collapsed={false} />
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
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
