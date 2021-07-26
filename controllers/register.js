


const handleRegister= (req,res,db,bcrypt)=>{
   
    const{email,name,password,color}=req.body;
    if(!email||!name||!password)
{
    return res.status(400).json('incorrect form submission');
}
    console.log('register pass:',password);
    const saltRounds = 10;
   
    // const hash = bcrypt.hashSync(password,saltRounds);     
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        db.transaction(trx=>{
            trx.insert({
                hash:hash,
                email:email
            }).into('login').returning('email').then(LoginEmail=>{
              return trx('users').returning('*').insert({
                   email: LoginEmail[0],
                   name:name,
                   color:color,
                   
               }).then(user=>{
                   res.json(user[0]);
               }).catch(err=>{
                   console.log("err", err)
                   res.status(400).json(err)
               })
            }).then(trx.commit).catch(trx.rollback)
        })
       
       .catch(err=>res.status(400).json('unable to register'))
    });        
    
    
   
   }
   module.exports={
       handleRegister:handleRegister
   };