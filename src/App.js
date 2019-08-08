import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { onPageLoad } from './actions/user_actions';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import LandingPage from './views/LandingPage';
import Footer from './components/Footer';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import EditProfile from './views/EditProfile';
import ErrorCode from './views/ErrorCode';
import LunchMatcher from './views/LunchMatcher';
import TaskForm from './views/TaskForm';
import { getAllYelp } from './actions/lunch_actions';




import './App.css';

class App extends React.Component {

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.props.onPageLoad(token)
    }
    this.props.getYelp()
  }

  render() {
    return (
      <div className="main-container">
        <div className="grid-container">
        <Navbar />
      {!this.props.user.id || !localStorage.token || !this.props.yelpData ? 

        <div>
           <LandingPage />
           <Route exact path='/login' component={Login}/>
        </div>

        :

        <Switch>
          <Route exact path='/login' component={Login} />
					<Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/sign_up' component={SignUp}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/new_task' component={TaskForm}/>
          <Route exact path='/lunch_matcher' render={()=> <LunchMatcher data={this.props.yelpData}/>}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/edit_profile' component={EditProfile}/>
          <Route render={()=> <ErrorCode code='404 - Not Found'/> } />
        </Switch>
        }
        <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user,
    yelpData: state.lunch.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPageLoad: (token) => dispatch(onPageLoad(token)),
    getYelp: () => dispatch(getAllYelp()),

  }
}
export default withRouter (connect(mapStateToProps, mapDispatchToProps)(App))
