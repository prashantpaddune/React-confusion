import React, { Component } from 'react';
import Menu from './MenuComponent';
import Details from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import {connect} from "react-redux";
import {postComment, fetchComments, fetchDishes, fetchLeaders, fetchPromos} from "../redux/ActionCreators";
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => { dispatch(fetchComments())},
    fetchPromos: () => { dispatch(fetchPromos())},
    fetchLeaders: () => { dispatch(fetchLeaders())}
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {

        const Homepage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errorMessage}
                    promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errorMessage}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errorMessage}
                >
                </Home>
            )
        }

        const DishWithId = ({match}) => {
            return(
                <Details
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errorMessage}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMess={this.props.comments.errorMessage}
                    postComment={this.props.postComment}
                />
            );
        };

        const Aboutpage = () => {
            return (
                <About
                    leaders={this.props.leaders.leaders}
                    isLoading={this.props.leaders.leadersLoading}
                    errMess={this.props.leaders.leadersErrMess}
                />
            )
        }

        return (
            <div>
                <Header/>
                    <Switch>
                        <Route path='/home' component={Homepage}/>
                        <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
                        <Route exact path='/aboutus' component={Aboutpage}/>
                        <Redirect to="/home" />
                    </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
