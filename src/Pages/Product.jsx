import React from 'react'

export const Product = () => {
  return (
    <div>
     <div id="carouselExampleAutoplaying" class="carousel slide pt-20px" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./image1.jpg" class="d-block w-300px" height="400px" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./image3.jpg" class="d-block w-300" height="400px"alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./image4.jpg" class="d-block w-300" height="400px" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./image2.jpg" class="d-block w-300" height="400px" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./image5.jpg" class="d-block w-300" height="400px" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
  )
}

export default Product
