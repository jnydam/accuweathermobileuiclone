import React from 'react';

const CircleKeyComp = (props) => {

    const dynamicCircleKeyContainerStyle = {
        display: 'flex',
        height: '0.55rem',
        width: '0.55rem',
        borderRadius: '0.275rem',
        backgroundColor: `${props.color}`,
        marginRight: '0.15rem'
    }

    return (<div style={dynamicCircleKeyContainerStyle}>
    </div>)
}

export default CircleKeyComp;