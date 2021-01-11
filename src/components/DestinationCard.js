import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

export class DestinationCard extends Component {
    render() {
        return (
            <Card color='green'>
                <Image src='https://cheesecake.articleassets.meaww.com/462091/uploads/1321ed20-cfa7-11ea-aefa-c5759315efb7_800_420.jpeg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default DestinationCard
