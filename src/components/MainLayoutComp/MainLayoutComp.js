import React from 'react';
import MainBodyComp from './MainBodyComp/MainBodyComp';
import UpperNavBar from './UpperNavBar/UpperNavBar';

import styles from './MainLayoutComp.module.css';
import LowerTabComp from './LowerTabComp/LowerTabComp';

const MainLayoutComp = (props) => {

    return (<div className={styles.mainLayoutCompContainer}>
        <UpperNavBar></UpperNavBar>
        <MainBodyComp></MainBodyComp>
        <LowerTabComp></LowerTabComp>
    </div>)
}

export default MainLayoutComp;