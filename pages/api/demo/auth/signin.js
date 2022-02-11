const user = {
    id: 1,
    names: "khuthadzo",
    email: "better@betteryourhealth.co.za",
    password: "testpassword"
}

export default function (req, res) {
    if(req.body.email == user.email){
        if(req.body.password == user.password){
            user.password = undefined
            res.status(200).json(user)
            return
        }
    }
    res.status(401).json({error:"Invalid Credentials"});
}
