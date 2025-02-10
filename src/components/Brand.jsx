// import React from 'react'

const Brand = () => {
  return (
    <main className="brand">
      <div className="brand-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p> YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="brand-btn">
          <button>SHOP NOW</button>
          <button className="secondary-btn">CATEGORY</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="brand-image">
        <img src="images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  )
}

export default Brand