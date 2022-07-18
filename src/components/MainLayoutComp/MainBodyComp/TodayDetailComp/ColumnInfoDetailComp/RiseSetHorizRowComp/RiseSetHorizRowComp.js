import React from 'react';

import styles from './RiseSetHorizRowComp.module.css';

const RiseSetHorizRowComp = (props) => {

    return (<div className={styles.riseSetHorizRowCompContainer}>
        <div className={styles.riseLabelTextStyle}>
            <span>Rise</span>
        </div>
        <div className={styles.timeValueContainerStyle}>
            <span>{props.riseTime ? props.riseTime : props.setTime}</span>
        </div>
    </div>)
}

export default RiseSetHorizRowComp;