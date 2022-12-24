const jwt = require('jsonwebtoken');
const secret = "jsdhfjdshfiuy!@!@#@$%#$%%&)*re87784368743629210=01=-4098398754647462\1\q1q2q2\qa";

module.exports = async (req, res, next)=>{
    
    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.status(400).json({
            erro:true,
            msg: "Erro: Necessário realizar login! Falta o token! A"
        });
    }else{
    
    const [, token] = authHeader.split(" ");
    console.log("Token: "+token);

    if(!token){
        res.statusCode(400).json({
            erro: true,
            msg: "Erro: Necessário realizar login! Falta o token! B"
        })
    }

        const decode = jwt.verify(token, secret, (err, data)=>{
            if(err){
                res.statusCode = 403;
                res.json({err: "Token inválido C"});
            }else{
                //console.log(data.data.email);
                req.userData = data.data.email;
                next();
            }
        })
        }
    }