import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { chordScale } from '../../constants'
import LegendsItem from './LegendsItem'
import Trans from '../common/i18n/Trans'

export default class ToolsConnectionsLegends extends Component {
    static propTypes = {
        sections: PropTypes.arrayOf(PropTypes.string).isRequired,
        selectedSections: PropTypes.arrayOf(PropTypes.string).isRequired,
        onChange: PropTypes.func.isRequired
    }

    handleClick = ({ id }) => {
        this.props.onChange(id)
    }

    render() {
        const { sections, selectedSections } = this.props

        return (
            <Trans>
                {translate => (
                    <div className="Legends Legends--withFrame Legends--connections">
                        {sections.map((section, i) => {
                            const isSelected = selectedSections.includes(section)

                            return (
                                <LegendsItem
                                    id={section}
                                    key={section}
                                    label={translate(`section.${section}`)}
                                    onClick={this.handleClick}
                                    color={chordScale[i]}
                                    chipSize={16}
                                    style={{ opacity: isSelected ? 1 : 0.5 }}
                                />
                            )
                        })}
                    </div>
                )}
            </Trans>
        )
    }
}
