const homeController=(req,res)=>{
    res.send("This is a node practise set")
}  


const loginController=(req,res)=>{
    res.send("Login page")
}

const registerController=(req,res)=>{
    res.send("Register page")
}

export {homeController,loginController,registerController}