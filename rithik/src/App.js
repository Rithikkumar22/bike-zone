import React, { useState, useEffect } from 'react';
import Bajaj from './components/BajajDisplay';
import KTM from './components/KTMDisplay';
import Wishlist from './components/Wishlist';
import axios from 'axios';
import Page from './components/Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUpForm from './components/Signup';
import Royal from './components/RoyalDisplay';
import Yamaha from './components/YamahaDisplay';
import Honda from './components/HondaDisplay';
import Hero from './components/HeroDisplay';
import TVS from './components/TVSDisplay';
import Suzuki from './components/SuzukiDisplay';
import Kawasaki from './components/KawasakiDisplay';
import BMW from './components/BmwDisplay';
import Jawa from './components/JawaDisplay';
import Yezdi from './components/YezdiDisplay';
import EMI from './components/Emi';
import Cookies from 'js-cookie';
import huihui from './components/data.js'


function App() {
  
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [product, setProduct] = useState(null);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
  
    const jsonFiles = [
        './components/bajaj.json',
        './components/KTM.json',
        './components/Royal.json',
        './components/Yamaha.json',
        './components/Honda.json',
        './components/Hero.json',
        './components/TVS.json',
        './components/Suzuki.json',
        './components/Kawasaki.json',
        './components/Bmw.json',
        './components/Jawa.json',
        './components/Yezdi.json',
      ];

 
    const fetchData = async (data) => {
        console.log(data);
        return data;
      // try {
      //   console.log(data);
      //   const response = await fetch(data);
      //   if (!response.ok) {
      //     throw new Error('Network error');
      //   }
      //   const data = await response.json();
      //   return data;
      // } catch (error) {
      //   console.error(`Error fetching data from ${filePath}:`, error);
      //   return [];
      // }
    };

    
    const fetchDataForAllFiles = async () => {
      const allData = huihui   ; 
      console.log(allData);
      const mergedData = allData.flat();  
      setJsonData(mergedData);
      insertDataIntoDatabase(mergedData);
      console.log(mergedData);
    };

    fetchDataForAllFiles();
  }, []);

  const insertDataIntoDatabase = async (dataToInsert) => {
    try {
      
      const response = await axios.post('http://localhost:3001/api/insert-bike-data', dataToInsert);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error inserting data into the database:', error);
    }
  };

  // const addToWishlist = async (product) => {
  //   console.log('userId', userId);
  //   const authToken = Cookies.get('token');
  //   console.log("Auth Token:", authToken);
  
  //   if (!userId || !authToken) {
  //     alert('Login required');
  //     return;
  //   }
  
  //   const headers = {
  //     auth: `${authToken}`,
  //   };
  
  //   await axios.post("http://localhost:3001/api/add-to-wishlist", { userId, productId: product.product_id }, { headers })
  // .catch((error) => {
  //   console.error("Axios request error:", error);
  // });

  
  //   console.log("After axios.post"); // Add this log
  
  //   setWishlist([...wishlist, product]);
  
  //   console.log("After setWishlist"); // Add this log
  
  //   alert('Bike added successfully');
  // };
  
  

  
  // const addToWishlist = async (product) => {
  //   try {
  //     console.log(userId);

  //     const authToken = Cookies.get('token');
  //     console.log("Auth Token:", authToken); 
      
  //     if (!userId || !authToken) {
  //       alert('Login required');
  //       return;
  //     }
  
  //     const headers = {
  //       auth: `${authToken}`,
  //     };
  
  //     await axios.post("http://localhost:3001/api/add-to-wishlist", { userId, productId: product.product_id }, { headers });
  //     // setWishlist([...wishlist, product]);
      
  //     alert('Bike added successfully to wishlist');
  //   } catch (error) {
  //     console.error("Error adding to wishlist:", error);
  //   }
  // };
  
  const addToWishlist = async (product) => {
    const authToken = Cookies.get('token');
    if (!userId || !authToken) {
      alert('Login required');
      return;
    }
    const headers = {
      auth: 'rithik123',
    };
  
    try {
      const response = await axios.post(
        'http://localhost:3001/api/get-product-id', 
        { productName: product.name },
        { headers }
      );
  
      if (response.status === 200) {
        const productId = response.data.productId;
        
        const addToWishlistResponse = await axios.post(
          'http://localhost:3001/api/add-to-wishlist',
          { userId, productId },
          { headers }
        );
  
        if (addToWishlistResponse.status === 200) {
          setWishlist([...wishlist, product]);
          alert('Bike added successfully');
        } else {
          alert('Failed to add to wishlist');
        }
      } else {
        alert('Failed to retrieve product information');
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };
  
  // const removeFromWishlist = (product) => {
  //   if(window.confirm("Are you sure you want to delete")){
  //     const updatedWishlist = [...wishlist];
  //     updatedWishlist.splice(product, 1);
  //     setWishlist(updatedWishlist);

  //   }
    
  // };

  const removeFromWishlist = async (productId) => {
    const authToken = Cookies.get('token');
  
    if (!userId || !authToken) {
      alert('Login required');
      return;
    }
  
    const headers = {
      auth: 'rithik123',
    };
  
    try {
      const response = await axios.post("http://localhost:3001/api/remove-from-cart", { userId, productId }, { headers });
  
      if (response.status === 200) {
        window.confirm('Are you sure to delete');
        const updatedCartItems = wishlist.filter((item) => item.productId !== productId);
        setWishlist(updatedCartItems);
  
        
        
      } else if (response.status === 404) {
        
        alert('Item not found in cart');
      } else {
        alert('An error occurred while removing the item from the cart');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
      alert('An error occurred while removing the item from the cart');
    }
  };
  
  

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
      }
      return Promise.reject(error);
    }
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUserId={setUserId} />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/page" element={<Page />} />
        <Route path="/bajaj" element={<Bajaj onAddToCart={addToWishlist} />} />

        <Route path="/ktm" element={<KTM product={product} onAddToCart={addToWishlist} userId={userId}  />} />

        <Route path="/royal" element={<Royal onAddToCart={addToWishlist} />} />
        <Route path="/yamaha" element={<Yamaha onAddToCart={addToWishlist} />} />
        <Route path="/honda" element={<Honda onAddToCart={addToWishlist} />} />
        <Route path="/hero" element={<Hero onAddToCart={addToWishlist} />} />
        <Route path="/tvs" element={<TVS onAddToCart={addToWishlist} />} />
        <Route path="/suzuki" element={<Suzuki onAddToCart={addToWishlist} />} />
        <Route path="/kawasaki" element={<Kawasaki onAddToCart={addToWishlist} />} />
        <Route path="/bmw" element={<BMW onAddToCart={addToWishlist} />} />
        <Route path="/jawa" element={<Jawa onAddToCart={addToWishlist} />} />
        <Route path="/yezdi" element={<Yezdi onAddToCart={addToWishlist} />} />
        <Route path="/emi" element={<EMI />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} onRemoveFromWishlist={removeFromWishlist} userId={userId} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
