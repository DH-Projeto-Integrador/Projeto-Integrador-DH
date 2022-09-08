function auth(req,res,next) {
    const { name, password } = req.body
    const user = DATABASE.find(user => name == user.name && password == user.password)

    if(user) {
        res.sendFile(path.join(__dirname, '../views/cadastro.html'));
        next()
    }
    
    next()
}

module.exports = auth