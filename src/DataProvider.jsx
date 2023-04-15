import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [kumr , setKumar] = useState([])
  const [alp ,setAlp] = useState([])
  const [munnar , setMunnar] = useState([])
  const [vagamon , setVagamon] = useState([])
  const [thekkady , setThekkady] = useState([])
  const [kochi , setKochi] = useState([])
  const [wayanad , setWayanad] = useState([])
  const [calicut , setCalicut] = useState([])
  const [thrissur , setThrissur] = useState([])
  const [malappuram , setMalappuram] = useState([])
  const [kannur , setKannur] = useState([])
  const [ksd , setKsd] = useState([])
  const [coorg , setCoorg] = useState([])
  const [kodai , setKodai] = useState([])
  const [ooty , setOoty] = useState([])

  useEffect(() => {
    const cachedData = localStorage.getItem("data");

    if (cachedData) {
        try {
          const parsedData = JSON.parse(cachedData);
          setData(parsedData);
        } catch (e) {
          console.log("Error parsing cached data:", e);
          localStorage.removeItem("data");
        }
      }
    

    fetch('https://trekkbackend.fun/packages/trivandrum')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
      })
  }, []);

  useEffect(()=>{

    const cachedData = localStorage.getItem("data-one");

    if (cachedData) {
        try {
          const parsedData = JSON.parse(cachedData);
          setKumar(parsedData);
        } catch (e) {
          console.log("Error parsing cached data:", e);
          localStorage.removeItem("data-one");
        }
      }
    

    fetch('https://trekkbackend.fun/packages/kumarakom')
      .then(response => response.json())
      .then(data => {
        setKumar(data);
        console.log(data);
        localStorage.setItem("data-one", JSON.stringify(data));
      })

  }, [])


  useEffect(()=>{

    const cachedData = localStorage.getItem("data-two");

    if (cachedData) {
        try {
          const parsedData = JSON.parse(cachedData);
          setAlp(parsedData);
        } catch (e) {
          console.log("Error parsing cached data:", e);
          localStorage.removeItem("data-two");
        }
      }
    

    fetch('https://trekkbackend.fun/packages/alleppey')
      .then(response => response.json())
      .then(data => {
        setAlp(data);
        console.log(data);
        localStorage.setItem("data-two", JSON.stringify(data));
      })

  }, [])


  return (
    <DataContext.Provider value={{data , kumr , alp ,munnar , vagamon ,thekkady ,kochi, wayanad ,calicut , thrissur , malappuram , kannur , ksd , coorg , kodai , ooty}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;