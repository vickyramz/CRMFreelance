import {springEndPoint} from '../config';
import auth from '../modules/auth';
import * as url from '../API/CongigUrl'
const {host} = springEndPoint;
export default class PostApi {
  static getPost(InputRequest, token,url) {
    console.log('host', host);
    return fetch(`${host}`+`${url}`, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(InputRequest),
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
