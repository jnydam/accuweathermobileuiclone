import React from 'react';

import styles from './MoonSunHeadingComp.module.css';

const MoonSunHeadingComp = (props) => {

    return (<div className={styles.moonSunHeadingCompContainer}>
        <div className={styles.iconImageContainer}>
            <img src={props.icon}></img>
        </div>
        <div className={styles.hourMinuteTextLabelContainer}>

        </div>
    </div>)
}

export default MoonSunHeadingComp;