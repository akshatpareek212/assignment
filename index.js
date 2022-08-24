const express = require('express')
require('./db/mongoose.js')
const User = require('./ques1')
const app = express()

app.use(express.json())

//To save user data
app.post('/users', async (req,res)=>{
    const user = new User(req.body)

    try{
        await user.save()
        res.send(user)
    }
    catch(e){
        res.status(400).send(e)
    }
})


//To fetch all users
app.get('/users',async (req,res)=>{

    try{
        const users= await User.find({})
        res.send(users)
        }
        catch(e){
            res.status(500).send()
        }

})

app.listen(3000,()=>{console.log('Server has started on port 3000')})