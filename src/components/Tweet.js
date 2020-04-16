import React, { Component } from 'react';
import {connect} from 'react-redux';
import {formatTweet,formatDate} from '../utils/helpers'
import{MdReply} from 'react-icons/md'
import {IoIosHeart} from 'react-icons/io'
import{ IoIosHeartEmpty} from 'react-icons/io'
import {handleToggleTweet} from '../action/Tweets';
import {Link,withRouter} from 'react-router-dom'







export class Tweet extends Component {

    toParent=(e,id)=>{


    e.preventDefault();
        //redirect to Parent Tweet
     this.props.history.push(`/tweet/${id}`)



    }

    handleLike=(e)=>{


        e.preventDefault();
        const {  dispatch, tweet, authedUser}=this.props;

        dispatch(handleToggleTweet({
            id:tweet.id,
            hasLiked:tweet.hasLiked,
            authedUser
        }))



    }

  
    render() {

        const {tweet} = this.props;
        console.log(tweet)
      
        if(tweet===null){
            return <p>this Tweet doesnt exist</p>
            

        }
        //destructurin a array
        const {
            name,avatar,timestamp,text,hasLiked,likes,replies,id,parent
        } =tweet
      
        return (
            <Link to={`/tweet/${id}`}>
            <div className='tweet d-flex align-items-center'>
            <img className="img-fluid  rounded img-thumbnail" src={avatar}/>

            <div className="tweet-info d-flex flex-column">
                <span>{name}</span>
                <span>{formatDate(timestamp)}</span>
                {parent&& (

                    <button className="replyin-to" onClick={(e)=>this.toParent(e,parent.id)}>
                    Replying To @{parent.author}

                    </button>
                )}
                <p>{text}</p>

                <div className="tweet-icons d-flex align-items-center">
                    <MdReply/>
                    <span>{replies !== 0 && replies}</span>
                    <button className="heart-button" onClick={this.handleLike} >
                    {hasLiked === true ? <IoIosHeart color="#E91E63"/> :   <IoIosHeartEmpty/>}
                     </button>
                        <span>{likes !==0 && likes}</span>



                    </div>

                    </div>
                
                </div>
            </Link>
        );
    }
}

function mapStateProps({authedUser,users,tweets},{id}){

    const tweet=tweets[id];
    const parentTweet= tweet ? tweets[tweet.replyingTo] :null

    return{
        authedUser,
        tweet: tweet ? formatTweet(tweet,users[tweet.author],authedUser,parentTweet) : null

    }


}

export default withRouter(connect(mapStateProps)(Tweet));
