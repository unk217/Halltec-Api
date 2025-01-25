import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Municipalities() {

  const[mun, setMun] = useState([])

  useEffect(()=>{
    const loadmun=async()=>{
      const accessToken = localStorage.getItem('access_token');
      console.log(accessToken)
      try{
        const apiUrl =`${import.meta.env.VITE_BASE_URL}/v1/bills?filter[identification]&filter[names]&filter[number]&filter[prefix]&filter[reference_code]&filter[status]`
        const res = await axios.get(apiUrl,
          {headers:{
            Authorization: `Bearer ${accessToken}`
          }}
        )

        setMun(mun)
        console.log(res)
      
      }catch(error){
        console.log("error data", error)
      }
      
    }
    loadmun()
  },[])

  return (
    <div>
      <h1 className='flex justify-center text-white font-bold p-4'>Facturas</h1>



    </div>
  )
}

export default Municipalities
