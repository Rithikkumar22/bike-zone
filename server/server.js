const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const fs =  require('fs');

const jwtlib = require('jsonwebtoken');




const cors = require('cors');

app.use(express.json());

app.use(express.static('../client/build'));

app.use(cors());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Amay06034@',
  database: 'mydb',
  connectionLimit: 30,
});

// connection.connect();


const JWT_SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());

const authenticateUser = (req, res, next) => {
  const token = req.headers.auth;
  if(token=='rithik123'){
    next();
  }else{
    res.status(400).json({ error: 'Invalid token.' });
  }
  // if (!token) {
  //   return res.status(401).json({ error: 'Access denied. No token provided.' });
  // }

  // try {
  //   const decoded = jwtlib.verify(token, JWT_SECRET_KEY);
  //   req.user = decoded;
  //   next();
  // } catch (ex) {
  //   res.status(400).json({ error: 'Invalid token.' });
  // }
};



app.post('/api/add-to-cart', authenticateUser, async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.userId;

  const checkQuery = 'SELECT * FROM cart_items WHERE user_id=? AND product_id=?';
  pool.query(checkQuery, [userId, productId], (err, result) => {
    if (err) {
      console.error('Error');
      return res.status(500).json({ error: 'Error checking cart' });
    }
    if (result.length === 0) {
      const query = 'INSERT INTO cart_items (user_id, product_id) VALUES (?, ?)';
      pool.query(query, [userId, productId], (err, result) => {
        if (err) {
          console.error('Error adding to cart:', err);
          return res.status(500).json({ error: 'Error adding to cart' });
        }
        return res.status(201).json({ message: 'Added to cart successfully' });
      });
    }
  });
});
// app.post('/api/add-to-cart', authenticateUser, async (req, res) => {
//   const { userId, productId, quantity } = req.body;

  
//   if (!userId || !productId || !quantity) {
//     return res.status(400).json({ error: 'Invalid input data' });
//   }

  
//   const checkQuery = 'SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?';
//   pool.query(checkQuery, [userId, productId], (checkErr, checkResults) => {
//     if (checkErr) {
//       return res.status(500).json({ error: 'Database error' });
//     }
//     if (checkResults.length > 0) {
      
//       const updateQuery = 'UPDATE cart_items SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?';
//       pool.query(updateQuery, [quantity, userId, productId], (updateErr, updateResults) => {
//         if (updateErr) {
//           return res.status(500).json({ error: 'Database error' });
//         }
//         return res.json({ message: 'Product quantity updated in cart' });
//       });
//     } else {
     
//       const insertQuery = 'INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)';
//       pool.query(insertQuery, [userId, productId, quantity], (insertErr, insertResults) => {
//         if (insertErr) {
//           return res.status(500).json({ error: 'Database error' });
//         }
//         return res.json({ message: 'Product added to cart' });
//       });
//     }
//   });
// });


app.post('/api/add-to-wishlist', authenticateUser, async (req, res) => {
  const { userId, productId } = req.body;
  


  const checkQuery = 'SELECT * FROM wishlist_items WHERE user_id = ? AND product_id = ?';
  pool.query(checkQuery, [userId, productId], (checkErr, checkResults) => {
    if (checkErr) {
      return res.status(500).json({ error: 'Database error' });
    }
    // console.log(checkResults.length);
    if (checkResults.length === 0) {
      
      const insertQuery = 'INSERT INTO wishlist_items (user_id, product_id) VALUES (?, ?)';
      pool.query(insertQuery, [userId, productId], (insertErr, insertResults) => {
        if (insertErr) {
          return res.status(500).json({ error: 'Database error' });
        }
        return res.json({ message: 'Product added to wishlist' });
      });
    }
  });
  // console.log(productId);
});

app.post('/api/get-product-id', authenticateUser, async (req, res) => {
  const { productName } = req.body;

  try {
    
    const query = 'SELECT product_id FROM bike WHERE name = ? '; 
    pool.query(query, [productName],(error,result) => {
      if(error){
        return res.status(500).json({error:'Database error'})
      }
      // console.log(result);
      if (result.length > 0) {
        
        const productId = result[0].product_id;
        res.status(200).json({ productId });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    });
  } catch (error) {
    console.error('Error retrieving productId:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return btoa(binary);
};

app.get('/api/get-product-image/:productId',(req,res)=>{
  const {productId}=req.params;
  // console.log(productId);

  const query = 'SELECT image FROM bike WHERE product_id=?';
  pool.query(query,[productId],(error,result)=>{
    if(error){
      console.error('error',error);
      return res.status(500).json({error:'Database error'});
    }
    if(result.length===0){
      res.status(404).json({message:'Image not found'});
    }
    const imageData = result[0].image;
    // console.log(imageData);

    res.json({message:imageData});
  
    // const base64Image = arrayBufferToBase64(result[0].image);

    // fs.writeFileSync('../server/image/bike.png',base64Image,'base64');

    // console.log(base64Image)

    // res.json({message:base64Image})
  })
})


app.get('/api/user-wishlist/:userId',(req,res)=>{
  const {userId} = req.params;
  const query = 'SELECT bike.*,wishlist_item_id FROM bike JOIN wishlist_items ON bike.product_id=wishlist_items.product_id WHERE user_id=?';
  pool.query(query,[userId],(error,result)=>{
    if(error){
      console.error('Error fetching',error);
      return res.status(500).json({error:'Database error'});
    }
    res.json(result);
  });
});

app.post('/api/remove-from-cart',authenticateUser,(req,res)=>{
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



// app.post('/api/add-to-wishlist', authenticateUser, async (req, res) => {
//   const { productId } = req.body;
//   const userId = req.user.userId;

//   const checkQuery = 'SELECT * FROM wishlists WHERE user_id=? AND product_id=?';
//   connection.query(checkQuery,[userId,productId],(err,result)=>{
//     if(err){
//       console.error('Error');
//       return res.status(500).json({error:"error checking cart"})
//     }
//     if(result.length===0){
//       const query = 'INSERT INTO wishlists (user_id, product_id) VALUES (?, ?)';
//       connection.query(query, [userId, productId], (err, result) => {
//         if (err) {
//           console.error('Error adding to wishlist:', err);
//           return res.status(500).json({ error: 'Error adding to wishlist' });                                      
//     }
//     return res.status(201).json({ message: 'Added to wishlist successfully' });
//   });
// }
// });
// });
app.post('/api/logout', (req, res) => {
  try {
    // localStorage.removeItem('token');

    res.json({ message: "Logout successful" });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  pool.query(query, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Signup error:', err);
      return res.status(500).json({ error: 'Error creating user' });
    }
    return res.status(201).json({ message: 'User created successfully' });
  });
});

app.post('/api/login', async (req, res) => {
  const { username, email, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND email = ?';
  pool.query(query, [username,email], async (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).json({ error: 'Error fetching user' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password); 
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
   

    const token = jwtlib.sign({ userId: user.user_id, username: user.username }, JWT_SECRET_KEY, {
      // expiresIn: '1h',
    });

   
    return res.status(200).json({ token, userId: user.user_id });
  });
});


app.post('/api/insert-bike-data', async (req, res) => {
  try {
    const jsonData = req.body; 

    // console.log('Received JSON data:', jsonData);

    
    for (const item of jsonData) {
      const query = 'INSERT INTO bike (name, image, price, engineCapacity, mileage, kerbweight, seatheight, fuelTankcapacity, power) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const values = [item.name, item.image, item.price, item.engineCapacity, item.mileage, item.kerbweight, item.seatheight, item.fuelTankcapacity, item.power];

      pool.query(query, values);
      
    }
    

    res.status(200).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   const query = 'SELECT * FROM users WHERE username = ?';
//   pool.query(query, [username], async (err, results) => {
//     if (err) {
//       console.error('Login error:', err);
//       return res.status(500).json({ error: 'Error fetching user' });
//     }

//     if (results.length === 0) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     const user = results[0];
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

   
//     const token = jwtlib.sign({ userId: user.id, username: user.username }, JWT_SECRET_KEY, {
//       expiresIn: '1h',
//     });

//     return res.status(200).json({ message: 'Login successful', token });
//   });
// });

app.get('/sts', (req, res) => {
  res.set( {
   'Content-Type': 'application/json',
   "Access-Control-Allow-Origin":"*",
   "Access-Control-Allow-Headers":"*",
   "Access-Control-Allow-methods":"*"});
 
   const jwt = generateJWTForOTTBot();
   data = {
     jwt:jwt
   };
   res.send(JSON.stringify(data));
   function generateJWTForOTTBot(){
    const payload = {
          "iat": (new Date().getTime())/1000,
          "exp": (new Date().getTime())/1000+86400,
            "aud": "https://idproxy.kore.ai/authorize",
            "iss": "cs-cd726ac0-a07c-5ef2-8cc8-9fe90a41d0a3", 
           "sub": req.headers.email
    }
    const secret = "STt8oWZ745Y/mSBW5ufCJ2nNyz0zzn3kIjtD0Pa8RPQ="; 
    var token = jwtlib.sign(payload, secret);
    return token;
  
}
 
 })
 
 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
