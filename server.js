const express= require('express');
const app= express();

app.use(express.json());



const users= [
    {email : "keshav@gmail.com", age : 20},
    {email : "rohit@gmail.com", age : 18},
]

const port= 8080;

app.put('/user/:email', (req,res)=>{
    const email= req.params.email;
    const updatedUser= req.body;
    const find= users.find(u => u.email === email);

    if(!find){
        return res.send("User not found..!")
    }

    Object.assign(users, updatedUser);
    res.send({msg : "User updated", user : updatedUser})
})

app.delete('/user/:email', (req,res)=>{
    const email= req.params.email;
    const idx= users.findIndex(u => u.email === email);

    if(idx === -1){
        return res.send("User not found..!")
    }

    users.splice(idx, 1);

    res.send({msg : "User deleted"})
})

app.listen(PORT, () => {
    console.log(TheServerisrunningon`http://localhost:${PORT}`);
});