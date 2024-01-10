const authorize = (req,res,next)=>{

    const {user} = req.query;
    if(user){
        console.log('User Exist')
        next()
    }
    else{
        // console.log('authorize()')
        res.status(401).send('User not found')
    }
}

module.exports = authorize 