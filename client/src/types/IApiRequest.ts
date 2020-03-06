export interface BoardRequest {
    title: string,
    contesnts: string
};
export interface SigninRequest {
    usernameOrEmail: string,
    password: string
};
export interface SignupRequest {
    name: string,
    username: string,
    email: string,
    password: string
};