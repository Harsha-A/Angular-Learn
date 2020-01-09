const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000



app.get('/api', (req, res) => res.json({
    text: 'my Api'
})
)

app.post('/api/login',(req,res)=>{

    const user = { id: 3};
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token: token
    })
})
app.get('/api/protected',ensuretoken,(req,res)=>{

    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                test: 'This is protected',
                data: data
            })
        }
    })

    
})

function ensuretoken(req,res,next){
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !=='undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else{
        res.sendStatus(403);
    }
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

