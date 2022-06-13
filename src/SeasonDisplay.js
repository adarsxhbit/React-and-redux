import React from "react";

const seasonConfig = {
    summer :{
        text: 'Lets go to beach',
        iconName: 'sun'
    },
    winter :{
        text: 'Burr, its chilly',
        iconName: 'snowflake'
    }
}

const getseason = (lat, month) => {
    if (month >2 && month <9){
        return lat>0 ? 'summer' : 'winter'
    }else{
        return lat<0 ? 'summer' : 'winter'
    }
}

const SeasonDisplay = (props) => {
    const season = getseason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]
    return (
        <div>
            <i className={`massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className= {`massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay