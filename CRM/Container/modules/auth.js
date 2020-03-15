import * as LoginActions from '../actions/login';
class auth{
    static isLoggedIn(){
        /*
        const userToken = localStorage.getItem('_token');
        const userId = localStorage.getItem('_userId');
        if(!!userToken && !!userId)
            return true;
        else
            return false;
        */
       return true;
    }
    static logOut(){
        /*
        localStorage.clear();
        window.location = '/login';
        */
        LoginActions.logout();
        
        return true;
    }
    static verifyResponse(response){
       
        if(response.status === 200 || response.status === 202 || response.status === 204) {
           
            return response.json();
        } else if(response.status === 403 || response.status === 401) {
            //localStorage.clear();
            //window.location = '/login?ref=session_expired';
           // LoginActions.logout();
            return response.json();
        } else {
            return response.json();
        }
        
       //return response.json();
    }
}
export default auth;