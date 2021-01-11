import React, { Component } from 'react'
import { Container, Row, Carousel, CardGroup, Card, Image, Button } from 'react-bootstrap';

export class BootstrapTest extends Component {
    render() {
        return (
            <Container>
                <Container>
                    <Row className="justify-content-md-center">
                    <Carousel>
                        <Carousel.Item interval={10000}>
                            <Image
                                src="https://cheesecake.articleassets.meaww.com/462091/uploads/1321ed20-cfa7-11ea-aefa-c5759315efb7_800_420.jpeg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                            <Image
                            src="https://cheesecake.articleassets.meaww.com/462091/uploads/1321ed20-cfa7-11ea-aefa-c5759315efb7_800_420.jpeg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Row>
                </Container><br/><br/>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://cheesecake.articleassets.meaww.com/462091/uploads/1321ed20-cfa7-11ea-aefa-c5759315efb7_800_420.jpeg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cheesecake.articleassets.meaww.com/462091/uploads/1321ed20-cfa7-11ea-aefa-c5759315efb7_800_420.jpeg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <Button>Hello</Button>
            </Container>
        )
    }
}

export default BootstrapTest
