import React, { useState, useEffect } from 'react';

function Json() {
  // State to store the fetched JSON data
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Define the list of JSON files you want to fetch
    const jsonFiles = [
        './components/bajaj.json',
        './components/KTM.json',
        './components/royal.json',
        './components/yamaha.json',
        './components/honda.json',
        './components/hero.json',
        './components/tvs.json',
        './components/suzuki.json',
        './components/kawasaki.json',
        './components/bmw.json',
        './components/jawa.json',
        './components/yezdi.json',
      ];

    // Function to fetch JSON data from a file
    const fetchData = async (filePath) => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error('Network error');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(`Error fetching data from ${filePath}:`, error);
        return [];
      }
    };

    // Function to fetch data for all JSON files and store it in state
    const fetchDataForAllFiles = async () => {
      const allData = await Promise.all(jsonFiles.map((filePath) => fetchData(filePath)));
      const mergedData = allData.flat();
      setJsonData(mergedData);
    };

    // Fetch data for all JSON files
    fetchDataForAllFiles();
  }, []);

  return (
    <div>
      <h1>JSON Data</h1>
      <ul>
        {jsonData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Json;
