import React, { Component } from 'react'
import DestinationCardList from './DestinationCardList'
import Footer from './Footer'
import DateTimer from './DateTimer'
import { Grid, Header, Icon } from  'semantic-ui-react'

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            date: this.dateTime(),
            start: true
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.incrementDate, 1000)
    }

    toggleTimer = () => {
        if (this.state.start === true) {
            clearInterval(this.interval)
            this.setState({
                start: false
            })
        } else {
            this.interval = setInterval(this.incrementDate, 1000)
            this.setState({
                start: true
            })
        }
    }


    incrementDate = () => {
        this.setState({
            date: this.dateTime()
        })
    }


    dateTime = () => {
        const date = Date()
        const dayLetters = date.slice(0,3)
        let dayNumber = 1
        if (dayLetters[0] === "S") {
            if (dayLetters[1] === 'u') {
                dayNumber = 0
            } else {
                dayNumber = 6
            }
        } else if (dayLetters[0] === 'F') {
            dayNumber = 5
        } else if (dayLetters[0] === 'T') {
            if (dayLetters[1] === 'u') {
                dayNumber = 2
            } else {
                dayNumber = 4
            }
        }
        const monthLetters = date.slice(4,7)
        let day = date.slice(8,11)
        if (day[0] === '0') {
            day = day[1]
        }
        const year = date.slice(11,15)
        let period = 'AM'
        let hours = date.slice(16, 18)
        if (hours > 12) {
            hours = hours - 12
            period = 'PM'
        } else if (hours[0] === '0') {
            hours = hours[1]
        }
        const minutes = date.slice(19, 21)
        const seconds = date.slice(22, 24)
        return dayLetters + ' ' + monthLetters + ' ' + day + ', ' + year + ' ' + hours + ':' + minutes + ':' + seconds

    }

    render() {
        return (
            <div >
                <Grid padded>
                    <Grid.Row style={{height: '10%'}}>
                        <Grid.Column>
                            <Header as='h2' icon style={{color: 'white'}} textAlign='center'>
                                <Icon name='tree' circular />
                                <Header.Content>Gone to Maui</Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{height: '20%'}}>
                        <Grid.Column width='1'></Grid.Column>
                        
                    </Grid.Row>
                </Grid>
                <DateTimer date={this.dateTime()} toggleTimer={this.toggleTimer} start={this.state.start}/>
                <DestinationCardList/>
                <Footer/>
            </div>
        )
    }
}

export default Dashboard
