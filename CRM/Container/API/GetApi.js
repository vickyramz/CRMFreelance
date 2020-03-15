import CheckConnectivity from './CheckConnectivity'

export const GetApi = async ( Url,params,GetResponse,errors,Networkerror) => {

   const isConnectivityAvailable = CheckConnectivity
   if (isConnectivityAvailable) {
      fetch(Url, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Authorization':params.AuthorizationToken,
            'loginId':params.userId

        },
      })
         .then((response) => response.json())
         .then((responseJson) => {
           GetResponse(responseJson)
         })
         .catch((error) => {
            errors(error);
         });
   } else {
      //no connection available
      Networkerror('No Network Available')
   }
}

export const GetAPI = async (url, GetResponse) => {
   const isConnectivityAvailable = CheckConnectivity
   if (isConnectivityAvailable) {
      fetch(url, {
         method: 'GET'
      })
         .then((response) => response.json())
         .then((responseJson) => {
            GetResponse(responseJson)
         })
         .catch((error) => {
            console.error(error);
         });
   } else {
      //no connection available
      Alert.alert('No Network Available')
   }
}

