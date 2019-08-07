import React, { Component } from 'react';
import Calendar from 'react-calendar'
import { connect } from 'react-redux';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { getAllUsers } from '../actions/user_actions';
import { addLunch } from '../actions/lunch_actions';

class LunchMatcher extends Component {

    state = {
      match: '',
      restaurant: '',
      lunchName: null,
      lunchDate: null,
      redirect: null
    }

    componentDidMount(){
        this.props.getAllU()
    }

    handleMatch = (e, user) => {
        e.preventDefault()
        console.log(user)
        const match = this.props.colleagues[Math.floor(Math.random()*this.props.colleagues.length)]
        const restaurant = this.props.data[Math.floor(Math.random()*this.props.data.length)]
        this.setState({
            match: match,
            restaurant: restaurant,
            lunchName: `Lunch with ${match.first_name}`
        })
    }

    saveLunch = (e) => {
        e.preventDefault()
        console.log(this.state)
        let myId = this.props.user.id
        this.props.addNewLunch(this.state, myId)
        this.setState({ redirect: <Redirect to='/dashboard' /> })
    }
    render(){
        if (this.state.redirect)
            return this.state.redirect
        let yelpData
        if(this.props.data){
            yelpData = [...this.props.data]
        }
        else {
            yelpData = this.props.data
        }

        const placeholderImg = <img alt="placeholder" src="https://images.pexels.com/photos/1573806/pexels-photo-1573806.jpeg"/>
        const userPlaceholderImg = "http://www.liberaldictionary.com/wp-content/uploads/2019/01/dab-0428.jpg"
        const resPlaceholderImg = "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

        return(
            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <div className="card small">
                            <div className="card-image">
                                <img alt="me" src={this.props.user.photo? this.props.user.photo : userPlaceholderImg}/>
                            </div>
                            <div className="card-content align center">
                                <p>{this.props.user.first_name}</p>
                                <p>{this.props.user.bio}</p>
                            </div>
                        </div>


                    </div>
                    <div className="col s5">
                        <div className="card small">
                            <div className="card-image">
                                <img alt="me" src={this.state.match? this.state.match.photo : placeholderImg}/>
                            </div>
                            <div className="card-content align center">
                                <p>{this.state.match.first_name}</p>
                                <p>{this.state.match.bio}</p>
                            </div>
                        </div>


                    </div>
                    <div className="col s5">
                        <div className="card small">
                            <div className="card-image">
                                <img alt="me" src={this.state.restaurant? this.state.restaurant.image_url : resPlaceholderImg }/>
                            </div>
                            <div className="card-content align center">
                                <p>{this.state.restaurant? this.state.restaurant.name.toUpperCase(): "Click 'MATCH ME' to see restaurant options"}</p>
                                <p>{this.state.restaurant? this.state.restaurant.address1 : null}</p>
                                {this.state.restaurant? <Link to={this.state.restaurant? this.state.restaurant.url : null}>Check it out on Yelp!</Link> : null}
                            </div>
                        </div>


                    </div>
                    <div className="col s5">
                        <div className="card small">
                        <Calendar minDate={new Date()} onChange={ e => this.setState({ lunchDate: e }) } />
                        </div>
                    <div className="row">
                        <button className="waves-effect waves-light green lighten-1 btn" onClick={(e, user) => this.handleMatch(e, this.props.user)}> Match Me! </button>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light green lighten-1 btn" onClick={this.saveLunch}> Save Lunch </button>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    colleagues: state.user.allUsers 
})

const mapDispatchToProps = dispatch => {
    return{
        getAllU: () => dispatch(getAllUsers()),
        addNewLunch: (lunch, myId) => dispatch(addLunch(lunch, myId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LunchMatcher))
