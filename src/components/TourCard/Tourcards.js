import React,{useState} from 'react'

function Tourcards({id,image,info,name,price,removeTour}) {

  const [readMore,setReadMore]=useState(false)
  return (
  <>
<article>
  <img src=' ' alt='' />
  <footer>
    <div className='tour-info'>
      <h4>name</h4>
      <h4 className='tour-price'>price</h4>

    </div>
    <p>
      {/* {
        readMore? info: 

      } */}
    </p>
    <button className='delete-btn'  onClick={()=>removeTour(id)} >not interested</button>

  </footer>
</article>

  </>
  )
}

export default Tourcards
