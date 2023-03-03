import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'
function Main() {

    const [honeyMoon, setHoneyMoon] = useState([]);
    const [family, setFamily] = useState([]);
    const [holiday, setHoliday] = useState([]);
    const [ad,setAd] = useState([])

    const fetchHoneyMoonPackage = async()=>{
        const response = await axios.get('/packages/honeymoon');
        setHoneyMoon(response.data)
    }

    const fetchFamilyPackage = async()=>{
        const response = await axios.get('/packages/family');
        setFamily(response.data)
    }

    const fetchHolidayPackage = async()=>{
        const response = await axios.get('/packages/holiday');
        setHoliday(response.data)
    }

    const fetchAds = async()=>{
        const response = await axios.get('/packages/getAd');
        setAd(response.data)
    }

    useEffect(() => {
        fetchHoneyMoonPackage();
        fetchFamilyPackage();
        fetchHolidayPackage();
        fetchAds()
    }, [])

    console.log(honeyMoon);

    return (
        <div className='container'>
            {honeyMoon.map((items) => {
                const base64String = btoa(
                    String.fromCharCode(...new Uint32Array((items.image.data.data)))
                )

                return (
                    <div key={0}>
                        <h1 key={1}>HONEYMOON PACKAGES</h1>
                        <img key={2} src={`data:image/jpeg;base64,${base64String}`} alt="" width={300} />
                        <p>place : {items.place}</p>
                        <p>price : {items.price}</p>
                        <p>days  :  {items.days}</p><br />
                        <hr /><br />
                    </div>
                )

            })}
            {
                family.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )

                    return (
                        <div key={0}>
                            <h1>Family PACKAGES</h1>
                            <img src={`data:image/jpeg;base64,${base64String}`} alt="" width={300} />
                            <p>place : {items.place}</p>
                            <p>price : {items.price}</p>
                            <p>days  :  {items.days}</p><br />
                            <hr /><br />
                        </div>
                    )
                })
            }

            {
                holiday.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )

                    return (
                        <div key={0}>
                            <h1>HOLIDAY PACKAGES</h1>
                            <img src={`data:image/jpeg;base64,${base64String}`} alt="" width={300} />
                            <p>place : {items.place}</p>
                            <p>price : {items.price}</p>
                            <p>days  :  {items.days}</p><br />
                            <hr /><br />
                        </div>
                    )
                })
            }
{
                ad.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (
                        <div key={0}>
                            <h1>TRENDING</h1>
                            <img src={`data:image/jpeg;base64,${base64String}`} width={250} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main