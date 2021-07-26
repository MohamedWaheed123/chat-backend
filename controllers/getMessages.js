const getMessages=(req,res,db)=>{
   
    
    db('users')
    .join('messages', 'users.id', '=', 'messages.userid')
    .select('users.id','users.name','users.color', 'messages.msgid','messages.msg','messages.date','messages.userid','messages.repliedMsgText','messages.repliedMsgUser','messages.repliedUserColor').orderBy('messages.date').then(message=>{
       if(message.length)
       {

           res.json(message);
       }
       else{
        res.status(404).json('not found');
       }
   }).catch(err=>res.status(400).json('error getting messages'));
    
}
module.exports={
    getMessages:getMessages
}