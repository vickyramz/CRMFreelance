import CheckConnectivity from './CheckConnectivity'

export const GetRequestData = async (GetResponse, Url) => {

   const isConnectivityAvailable = CheckConnectivity
   if (isConnectivityAvailable) {
      fetch(Url, {
         method: 'GET'
      })
         .then((response) => response.json())
         .then((responseJson) => {
           // console.log(responseJson);
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

export const GetAPI = async (url, GetResponse) => {
   const isConnectivityAvailable = CheckConnectivity
   if (isConnectivityAvailable) {
      fetch(url, {
         method: 'GET'
      })
         .then((response) => response.json())
         .then((responseJson) => {
            //console.log(responseJson);
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

