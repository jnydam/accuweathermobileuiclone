import React from 'react';
import CircleKeyComp from './CircleKeyComp/CircleKeyComp';

import styles from './UpperWeatherKeyComp.module.css';


// list of colors used for the highlighted things
/*
green
yellow
orange
red

lightblue
mediumblue
darkblue
black

lightchocolate
mediumchocolate
heavychocolate
darkchocolate

lightpurple
mediumpurple
heavypurple
darkpurple

*/
const UpperWeatherKeyComp = (props) => {

    return (<div className={styles.upperWeatherKeyCompContainer}>
        <div className={styles.categoryKeyContainer}>
            <span style={{marginRight: '0.25rem'}}>Rain</span>
            <CircleKeyComp
                color="green"></CircleKeyComp>
            <CircleKeyComp
                color="yellow"></CircleKeyComp>
            <CircleKeyComp
                color="orange"></CircleKeyComp>
            <CircleKeyComp
                color="red"></CircleKeyComp>
        </div>
        <div className={styles.categoryKeyContainer}>
            <span style={{marginRight: '0.25rem'}}>Snow</span>
            <CircleKeyComp
                color="lightblue"></CircleKeyComp>
            <CircleKeyComp
                color="mediumblue"></CircleKeyComp>
            <CircleKeyComp
                color="darkblue"></CircleKeyComp>
            <CircleKeyComp
                color="black"></CircleKeyComp>
        </div>
        <div className={styles.categoryKeyContainer}>
            <span style={{marginRight: '0.25rem'}}>Ice</span>
            <CircleKeyComp
                color="lightchocolate"></CircleKeyComp>
            <CircleKeyComp
                color="mediumpurple"></CircleKeyComp>
            <CircleKeyComp
                color="heavychocolate"></CircleKeyComp>
            <CircleKeyComp
                color="darkchocolate"></CircleKeyComp>
        </div>
        <div className={styles.categoryKeyContainer}>
            <span style={{marginRight: '0.25rem'}}>Mix</span>
            <CircleKeyComp
                color="lightpurple"></CircleKeyComp>
            <CircleKeyComp
                color="mediumpurple"></CircleKeyComp>
            <CircleKeyComp
                color="heavypurple"></CircleKeyComp>
            <CircleKeyComp
                color="darkpurple"></CircleKeyComp>
        </div>
    </div>
    )
};

// lightchocolate
// mediumchocolate
// heavychocolate
// darkchocolate

// lightpurple
// mediumpurple
// heavypurple
// darkpurple


export default UpperWeatherKeyComp;