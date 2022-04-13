import React from "react";

export default function ActionButton(props) {
    const {children, onClick } = props;
    return (
        <span
            onClick={onClick}>
            {children}
        </span>
    )
}
