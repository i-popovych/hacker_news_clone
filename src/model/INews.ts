// export interface INews {
//     authorName: string
//     countComment: number
//     countLike: number
//     linkTitle: string
//     title: string
//     _id: string
// }

export interface INews {
    by: string
    descendants: number
    id: string
    score: number
    time: number
    title: string
    type: string
    url: string
    index: number
}