import React, { Component } from 'react'

import DestinationCard from './DestinationCard'
import { Grid, Card } from 'semantic-ui-react'

export class DestinationCardList extends Component {

    state = {
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width='1'></Grid.Column>
                    <Grid.Column width='14'>
                        <br/><Card.Group itemsPerRow={6} centered inverted>
                             {this.state.count.map((n, i) => <DestinationCard key={i}/>)}
                        </Card.Group>
                    </Grid.Column>
                </Grid><br/><br/>
            </div>
        )
    }
}

export default DestinationCardList
