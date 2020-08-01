import React from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';
import * as snba from '../simulateNBA';

window.d3_hexbin = {hexbin : hexbin}; // workaround library problem

export class ShotChart extends React.Component {
    static propTypes = {
        playerId: PropTypes.number.isRequired,
        minCount: PropTypes.number,
        chartType: PropTypes.string,
        displayTooltip: PropTypes.bool,
    }

    componentDidMount(){
        console.log("mounting, mincount is" + this.props.minCount)
        const final_shots = snba.getShots();
        this.props.onFirstMount(final_shots);
        const courtSelection = d3.select("#shot-chart");
        courtSelection.html('');
        const chart_court = court().width(500);
        const chart_shots = shots()
            .shotRenderThreshold(this.props.minCount)
            .displayToolTips(this.props.displayTooltip)
            .displayType(this.props.chartType);
        courtSelection.call(chart_court);
        courtSelection.datum(final_shots).call(chart_shots);
    }

    componentDidUpdate() {
        /*The NBA.com does not allow browser to read the nba.stats any more
        * so this part of code is disactivated
        * simulateNBA offers data to simulate the data form NBA.com */
        /*
        nba.stats.shots({
            PlayerID: this.props.playerId
        }).then((response) => {
            const final_shots = response.shot_Chart_Detail.map(shot => ({
                x: (shot.locX + 250) / 10,
                y: (shot.locY + 50) / 10,
                action_type: shot.actionType,
                shot_distance: shot.shotDistance,
                shot_made_flag: shot.shotMadeFlag,
            }));

            const courtSelection = d3.select("#shot-chart");
            const chart_court = court().width(500);
            const chart_shots = shots().shotRenderThreshold(2).displayToolTips(true).displayType("hexbin");
            courtSelection.call(chart_court);
            courtSelection.datum(final_shots).call(chart_shots);
        });*/
        console.log("updating, mincount is" + this.props.minCount)
        const courtSelection = d3.select("#shot-chart");
        courtSelection.html('');
        const chart_court = court().width(500);
        const chart_shots = shots()
            .shotRenderThreshold(this.props.minCount)
            .displayToolTips(this.props.displayTooltip)
            .displayType(this.props.chartType);
        courtSelection.call(chart_court);
        courtSelection.datum(this.props.data).call(chart_shots);
    }
    render() {
        console.log("in shotChart, mincount is" + this.props.minCount);
        return (
            <div id="shot-chart"></div>
        );
    }
}
