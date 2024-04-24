import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const HotelDetails = () => {
    const { resId } = useParams();
    //console.log(resId)
    const [hotelDetails, setHotelDetails] = useState()
    useEffect(() => {
        fetchData();
    }, [])
    
      const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setHotelDetails(json?.data?.cards[0]?.card?.card?.text)
        // setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setFilterdList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(json)
      }
      
    if (hotelDetails === null) return <>Loading</>
  return (
    <div className='container' >
        <h3>{hotelDetails}</h3>
    </div>
  )
}

export default HotelDetails