import React from 'react'
import Image from 'next/image'
import campus from'@/public/img/Campus1.png'
import campus2 from'@/public/img/Campus2.png'
import campus3 from'@/public/img/Campus3.png'


export default function Take() {
  return (
    <div>
         <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="campus-col">
                <Image src={campus} alt=""/>
                <div class="layer">
                    <h3>Islamabad</h3>
                </div>
            </div>
            <div className="campus-col">
                <Image src={campus2} alt=""/>
                <div class="layer">
                    <h3>Lahore</h3>
                </div>
            </div>
            <div className="campus-col">
                <Image src={campus3} alt=""/>
                <div className="layer">
                    <h3>Faisalabad</h3>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
