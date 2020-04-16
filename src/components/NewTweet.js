import React, { Component } from 'react';
import {connect} from 'react-redux';
import { handleAddTweet} from '../action/Tweets';
import {Redirect} from  'react-router-dom'


export class NewTweet extends Component {

state={
    text:'',
    toHome: false
}

handlechange=(e)=>{

    let text=e.target.value;


    this.setState(()=>({

        text
    }))



}
handleSubmit=(e)=>{

    e.preventDefault();

  const {dispatch,id}= this.props
  

    const{text}=this.state


 dispatch(handleAddTweet(text,id))
 
    this.setState(()=>({

        text:'',
        toHome: id ? false : true
    }))




}


    render() {
        const{text,toHome}=this.state

        let tweetLeft=text.length
if(toHome===true){
    return<Redirect to="/"/>
}

        return (
            <div>
               <h3 className='text-center'>Compose new Tweet</h3>
               <form  className=" d-flex justify-content-around flex-column align-items-center" onSubmit={this.handleSubmit}>
                <textarea placeholder="Whats up?"
                 value={text}
                 onChange={this.handlechange}
                 maxLength={280}
                 style={{width:'90%',
                 height:'100px'}}
                 />

          {tweetLeft >= 88 &&(
              <div className='d-flex justify-content-end'>
                    {tweetLeft}

              </div>

          )}
          
            <button  className="btn btn-success text-center" type="submit" disabled={text===''}>
                Submit
            </button>


            </form>
            </div>
            
        );  
    }
}

export default connect()(NewTweet);
