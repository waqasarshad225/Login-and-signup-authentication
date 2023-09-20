import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <>
    <div className='container'>
    <img src="./images/Home.png" alt="" />
        <h1>Mobile Phones</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="./images/card-img.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Rs $1599</h5>
        <a href="/"><FontAwesomeIcon icon="fa-regular fa-thumbs-up" /></a>
        <p class="card-text">The iPhone 15 Pro Max is shaping up to be quite the leap in comparison with the iPhone 14 Pro Max, with multiple new features that will remain exclusive to the largest and most expensive upcoming iPhone.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src="./images/card-img.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Rs $1599</h5>
        <p class="card-text">The iPhone 15 Pro Max is shaping up to be quite the leap in comparison with the iPhone 14 Pro Max, with multiple new features that will remain exclusive to the largest and most expensive upcoming iPhone.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src="./images/card-img.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Rs $1599</h5>
        <p class="card-text">The iPhone 15 Pro Max is shaping up to be quite the leap in comparison with the iPhone 14 Pro Max, with multiple new features that will remain exclusive to the largest and most expensive upcoming iPhone.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src="./images/card-img.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Rs $1599</h5>
        
        <p class="card-text">The iPhone 15 Pro Max is shaping up to be quite the leap in comparison with the iPhone 14 Pro Max, with multiple new features that will remain exclusive to the largest and most expensive upcoming iPhone.</p>
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Home