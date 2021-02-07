import React from 'react'

export default function index() {
    return (
        <div className="position-absolute" style={{top:'0px',width:'100%'}}>
            <div className="d-flex justify-content-between">
                <div className="d-flex w-100 justify-content-between p-3 pt-2 align-items-center">
                    <div>
                        <img src="/img/menu1.png" style={{width:'40px'}} />
                    </div>
                    <div>
                        <span style={{fontWeight:'bold',color:'#797979'}}>การติดตาม</span>
                    </div>
                </div>
                <div className="d-flex w-100 p-3 pt-2 align-items-center">
                    <span style={{fontWeight:'bold'}} className="text-white ">สำหรับคุณ</span>
                </div>
            </div>
        </div>
    )
}
