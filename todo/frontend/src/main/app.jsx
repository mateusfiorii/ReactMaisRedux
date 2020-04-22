import React from 'react'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import Routes from '../main/routes'
import Menu from '../template/menu'

export default () => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)