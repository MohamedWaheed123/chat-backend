const addMessage=(req,res,db)=>{

    const {msgid,date,userid,msg,repliedMsgText,repliedMsgUser,repliedUserColor}=req.body;
    db('messages').insert({msgid: msgid,date:date,userid:userid,msg:msg,repliedMsgText:repliedMsgText,repliedMsgUser:repliedMsgUser,repliedUserColor:repliedUserColor})
    .then(res.json('inserted succefully'))
    .catch(err=>res.json('error inserting message'))

}
module.exports={
    addMessage:addMessage
}