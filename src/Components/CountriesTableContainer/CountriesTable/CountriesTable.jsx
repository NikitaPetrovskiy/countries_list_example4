import React from 'react'
export const CountriesTable = (props) => {
    return (
        <table className={props.className}>
            {props.children}
        </table>
    )
}
