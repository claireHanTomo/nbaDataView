import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';
import { Radio, Switch, Row, Col } from 'antd';
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 4,
        chartType: 'hexbin',
        displayTooltip: true,
        data:[],
    }
    onCountSliderChange = (count) => {
        console.log("in Data view container, onCSchange function:" + this.state.minCount);
        this.setState({ minCount: Number(count) || 2 });
    }

    onFirstMount = (d) => {
        this.setState({data: d});
    }
    onChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value });
    }
    onTooltipChange = (displayTooltip) => {
        this.setState({ displayTooltip });
    }
    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                    displayTooltip={this.state.displayTooltip}
                    data={this.state.data}
                    onFirstMount={this.onFirstMount}
                />
                <div className="filters">
                    {this.state.chartType === 'hexbin' ?
                        <CountSlider
                            minCount={this.state.minCount}
                            onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}
                        /> : null
                    }
                    <Row className="chart-type-radio">
                        <Col span={12} offset={3}>
                            <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={6}>
                            Tooltip:{' '}
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                                onChange={this.onTooltipChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}