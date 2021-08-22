import React, { Fragment } from 'react'

export default function InputField({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) {
    return (
        <Fragment>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange} 
            /><br/>
            <div className="error">{errorMessage}</div>
        </Fragment>
    )
}