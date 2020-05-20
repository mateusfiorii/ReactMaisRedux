import React from 'react'

export default ({ title, subtitle }) => (
    <section className="content-header">
        <h1>{title} <small>{subtitle}</small></h1>
    </section>
)