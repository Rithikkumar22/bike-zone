const express = require('express');
const router = express.Router();

const authenticateUser = (req, res, next) => {
    const token = req.headers.auth;
    if(token=='rithik123'){
      next();
    }else{
      res.status(400).json({ error: 'Invalid token.' });
    }
}

router.use(authenticateUser);


router.post('/api/remove-from-cart',authenticateUser,(req,res)=>{
    const {userId,productId}=req.body;   
    // console.log(req.body);
  
      const checkQuery = 'SELECT * FROM wishlist_items WHERE user_id=? AND product_id=?';
      pool.query(checkQuery,[userId,productId],(error,result)=>{
        if(error){
          console.error('Error',error);
          return res.status(500).json({error:'Database error'});
        }
        // console.log(result);
        if(result.length===0){
          return res.status(404).json({message:'Not found'});
        }
        const delQuery = 'DELETE FROM wishlist_items WHERE user_id=? AND product_id=?';
        pool.query(delQuery,[userId,productId],(error,delresult)=>{
          if(error){
            console.error('error',error);
            return res.status(500).json({error:'Database error'});
          }
          return res.json({message:'Item deleted successfully'});
  
        });
      });
    
  });
  
  
 