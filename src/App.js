import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { onPageLoad } from './actions/user_actions';
import { connect } from 'react-redux';
import Navbar from './components/Navbar'
import LandingPage from './views/LandingPage'
import Footer from './components/Footer'
import Login from './views/Login'
import SignUp from './views/SignUp'
import Dashboard from './views/Dashboard'
import Profile from './views/Profile'
import EditProfile from './views/EditProfile'
import ErrorCode from './views/ErrorCode'
import LunchMatcher from './views/LunchMatcher'




import './App.css';

class App extends React.Component {

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.props.onPageLoad(token)
    }

  }


  render() {
    console.log(this.props)
    return (
      <div className="container">
        {/* <Navbar /> */}
        <Login />
        {!this.props.user.id || !localStorage.token? 
        <LandingPage />
        :
        <Switch>
          <Route exact path='/login' component={Login} />
					<Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/sign_up' component={SignUp}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          {/* <Route exact path='/lunch_matcher' render={()=> <LunchMatcher data={this.props.yelpData.businesses}/>}/> */}
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/edit_profile' component={EditProfile}/>
          <Route render={()=> <ErrorCode code='404 - Not Found'/> } />
        </Switch>
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPageLoad: (token) => dispatch(onPageLoad(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
