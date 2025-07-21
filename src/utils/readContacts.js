import { PATH_DB } from '../constants/index.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB , 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.error("error" , error)
        return [];
    }
};
