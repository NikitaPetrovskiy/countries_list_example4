import React from 'react'
export const CountriesList = (props) => {
    return (
        <ul className={props.clss}>
            {props.children}
        </ul>
    )
}