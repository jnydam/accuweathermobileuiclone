import React from 'react';

import styles from './RiseSetHorizRowComp.module.css';

const RiseSetHorizRowComp = (props) => {

    return (<div className={props.noBorder ? styles.riseSetHorizNoBorder : styles.riseSetHorizRowCompContainer}>
        <div className={styles.riseLabelTextStyle}>
            <span>{props.riseTime ? "Rise" : "Set"}</span>
        </div>
        <div className={styles.timeValueContainerStyle}>
            <span>{props.riseTime ? props.riseTime : props.setTime}</span>
        </div>
    </div>)
}

export default RiseSetHorizRowComp;