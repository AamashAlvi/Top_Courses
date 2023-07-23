import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";


const App = () => {

  // in this the courses are null because we have to shore the courses fetched from the apiUrl
  const [courses, setCourses] = useState(null);

  // for the spinner the loading is set ture at first.
  const [loading, setLoading] = useState(true);

  // this useState is made to show the use of the filters in the UI
  // by default the category is set to the zeroth index of the filterData and in the zeroth index the tittle wich is all.
  const[category , setCategory] = useState(filterData[0].title);

  // this function is to fetch the data from the API.
  async function fetchData() {

    // till the time the data is being fetched show the spinner.
    setLoading(true);

    // try and catch block is used to handle the error.
    try{
      // this line fetches the data from the Api.
      let response = await fetch(apiUrl);
      // this line converts the fetched URL to json format.
      let output = await response.json();

      // this line tells us that we have set the json converted data to setCousrs
      // output.data is written because we have to iterate through the data from the output
      setCourses(output.data)

    }
    catch(error){
        toast.error("Network issue");
    }


    // this shows that when we have the data from the API then hide the spinner.
    setLoading(false);
  }  


  // whenever the first render will be done it will call the fetchData function.
  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div>
        <div >
          <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] 
          mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            // this line says that if the loading is true then show the Spinner otherwise show the Cards.
            // the data of the courses is sent to Card.js

            // we have passed category as prop because the card will be shown according to the category of the filter.
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)
          }
        </div>

      </div>

    </div>
  )
};

export default App;
