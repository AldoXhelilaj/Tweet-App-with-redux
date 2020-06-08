import React, { Component } from 'react';
import {Router,Route,NavLink} from 'react-router-dom'


export class Navigation extends Component {
    render() {
        return (
            <div  style={{padding: '55px 0' }}className="text-center d-flex justify-content-around">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/new">NewTweet</NavLink>
            </div>
        );
    }
}

export default Navigation;
