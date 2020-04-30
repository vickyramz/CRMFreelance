import {springEndPoint} from '../config';
import auth from '../modules/auth';
import * as url from '../API/CongigUrl'
const {host} = springEndPoint;
export default class GetLApi {
  static get(token,url) {
    console.log('host', `${host}`+`${url}`);
    return fetch(`${host}`+`${url}`, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    })
      .then(response => auth.verifyResponse(response))
      .then(json => {
        return json;
      })
      .catch(err =>
       console.log('err',err)
      );
  }
}
