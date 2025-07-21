import { PATH_DB } from '../constants/index.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts , null , 2))
    } catch (error) {
        console.error("error", error);

    }
};
