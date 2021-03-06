const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async create (req, res) {
        const {name, email, whatsapp, city} = req.body;
        
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city
        })
    
        return res.json({ id });
    },
    async index (req, res) {
        const ongs = await connection.table('ongs').select('*')
    
        return res.json(ongs);
    }
};