
import './App.css';
import {useEffect, useState} from "react";

import Header from "./components/Header"
import ResCard from './components/ResCard';
import restaurantData from "./utils/data"
import About from './pages/about';
import { Link } from 'react-router-dom';

function App() {
  const [resList, setResList] = useState([]);
  const [filtedList, setFilterdList] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchText, setSearchText] = useState();
  

  useEffect(() => {
    fetchData();


  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterdList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // const pData = pricingData
  
  const handleScroll = (e) => {
    console.log("Hi")
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
        (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position);

    if (position > 90) {
      fetchData();
    }
};
if (filtedList === null) return <>Loading</>
  return (
    // <div className="app" onScroll={(handleScroll)} style={{ height: "900px", overflowY: "scroll" }} >
    <div className="app" onScroll={(handleScroll)}>
      {/* <h1 style={{ position: "fixed", color: "red" }}>
                Scroll Position: {scrollPosition}px
            </h1> */}
      
      <div className='container'>
        <div className='d-flex' >
          <div style={{position: "fixed"}} >{scrollPosition}</div>
          {/* <div>
            <button className='btn btn-primary text-nowrap'
            onClick={() => {
                // resList = resList.filter((res) =>  )
                const filtedList = resList.filter(
                  (res) => res.info.avgRating > 4
                )
                setResList(filtedList)
              }
            }
            >Top Rated</button>
          </div> */}
          <div>
            <div className='d-flex ms-3 input-group' >
            <input type="text" className="form-control" id="searchInput" placeholder="Search" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
            />
            <button type="submit" className="btn btn-primary" onClick={() => {
              // console.log(setSearchText(document.getElementById('searchInput').value))

              const filterdRes = resList.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilterdList(filterdRes)
              
            }} >Search</button>
            </div>
          </div>

        </div>
       
        <div className="row" >
          
        {filtedList.map((item) => {
          return <Link key={item.info.id} to={'/hotel-details/' + item.info.id } className="col-4 mt-3"  ><ResCard  resData={item} /></Link>
        })}
        </div>
      </div>
    </div>
  );
}



export default App;
