const deleteMessage =(req,res,db)=>
{
    const{id}=req.body;
    db('messages')
    .where('msgid', id)
    .del().then(res.json('deleted succefully')).catch(err=>res.status(400).json('error occured'))


}
module.exports={
    deleteMessage:deleteMessage
}