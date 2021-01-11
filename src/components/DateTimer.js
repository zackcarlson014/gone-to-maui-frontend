import React, { Component } from 'react'
import { Grid, Button } from  'semantic-ui-react'

export class DateTimer extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width='1'></Grid.Column>
                    <Grid.Column style={{color:'white'}}>
                        <Grid></Grid>{this.props.date}
                    </Grid.Column>
                    <Grid.Column width='2'><Button fluid onClick={this.props.toggleTimer}>{this.props.start ? 'Stop' : 'Start'}</Button></Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default DateTimer
