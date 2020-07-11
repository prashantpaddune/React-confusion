import React from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';

    const RenderDish = ({dish}) => {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>
        }
    }

    const RenderComments = ({dish}) => {
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
            });
            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        } else {
            return <div></div>
        }
    }

    const Details = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish}/>
                    </div>
                </div>
            </div>
        )
    }

export default Details;