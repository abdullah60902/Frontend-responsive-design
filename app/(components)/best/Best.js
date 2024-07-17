import React from 'react'
import Image from 'next/image'
import course1 from '@/public/img/course1.png'
import course2 from '@/public/img/course2.png'
import course3 from '@/public/img/course3.png'


export default function Best() {
  return (
    <div>
            <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <div class="facilities-col">
                <Image src={course1} alt=""/>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div class="facilities-col">
                <Image src={course2} alt=""/>
                <h3>Artificial Intelligence</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div class="facilities-col">
                <Image src={course3} alt=""/>
                <h3>Data Science</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>

    </div>
  )
}
