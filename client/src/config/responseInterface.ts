import { Board } from "./typeInterface";

export interface SignupResponse {
    success: boolean,
    message: string
}

export interface BoardResponse {
    contest:Array<Board>,
    page: number,
    size: number,
    totalElements:number, 
    totlapages: number,
    last: boolean
}

export interface SigninResponse {
    accessToken: string,
    tokenType: string
}
