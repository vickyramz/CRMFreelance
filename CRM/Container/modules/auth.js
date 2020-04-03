
class auth{
    static verifyResponse(response){
        console.log('response',response)
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