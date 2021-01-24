const dotenv = require('dotenv');
const express = require('express');
const User = require('./models/User')
dotenv.config();
const app = express();

const asd = async () => {
    await User.findAll({
        where: {
            user_name: "ahmet",
        }
    }).then((r) => {
        r.map(x => {
            console.log(x.dataValues)
        })
    })
}
asd();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`${PORT} n da çalıyor bababaa`)
});





