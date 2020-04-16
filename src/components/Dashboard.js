import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from '../components/Tweet'



export class Dashboard extends Component {

    componentDidMount() {

   console.log(this.props)

    }
    render() {
     

        return (
            <div className="container">

                <h3>Timeline</h3>
                <ul>
                    {this.props.tweetIds.map((id) => (

                        <li key={id}>
                         <Tweet id={id}/> </li>

                    ))}




                </ul>


            </div>
        );
    }
}

function mapStateToProps({ tweets }) {

    return {
        tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }

}

export default connect(mapStateToProps)(Dashboard);
