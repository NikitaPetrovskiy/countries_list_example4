import React from 'react'

export const ItemList = (props) => {
    return (
        <li className={props.clss}>
            {props.children}
            {props.text}
        </li>
    )
}