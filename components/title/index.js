import React from 'react'

export default function index() {
    return (
        <div className="position-absolute w-100 px-2 pb-1" style={{bottom:'50px'}}>
            <div className="mb-1">
                <span className="text-white" style={{fontSize:'16px',fontWeight:'bold'}}>@SUPAKIT_BOAT</span>
            </div>
            <div className="d-flex w-100">
                <div className="w-100">
                    <span className="text-white pb-2" style={{fontSize:'16px',fontWeight:'bold'}}>#ติดตามได้ที่.....</span>
                    <div className="d-flex mt-1">
                        <div className="px-1">
                            <img src="/img/mu2.png" style={{width:'23px'}} />
                        </div>
                        <div className="w-100">
                            <span className="text-white" style={{fontSize:'16px'}}>เสียงต้นฉบับ - เพลงที่ทดสอบ </span>
                        </div>

                    </div>
                </div>   
                <div className="p-1">
                    <img src="/img/mu1.png" style={{width:'50px'}} />    
                </div> 
            </div>
            
        </div>
    )
}
