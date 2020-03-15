import {
  springEndPoint
} from "../config";
import auth from '../modules/auth';
const { host } = springEndPoint;

export default class PostAPI {
  static Post(Request,Headers) {
    if(isInternet){
      return fetch(`${host}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Request)
      })
      .then(response => auth.verifyResponse(response))
      .then(json => {return json;})
      .catch(err => err);
    }
    else{
      alert('check your network issues')
    }
   
  }
}

