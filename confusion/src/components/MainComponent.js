import React, { Component } from 'react';
import Menu from './MenuComponent';
import Details from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from "./ContactComponent";
import { DISHES } from '../shared/dishes';
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from "../shared/promotions";
import About from "./AboutComponent";

class Main extends Component {

    constructor(props){
        super(props)

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    render() {

        const Homepage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                >
                </Home>
            )
        }

        const DishWithId = ({match}) => {
            return(
                <Details
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                />
            );
        };

        const Aboutpage = () => {
            return (
                <About
                    leaders={this.state.leaders}
                />
            )
        }

        return (
            <div>
                <Header/>
                    <Switch>
                        <Route path='/home' component={Homepage}/>
                        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Route exact path='/contactus' component={Contact}/>
                        <Route exact path='/aboutus' component={Aboutpage}/>
                        <Redirect to="/home" />
                    </Switch>
                <Footer/>
            </div>
        );
    }
}


export default Main;
