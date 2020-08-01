import React from 'react';
import {
    Slider, InputNumber, Row, Col,
} from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: 2,
    }

    onChange = (value) => {
        console.log("in onChange now, input value is " + this.state.inputValue)
        const cleanValue = Number(value) ? value : this.state.inputValue;
        this.setState({
            inputValue: cleanValue,
        });
        this.props.onCountSliderChange(cleanValue);
    }


    render() {
        console.log("in countSlider render, input value is " + this.state.inputValue)
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={this.onChange}
                        value={typeof this.state.inputValue === 'number' ? this.state.inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ margin: '0 16px' }}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}