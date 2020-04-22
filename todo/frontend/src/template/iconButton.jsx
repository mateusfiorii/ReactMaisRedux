import React from 'react'
import IF from './IF'

export default ({ hide, style, onClick, icon }) => (
    <IF test={!hide}>
        <button
            className={'btn btn-' + style}
            onClick={onClick}
        >
            <i className={'fa fa-' + icon}></i>
        </button>
    </IF>

)