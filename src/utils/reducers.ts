// export const filterWithoutId = (arr: any, id: string) => arr.filter((i: any) => i !== id)

export const savedNewsWithoutId = (arr: any, id: string) => arr.filter((i: any) => i._id !== id )
