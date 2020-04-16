import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {handleInitialData} from './action/shared'
import Dashboard from './components/Dashboard'
import NewTweet from './components/NewTweet'
import TweetPage from './components/TweetPage'
import Navigation from './components/Navigation'

import LoadingBar from 'react-redux-loading'
import { Nav } from 'react-bootstrap';



export class App extends Component {
componentDidMount(){
 this.props.dispatch(handleInitialData());


}




  render() {
    console.log(this.props)
    return (
     <Router>

     <div className="container">

       <Navigation/>
     </div>
      <Fragment> 

        
      <LoadingBar/>
      {this.props.loading===true ?
      null : <div>
      <Route path="/" exact component={Dashboard} />
      <Route path="/tweet/:id" component={TweetPage}/>
      <Route path="/new" component={NewTweet}/>
   
         </div>  }  
            
      </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}){

  return{
    loading:authedUser=== null

  }
}

export default  connect(mapStateToProps)(App);


