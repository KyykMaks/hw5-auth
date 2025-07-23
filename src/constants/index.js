import path from 'node:path'

export const PATH_DB = path.resolve('src' , 'db', 'db.json')

export const SORT_ORDER = {
    ASC: 'asc' ,
    DESC: 'desc',
}

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;
