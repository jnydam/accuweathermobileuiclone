import React from 'react';

import styles from './CurrentConditionsComp.module.css';
import InfoDetailHorizComp from './InfoDetailHorizComp/InfoDetailHorizComp';

const CurrentConditionsComp = (props) => {

    const currentConditionsData = [
        {
            label: 'Temperature',
            value: '79'
        },
        {
            label: 'RealFeel',
            value: '77 (Pleasant)'
        },
        {
            label: 'Wind',
            value: 'NNW 12 mph'
        },
        {
            label: 'Max Wind Gusts',
            value: '12 mph'
        },
        {
            label: 'Humidity',
            value: '43%'
        },
        {
            label: 'Indoor Humidity',
            value: '43% (Ideal Humidity)'
        }
    ];


    return (<div className={styles.currentConditionsCompContainer}>
        <div className={styles.currentConditionsHeaderContainer}>
            <span>Current Conditions</span>
        </div>
        {currentConditionsData.map((conditionData, index) => (
            <InfoDetailHorizComp
                key={index}
                label={conditionData.label}
                value={conditionData.value}
                ></InfoDetailHorizComp>
        ))}
    </div>)
}

export default CurrentConditionsComp;