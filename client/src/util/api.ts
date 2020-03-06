// import { ACCESS_TOKEN } from './../config/apiConfig';
// import { BoardRequest } from './../types/IApiRequest';
// import { SigninRequest } from './../types/requestInterface';
// import { SigninResponse } from './../types/responseInterface';
// import axios, {AxiosRequestConfig} from 'axios';

// let url = "http://localhost:8000";

// const request = (options) => {
//     const headers = new Headers({
//         'Content-Type': 'application/json'
//     });
//     if(localStorage.getItem(ACCESS_TOKEN)) {
//         headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
//     }
//     const defaults = {headers: headers};
//     options = Object.assign({}, defaults, options);

//     return axios(options.url, options)
//     .then(response => 
//         response.json().then(json => {
//             if(!response.ok) {
//                 return Promise.reject(json);
//             }
//             return json;
//         })
//     );
// }


// export let userToken: SigninResponse = {
//     accessToken:"",
//     tokenType:""
// };
// let postOptions = (data:any) => {
//     return {
//         method: 'POST',
//         url: url,
//         headers: {
//             'Accept': 'application/json',
//             'Authorization': userToken.tokenType + " " + userToken.accessToken  
//         },
//         data: { data }
//     }
// };
// let getOptions = () => {
//     return {
//         method: 'GET',
//         url: url,
//         headers: {
//             'Accept': 'application/json',
//             'Authorization': userToken.tokenType + " " + userToken.accessToken  
//         }
//     }
// };

// export const login = (signinRequest:SigninRequest) =>
//     axios({
//         method: 'POST',
//         url: url,
//         headers: {
//             'Accept': 'application/json',
//             'Authorization': userToken.tokenType + " " + userToken.accessToken  
//         },
//         data: { signinRequest }
//     });
// export const createBoard = (boardRequest:BoardRequest) =>  axios(postOptions(boardRequest))
// export const getBoard = () =>  axios(getOptions())

export const a = () => {
    console.log("hi");
    
}