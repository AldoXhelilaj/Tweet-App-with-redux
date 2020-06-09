import { getInitialData } from '../utils/api'
import { receiveUsers} from '../action/users'
import { receiveTweets} from '../action/Tweets'
import { setAuthedUser} from '../action/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'



const AUTHED_ID="aldoxhelilaj";


export function handleInitialData() {



    return (dispatch) => {
        dispatch(showLoading());//show loading bar 
        return getInitialData().then(({ users, tweets }) => {

                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));

                dispatch(hideLoading())
        })
      
    }
}