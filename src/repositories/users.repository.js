const path = require('path');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), '..', 'data', 'users.json');

const usersRepository = {
    async getAll() {
        return await readJsonFile(FILE_PATH) || [];
    },
    async add(user) {
        const users = await this.getAll();
        users.push(user);
        await writeJsonFile(FILE_PATH, users);
    }
};

module.exports = usersRepository;
