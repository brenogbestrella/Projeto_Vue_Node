const CaduserService = require("../service/CaduserService");

const controller = {
    indexAll: async (req, res) => {
        const list = await CaduserService.getUserList();
        return res.json(list)
    }
}

module.exports = controller