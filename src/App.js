import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";
import Route from "./component/Route";
import Header from "./component/Header";


const items = [
    {
        title: 'adarsh',
        content: 'IIT KGP'
    }, 
    {
        title: 'sagar',
        content: 'Bangalore'
    },
    {
        title: 'raj',
        content: 'VIT bhopal'
    }
]

const options = [
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
    {
        label: 'The color red',
        value: 'red'
    }
]

export default () =>{
    const [selected, setSelected]  = useState(options[0])

    return (<div>
        <Header/>
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/list">
            <Search/>
        </Route>
        <Route path="/translate">
            <Translate/>
        </Route>
        <Route path="/dropdown">
            <Dropdown label="select a language" options={options} selected={selected} onSelectedChange={setSelected}/>
        </Route>
    </div>)
}   