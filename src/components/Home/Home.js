import React,{useState,useEffect} from 'react'
import  {getAllTourData} from '../../ApiService/Api'
import Tourcards from '../TourCard/Tourcards'

function Home() {
    const [tour,setTour]=useState([])


    const removeTour= (id)=>{
         
        const filteredData= tour.filter((data)=>data.id!==id)
   
        setTour(filteredData)


    }

    async function  fetchTourData(){
        try{

            const response= await getAllTourData()
            if(response){
                setTour(response)
            }
        }

        catch(error){
            console.log(error)

        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            fetchTourData()
        },1000)
    },[])


  return (
    <>
    <section>
        {
            tour?.length===0 ? <>
            <main>
                <div className='title'>
                    <h2>NO tours left</h2>
                    <button className='btn' onClick={()=>fetchTourData()}>Refresh</button>

                </div>
            </main>
            </>  :  <>
            <div className='title'>
                <h2>Tour Application</h2>
                <div className='underline'>

                </div>
                <div>

                    {
                        tour.map((tour)=>{

                            return(
<Tourcards key={tour.id} {...tour}  removeTour={removeTour}    />
                            )
                        })
 

                    }
                   
                </div>

            </div>
            </>
        }
    </section>
    
    </>
  )
}

export default Home
