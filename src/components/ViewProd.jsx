import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewProd = () => {
    const [data,changeData]=useState(

        [
           
        ]
    )
const fetchData=()=>{
    axios.get("").then(
        (response)=>{
            changeData(response.data)
        }


    ).catch(
        (error) => {
          console.log(error.message)
          
        }

    ).finally()
}

useEffect(()=>{fetchData()},[])


  return (
    <div>
        <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">prodCode</th>
      <th scope="col">prodName</th>
      <th scope="col">description</th>
      <th scope="col">price</th>
      
      
    </tr>
  </thead>
  <tbody>
                {
                    data.map(
                        (value,index)=>{
                            return <tr>
                            <td scope="row">{value.prodCode}</td>
                            <td>{value.prodName}</td>
                            <td>{value.description}</td>
                            <td>{value.price}</td>
                           
                            
                          </tr>
                        }
                    )
                }

  </tbody>
</table>

                </div>
            </div>
        </div>



    </div>
  )
}

export default ViewProd