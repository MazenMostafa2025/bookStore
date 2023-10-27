const storeModel = require('../model/storeModel');
const queries = require('../db/queries');
var dbConnection = require('../db/connection');
const util = require('../util/utility.js');


exports.getStores = async (req, res) => {
    try {
        var getAllStores = queries.queryList.GET_STORES_QUERY;
        var result = await dbConnection.dbQuery(getAllStores);
        return res.status(200).send(JSON.stringify(result.rows));
    } catch (error) {
        console.log(`Error: ${error}`)
        return res.status(500).send({error: "Failed to list the stores"});
    }
}

exports.createStore = async (req, res) => {
    try {
        const createdBy = "admin";
        const createdOn = new Date();
        const storeName = req.body.storeName;
        const address = req.body.address;
        const code = util.generateStoreCode();
        
        if (!storeName || !address)
            return res.status(500).send({error: 'store name & address cannot be empty'});
        
        var values = [storeName, code, address, createdBy, createdOn];
        var createStore = queries.queryList.CREATE_STORE_QUERY;
        await dbConnection.dbQuery(createStore, values);
        return res.status(201).send('created succesfully');
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).send({error: "Failed to create store "});
    }
    // storeId, storeName, code, address

    // let Store = storeModel.store;
    // let newStore = new Store (storeName, address, code);
}