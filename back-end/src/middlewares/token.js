const jwt = require('jsonwebtoken')

function CreateAcessToken(req,res,next) {
    const { email, password } = req.body
    const token = jwt.sign({
        email: email,
        password: password,
        rule: true
    }, '123', {
        expiresIn: "1h"
    })
    console.log(token)
    req.headers.authorization = token
    res.status(201).redirect("/")
}

function IsValidAcessToken(req,res,next) {
    const authorization = req.headers?.authorization
    
    jwt.verify(
        authorization,
        '123',
        (err, result) => {
            if(err) {
                res.redirect('/login')
            }
            if(result) {
                next()
            }
        }
    )
}

module.exports = {
    CreateAcessToken,
    IsValidAcessToken
}