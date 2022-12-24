const express = require('express');
const app = express();
var bcrypt = require('bcryptjs');
const secret = "jsdhfjdshfiuy!@!@#@$%#$%%&)*re87784368743629210=01=-4098398754647462\1\q1q2q2\qa";
const Auth = require("./services/user/auth");
const jwt = require('jsonwebtoken');
const moment = require('moment');
const User = require('./services/user/user');
const countUser = require('./services/user/countUser');
const orderService = require('./services/orderService/orderService');
const countOs = require('./services/orderService/countOs');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/OSM');

app.use(express.json());
app.use(cors())

app.get('/', async (req, res)=>{
    
    
    try {
        let listOrder = await orderService.find();
        res.json(listOrder)
    } catch (error) {
        res.json(error);
    }
})

//Login//////////////////////////////////////////////////////////
app.post('/',(req, res)=>{
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({"email": email}).then((user)=>{
        
        if(user != undefined){
            let correctPassword = bcrypt.compare(password, user.password);

            if(correctPassword){
                var token = jwt.sign({ data: {email: email} }, secret, {expiresIn: '1h'});
                res.json({email: email, msg: "Logado: ", token: token})
            }else{
                res.json("Senha incorreta!");
            }
        }else{
            res.statusCode = 403;
            res.json("Usuário inexistente!");
        }
    })
    
})

///////////////  User Register /////////////////////////////////////////////////////////
app.post('/user-register', (req, res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email: email}).then((response)=>{
        if(email === undefined){
            countUser.findOneAndUpdate(
                {id: 'autoval'},
                {"$inc":{"seq":1}},
                {new:true},(err, data)=>{

                    let seqId
                    if(data == null){
                        const counterUser = new countUser({id:'autoval', seq:1});
                        counterUser.save();
                        seqId = 1;
                    }else{
                        seqId = data.seq;
                    }

                    let  salt  = bcrypt.genSaltSync(10); 
                    let  hash  = bcrypt.hashSync(secret, salt);
        
                    let user = new User({
                        id: seqId,
                        name,
                        email,
                        password: hash
                    });
        
                    user.save().then(()=>{
                        statusCode = 200;
                        res.json({msg: "Usuário salvo com sucesso!"})
                    }).catch(err =>{
                        res.statusCode = 500;
                        res.json({err: err});
                    });
                })
        }else{
            res.json("Este usuário já existe!");
        }
    })
})

/////////////// Current User //////////////////////////////////////////////////////
app.get('/current-user', Auth, async (req, res)=>{
    const userData = await User.findOne({'email': req.userData})
    res.json(userData);
})
/////////////// Service Order Generate ////////////////////////////////////////////

app.post('/order-generate',(req, res)=>{

    let description = req.body.description

    countOs.findOneAndUpdate(
        {id: 'autoval'},
        {"$inc":{"seq":1}},
        {new:true},(err, data)=>{

            let seqId
            if(data == null){
                const counterOs = new countOs({id:'autoval', seq:1});
                counterOs.save();
                seqId = 1;
            }else{
                seqId = data.seq;
            }
            
            let dtOrder = moment().format('DDMMYYYYHHmmss');

            let ordersService = new orderService({
                id: dtOrder+`-${seqId}`,
                description
            });

            ordersService.save().then(()=>{
                statusCode = 200;
                res.json({msg: "Ordem de serviço gerada!"})
            }).catch(err =>{
                res.statusCode = 500;
                res.json({err: err});
            });
        })
})

////////////////Router Port ////////////////////////////////////////////////////////
app.listen(3000, ()=>{
    console.log('Servidor rodando!');
})