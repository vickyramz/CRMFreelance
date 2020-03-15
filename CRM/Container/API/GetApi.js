import {
   springEndPoint
 } from "../config";
import auth from '../modules/auth';
import isInternet from '../CheckInternet'
const { host } = springEndPoint;

export default class GetAPI {
   static Get() {
      if(isInternet){
         return fetch(`${host}`, {
            method: "GET",
          })
          .then(response => auth.verifyResponse(response))
          .then(json => {console.log('mpd json', json); return json;})
          .catch(err => {console.log('mpd error ',err); return err;});
      }
      else{
         alert('check your network issue')
      }
  
   }
}