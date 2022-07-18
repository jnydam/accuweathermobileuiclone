import React from 'react';

import styles from './InfoDetailHorizComp.module.css';

const InfoDetailHorizComp = (props) => {

    return (<div className={styles.infoDetailHorizCompContainer}>
        <div className={styles.labelValueContainer}>
            <span>{props.label}</span>
        </div>
        <div className={styles.infoValueContainer}>
            <span>{props.value}</span>
        </div>
    </div>)
}

export default InfoDetailHorizComp;