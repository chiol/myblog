export interface  UserSummary{
    id: number,
    username: string,
    name: string
} 
export interface Board {
    id: number,
    title:string,
    contents: string,
    createdBy: UserSummary,
    creationDateTime:Date
}