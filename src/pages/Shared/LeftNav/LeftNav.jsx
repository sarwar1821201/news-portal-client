import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import leftPicture1 from '../../../assets/1.png'
import leftPicture2 from '../../../assets/2.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect( ()=>{

      fetch('http://localhost:5000/categories')
      .then(res=> res.json() )
      .then(data => setCategories(data) )

      .catch(error => console.log(error) )


    } , [] )


    return (
        <div>
            <h3>All Category</h3>
     <div className='ps-4'>

     {
               categories.map(category => <p 
                key={category.id}
               
               > 
              <Link to={`/category/${category.id}`} className='text-decoration-none text-black'  >  {category.name} </Link>
                </p>  )
            }

     </div>
      
      <h5 className='mb-2'>LeftNav Picture</h5>

     <div className='mt-2 mb-3 py-3 gap-3'>
            <img src={leftPicture1} alt="" />
            <p></p>
            <img src={leftPicture2} alt="" />
           
        </div>

        </div>
    );
};

export default LeftNav;



