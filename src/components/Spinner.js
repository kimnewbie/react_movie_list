import React from 'react'

export default function Spinner() {
    return (
        <div className="d-flex justify-content-center">
            <div
                className="spinner-border"
                style={{
                    width: '3rem',
                    height: '3rem',
                    color: '#9fa3e4'
                }}
                role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
