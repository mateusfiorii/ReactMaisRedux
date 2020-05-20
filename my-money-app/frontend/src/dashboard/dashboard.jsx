import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary();
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader
                    title="Dashboard"
                    subtitle="Versão 1.0"
                />
                <Row>
                    <Content>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='bank' value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Content>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    summary: state.dashboard.summary
})

const mapDispatchToProps = (dispacth) => (
    bindActionCreators({ getSummary }, dispacth)
)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);