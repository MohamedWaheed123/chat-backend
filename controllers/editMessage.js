const editMessage=(req,res,db)=>{

    const {id,editedMsg}=req.body
    db('messages')
  .where('msgid', '=', id)
  .update({
    msg: editedMsg,
    
  }).then(res.json('edited succefully')).catch(err=>res.json("error delete message"))
}
module.exports={
    editMessage:editMessage
}