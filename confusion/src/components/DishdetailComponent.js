import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, ListGroup, ListGroupItem} from 'reactstrap';

class Details extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map(comment => {
                return (
                    <ListGroupItem key={comment.id}>
                        {comment.comment} <br />
                        -- {comment.author}, {comment.date}
                    </ListGroupItem>
                )
            })
            return (
                <ListGroup>
                    <h4>Comments</h4>
                    {comments}
                </ListGroup>
            );
        } else
            return <div></div>
    }


    render() {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Details;