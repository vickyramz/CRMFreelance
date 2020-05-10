import {springEndPoint} from '../config';
import auth from '../modules/auth';
const {host} = springEndPoint;
export default class PutApi {
  static Put(InputRequest,token,url) {
    console.log('host', `${host}`+`${url}`);
    return fetch(`${host}`+`${url}`, {
      method: 'PUT',
      headers: {
        'Authorization': token,
        'Content-type': 'application/json; charset=UTF-8' 
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
