import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Block from 'core/blocks/Block'
import GenderBreakdownWaffleChart from '../charts/GenderBreakdownWaffleChart'

export default class GenderBreakdownBlock extends Component {
    static propTypes = {
        data: PropTypes.shape({
            survey: PropTypes.string.isRequired,
            total: PropTypes.number.isRequired,
            by_gender: PropTypes.arrayOf(
                PropTypes.shape({
                    gender: PropTypes.string.isRequired,
                    count: PropTypes.number.isRequired,
                    percentage: PropTypes.number.isRequired
                })
            ).isRequired
        }),
        chartId: PropTypes.string.isRequired
    }

    render() {
        const { data, chartId } = this.props

        return (
            <Block id={chartId} showDescription={false} className="Block--gender Gender__Block">
                <GenderBreakdownWaffleChart total={data.total} data={data.by_gender} />
            </Block>
        )
    }
}
