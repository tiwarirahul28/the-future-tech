import React from 'react'

const EventsCard = ({name, imgsrc, entryfees, rules, rulesone, rulestwo, rulesthree, rulesfour, rulesfive}) => {
    return (
        <>
        <div className='box'>
            <img src={imgsrc} alt=''/>
            <div className='box-info'>
                <h1>{name}</h1>
                <h2>Entry Fees Rs: {entryfees}</h2>
                <h3>Rules:</h3>
                <p>
                    <li>{rules}</li>
                </p>
                <p>
                    <li>{rulesone}</li>
                </p>
                <p>
                    <li>{rulestwo}</li>
                </p>
                <p>
                    <li>{rulesthree}</li>
                </p>
                <p>
                    <li>{rulesfour}</li>
                </p>
                <p>
                    <li>{rulesfive}</li>
                </p>
            </div>
        </div>
        </>
    )
}

export default EventsCard
