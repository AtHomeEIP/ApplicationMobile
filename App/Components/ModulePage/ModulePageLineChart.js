import {Button, Content, Form, Icon, Item, Picker, Text, View} from "native-base";
import LineChart from "../Charts/LineChart";
import React from "react";
import {Grid, Row} from "react-native-easy-grid";

export default class ModulePageLineChart extends React.Component{
    state = {
        labelAxisY:this.props.labelAxisY,
        labelAxisX:this.props.labelAxisX,
        timeFrame: "min"
    };

    onTimeFrameChange(value) {
        this.setState({
            timeFrame:value
        });
    }

    onTimeBackward(value) {
    }

    onTimeForward(value) {
    }

    render(){
        return (
            <Content>
                <Text>{this.state.labelAxisY}</Text>
                <LineChart/>
                <Text style={{textAlign: 'right'}}>{this.state.labelAxisX}</Text>
                <Row style={{justifyContent:"space-between"}}>
                    <Button light onPress={this.onTimeBackward(this)}>
                        <Icon name='arrow-dropleft' />
                    </Button>
                    
                    <Button light onPress={this.onTimeForward(this)}>
                        <Icon name='arrow-dropright' />
                    </Button>
                </Row>
                <Text>{"période choisie"}</Text>
                <Form>
                    <Picker
                        iosHeader="Sélectionner période"
                        mode="dropdown"
                        selectedValue={this.state.timeFrame}
                        onValueChange={this.onTimeFrameChange.bind(this)}
                    >
                        <Item label="Minutes" value="min" />
                        <Item label="Heures" value="hour" />
                        <Item label="Jours" value="day" />
                        <Item label="Mois" value="month" />
                    </Picker>
                </Form>
            </Content>
        );
    }
}