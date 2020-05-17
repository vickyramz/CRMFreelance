import {
   springEndPoint
 } from "../config";
import auth from '../modules/auth';
const { host } = springEndPoint;

export default class GetAPI {
   static Get(QueryObject, token,url) {
      var esc = encodeURIComponent;
      var query = Object.keys(QueryObject)
          .map(k => `${esc(k)}=${esc(QueryObject[k])}`)
          .join('&');
          console.log('Query',`${host}`+`${url}`+"?"+`${query}`)
         return fetch(`${host}`+`${url}`+"?"+`${query}`, {
            method: "GET",
            headers:{
               Authorization:token
            }
          })
          .then(response => auth.verifyResponse(response))
          .then(json => {console.log('mpd json', json); return json;})
          .catch(err => {console.log('mpd error ',err); return err;});
      }
    
   }