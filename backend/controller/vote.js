const Vote = require('./../model/vote');


export const castVote = async (req, res) => {
    try{
        const voteCast = await Vote.findOne({user:req.body.user, role: req.body.role});

        if(voteCast){
            res.send({
                status: 'Failed',
                message: 'Your vote has been cast already'
            });
            return;
        }else{
            const vote = new Vote({
                user: req.body.user,
                role: req.body.role,
                votedFor: req.body.votedFor
            })
            const newVote = await vote.save();
            res.send({
                status: success,
                data: {
                    vote: newVote
                }
            });
        }
    }catch(err){
        console.lof(err.message)
    }
}

export const getAllVotes = async(req, res) => {
    try{
        const votes = await Vote.find();
        if(votes){
            res.send({
                status: 'success',
                data: {
                    votes
                }
            })
        }else{
            res.send({
                status: 'failed',
                message: 'No votes were found'
            });
        }
    }catch(err){
        console.log(err);
    }
}

export const getUsersVotes = async(req, res) => {
    try{
        const votes = await Vote.find({user: req.body.user});
        if(votes){
            res.send({
                status: 'success',
                data: {
                    votes
                }
            })
        }else{
            res.send({
                status: 'failed',
                message: 'User has not voted'
            });
        }
    }catch(err){
        console.log(err);
    }
}
