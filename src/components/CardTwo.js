import React from 'react'
const CardTwo = () => {
  return (
    
    <div>
       <div className="container py-4">
 <div className="container-head  ">
 <h1 className='t1 heading-text'>Team Member</h1>  
  <p>Dedicated Team Behind The Scene</p>
     </div> 
 <div className="row row-cols-1 row-cols-md-3 g-4">
 <div className="col pe-3"  data-aos="flip-left">
     <div className="card h-100">
       <img src="/images/1.png" className="card-img-top" alt="..." />
       <div className="card-footer">
                 <small className="text-muted d-flex justify-content-center">Ayesha Maqbool</small>
       </div>
     </div>
   </div>
   <div className="col pe-3"  data-aos="flip-left">
     <div className="card h-100">
       <img src="/images/2.png" className="card-img-top" alt="..." />
    
      <div className="card-footer">
        <small className="text-muted d-flex justify-content-center">Dilawaiz Mustafa</small>
       </div>
     </div>
   </div>
   <div className="col pe-3"  data-aos="flip-left">
     <div className="card h-100">
       <img src="/images/3.png" className="card-img-top" alt="..." />
     
       <div className="card-footer">
       <small className="text-muted d-flex justify-content-center">Rukhsana Kausar</small>
       </div>
     </div>
   </div>
 </div>
</div> 
    </div>
  )
}

export default CardTwo
