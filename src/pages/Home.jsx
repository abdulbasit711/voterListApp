/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Button, Container } from '../components'
import { useSelector } from 'react-redux'

function Home() {
    const authStatus = useSelector((state) => state.auth.status)
    const [isMale, setIsMale] = useState(true)
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [fname, setFname] = useState("")
    const [cnic, setCnic] = useState("")
    const [voteno, setVoteno] = useState("")
    const [blockcode, setBlockcode] = useState("")
    const [pollingstation, setPollingstation] = useState("")

    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        setIsMale(value === "male" ? true : false)
    }

    const readAPI = () => {
        fetch(`https://sheetdb.io/api/v1/3dcdwdel0gxj7/search?ID=${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    const voterData = data[0]; // Assuming you are expecting only one record
                    setName(voterData.Name);
                    setFname(voterData.FName);
                    setCnic(voterData.CNIC);
                    setVoteno(voterData.VoteNo);
                    setBlockcode(voterData.BlockCode);
                    setPollingstation(voterData.PollingStation);
                } else {
                    // Handle the case when no data is found for the given ID
                    alert("No data found for the provided ID");
                    // You can also display a message or handle it in any way you prefer
                }
            });

    }
    const clearValues = () => {
        setName("");
        setFname("")
        setCnic("")
        setVoteno("")
        setBlockcode("")
        setPollingstation("")
        setId("")
    }

    if (authStatus) {

        return (

            <div className='w-full py-4'>
                <Container>

                    <div className='container'>
                        <div className="uppercontent">
                            <div className="imagecontainer">
                                <img src="https://i.dawn.com/primary/2018/07/5b4ee75074c57.png" alt="" />
                            </div>
                        </div>
                        <div className="lowercontent flex justify-center">
                            <div>
                                <div className='flex items-center justify-center mt-5' >
                                    <label htmlFor="checkbox1" className='px-2'>Male</label>
                                    <input type="radio" name="gender" id="checkbox1" value="male"
                                        onChange={handleChange} />
                                    <label htmlFor="checkbox2" className='ml-5 px-2 '>Female</label>
                                    <input type="radio" name="gender" id="checkbox2" value="female"
                                        onChange={handleChange} />
                                </div>

                                <div className=' mt-5 flex '>
                                    <input 
                                    type="text" 
                                    placeholder='Enter CNIC' 
                                    name="cnicinput" 
                                    id="CNICinput" 
                                    value={id}
                                    className='text-center h-8 rounded-tl-lg rounded-bl-lg' 
                                    onChange={(e) => setId(e.target.value)} 
                                    />
                                    <button onClick={() => readAPI()} className='rounded-tl-none rounded-bl-none h-8  flex justify-center items-center bg-green-600 rounded-lg px-4 py-2 text-white'>
                                        Search
                                    </button>
                                </div>

                                <div className='ml-8 mt-5 text-gray-700'>
                                    <div>
                                        <p>Name: <span className='px-3'>{name}</span></p>
                                    </div>
                                    <div>
                                        <p>{isMale ? "F Name" : "F/H Name"} <span className='px-3'>{fname}</span></p>
                                       
                                    </div>
                                    <div>
                                        <p>CNIC:<span className='px-3'>{cnic}</span></p>
                                       
                                    </div>
                                    <div>
                                        <p>Vote No: <span className='px-3'>{voteno}</span></p>
                                        
                                    </div>
                                    <div>
                                        <p>Block Code:  <span className='px-3'>{blockcode}</span></p>
                                       
                                    </div>
                                    <div>
                                        <p>Polling Station: <span className='px-3'>{pollingstation}</span></p>
                                   
                                    </div>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <button 
                                    className=' h-8  flex justify-center items-center bg-blue-500 rounded-lg px-4 py-2 text-white'
                                    onClick={clearValues}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Please Login
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home