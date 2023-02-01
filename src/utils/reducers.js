export const filterWithoutId = (arr, id) => arr.filter(i => i !== id)

export const savedNewsWithoutId = (arr, id) => arr.filter(i => i._id !== id )
