const fs = require("fs-extra")
// const caduser = require("../api/caduser.json")

const CaduserService = {
    getUserList: async () => {
        const user = await fs.readJson('api/caduser.json');
        const userObject = JSON.parse(JSON.stringify(user))
        return userObject;
    }
}

module.exports = CaduserService;