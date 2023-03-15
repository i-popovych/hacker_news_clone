export interface INews {
    authorName: string
    countComment: number
    countLike: number
    linkTitle: string
    title: string
    _id: string
}

export interface INews2 {
    by: string
    descendants: number
    id: number
    score: number
    time: Date
    title: string
    type: string
    url: string
}