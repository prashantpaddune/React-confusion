import React from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from "react-router-dom";

    const RenderMenuItem = ({dish}) => {
        return(
            <Card>
                <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        )
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1 mt-3">
                   <RenderMenuItem dish={dish}/>
                </div>
            );
        });
            return(
                <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            )
    }

export default Menu;