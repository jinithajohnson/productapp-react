import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddProd = () => {
    const [data,setData] = useState(
     {
        "prodCode":"",
        "prodName":"",
        "description":"",
        "price":""

    }
    )

    const inputHandler = (event)=> {
        setData({...data, [event.target.name]:
            event.target.value })
        }

        const readValue = () => {
            console.log(data)
            axios.post("",data).then(
                (response)=>{
                    console.log(response)
                    if(response.data.status=="success") {
                        alert("success")

                    }
                    else{
                        alert("Error")
                    }
                }
            ).catch()
        
    }
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">prodCode</label>
                    <input type="text" className="form-control" name='prodCode' value={data.prodCode} onChange={inputHandler}/>


                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">prodName</label>
                    <input type="text" className="form-control" name='prodName' value={data.prodName} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">description</label>
                <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">price</label>
                <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={readValue}>Submit</button>
                
                </div>
            </div>

        </div>
    </div>
</div>


    </div>
  )
}

export default AddProd