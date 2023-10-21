import React, { useEffect ,useState} from 'react'

const UseEffectapi = () => {
    const [users,setUsers]=useState([]);

    const getUsers=async()=>{
        const response =await fetch('https://jsonplaceholder.typicode.com/photos');
        // console.log(response);
        // const data=await response.json();
        // console.log(data);

         setUsers( await response.json());
    } 

useEffect(()=>{
    getUsers();
},[]);

  return (
    <>
    <h2>List of GitHub Users</h2>
    <div className='container-fluid mt-5'>
        <div className='row text-center'>
            {
                users.map((curElem)=>{
                    return(
                        <div className='col-10 col-md-4 mt-5' key={curElem.id}>
            <div className='card p-2'>
                <div className='d-flex align-items-center'>
                    <div className='image'><img src={curElem.thumbnailUrl} alt="" className='rounded' width='155'/></div>
                    <div className='ml-3 w-100'>
                        <h4 className='mb-0 mt-0 textLeft'>Icons</h4>
                        <div>
                            <div><span>{curElem.title}</span></div>
                            <div><span>{curElem.url}</span></div>
                            <div>440</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    )
                })
            }
       
        </div>
    </div>
    </>

  )
}

export default UseEffectapi