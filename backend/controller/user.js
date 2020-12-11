const User = require('./../model/user');


export const signUp = async (req, res) => {
    try{
        const userExists = await User.findOne({phone:req.body.phone});

        if(userExists){
            res.send({
                status: 'Failed',
                message: 'User already exists'
            });
            return;
        }else{
            const user = new User({
                phone: req.body.phone
            })
            const newUser = await user.save();
            res.send({
                status: success,
                data: {
                    user: newUser
                }
            });
        }
    }catch(err){
        console.lof(err.message)
    }
}

export const authenticate = async(req, res) => {
    try{
        const user = await User.findOne({phone: req.body.phone});
        if(user){
            user.status = true;
            res.send({
                status: 'success',
                data: {
                    user
                }
            })
        }else{
            res.send({
                status: 'failed',
                message: 'Incorrect credentials entered'
            });
        }
    }catch(err){
        console.log(err);
    }
}

