import CheckConnectivity from './CheckConnectivity'

export const LoginAPI = (url, params, GetResponse,errors,NetError) => {
    const isConnectivityAvailable = CheckConnectivity
    if (isConnectivityAvailable) {
        //let formdata = new FormData();
       
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                GetResponse(responseJson)
            })
            .catch((error) => {
                errors(error);
            });
    } else {
        NetError('Unable to conect the server')
    }
}

