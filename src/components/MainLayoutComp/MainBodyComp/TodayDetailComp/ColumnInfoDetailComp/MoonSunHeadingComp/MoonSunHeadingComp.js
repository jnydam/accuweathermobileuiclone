import React from 'react';

import styles from './MoonSunHeadingComp.module.css';

const MoonSunHeadingComp = (props) => {

    return (<div className={styles.moonSunHeadingCompContainer}>
        <div className={styles.iconImageContainer}>
            <img style={{
                height: '80%'
            }} src={props.icon}></img>
        </div>
        <div className={styles.hourMinuteTextLabelContainer}>
            <span>{props.hourText} hrs</span>
            <span>{props.minuteText} mins</span>
        </div>
    </div>)
}

export default MoonSunHeadingComp;