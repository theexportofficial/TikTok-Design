import React from 'react'

export default function index() {
    return (
        <div className="position-absolute h-100 p-2 d-flex align-items-center" style={{right:'0'}}>
           <div>
               <div className="text-center mb-3">
                    <div className="position-relative img-profile">
                        <img src="/img/pro1.jpg" style={{width:'50px',height:'50px' ,borderRadius:"50%",objectFit:'cover'}} />
                        <img src="/img/ph1.png" className="position-absolute " style={{width:'20px',bottom:'-8px'}} />
                    </div>
               </div>
                <div className="text-center mb-3">
                    <img src="/img/h1.png" style={{width:'35px'}} />
                    <p className="m-0 text-white" style={{fontSize:'12px'}}>50.3K</p>
                </div> 
                <div className="text-center mb-3">
                    <img src="/img/m1.png" style={{width:'35px'}} />
                    <p className="m-0 text-white" style={{fontSize:'12px'}}>505</p>
                </div>
                <div className="text-center mb-3">
                    <img src="/img/ch1.png" style={{width:'35px'}} />
                    <p className="m-0 text-white" style={{fontSize:'12px'}}>50</p>
                </div>    
           </div>
           
        </div>
    )
}
