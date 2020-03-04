// import axios, {AxiosRequestConfig} from 'axios';
// import { SigninResponse, BoardResponse } from './responseInterface';
// import { SigninRequest, BoardRequest } from './requestInterface';

// let url = "http://localhost:8000";
// export let userToken: SigninResponse = {
//     accessToken:"",
//     tokenType:""
// };
// let postOptions: AxiosRequestConfig = (data:any) => {
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
// let getOptions: AxiosRequestConfig = () => {
//     return {
//         method: 'GET',
//         url: url,
//         headers: {
//             'Accept': 'application/json',
//             'Authorization': userToken.tokenType + " " + userToken.accessToken  
//         }
//     }
// };

// export const login = (signinRequest:SigninRequest) => axios(postOptions(signinRequest))
// export const createBoard = (board:BoardRequest) =>  axios(postOptions(board))
// export const getBoard = (board:BoardRequest) =>  axios(postOptions(board))

export const a = () =>{
    console.log("hi");
    
}