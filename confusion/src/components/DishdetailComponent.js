import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, ListGroupItem} from 'reactstrap';

class Details extends Component {

    renderDish = (dish) => {
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
            return <div></div>

    }

    renderComments = (dish) => {
        if (dish != null) {
            const comments = dish.comments.map(comment => {
                return (
                    <p key={comment.id}>
                        {comment.comment} <br />
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </p>
                )
            })
            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        } else
            return <div></div>
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;