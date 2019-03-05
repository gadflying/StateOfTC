import React, { Component } from 'react'
import PropTypes from 'prop-types'
import truncate from 'lodash/truncate'
import { ResponsiveChordCanvas as Chord } from '@nivo/chord'
import { getToolName } from 'core/helpers/tools'
import theme from 'nivoTheme'
import ChartRatioContainer from 'core/charts/ChartRatioContainer'
import Trans from 'core/i18n/Trans'

export default class ToolsConnectionsChordChart extends Component {
    static propTypes = {
        keys: PropTypes.arrayOf(PropTypes.string).isRequired,
        matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
        getColor: PropTypes.func.isRequired
    }

    render() {
        const { keys, matrix, getColor } = this.props

        return (
            <Trans>
                {translate => (
                    <div className="chart-wrapper">
                        <ChartRatioContainer ratio={1} maxHeight={800}>
                            <Chord
                                margin={{
                                    top: 100,
                                    right: 80,
                                    bottom: 100,
                                    left: 80
                                }}
                                colors={getColor}
                                padAngle={0.02}
                                innerRadiusOffset={0.01}
                                keys={keys}
                                matrix={matrix}
                                labelRotation={-90}
                                ribbonHoverOthersOpacity={0.1}
                                label={d => truncate(getToolName(d.id, translate), { length: 12 })}
                                labelTextColor="inherit:brighter(1.6)"
                                animate={false}
                                theme={theme}
                            />
                        </ChartRatioContainer>
                    </div>
                )}
            </Trans>
        )
    }
}
