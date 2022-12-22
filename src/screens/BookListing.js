import * as React from 'react';


function addCart() {
  alert("Added succesfully")
}


function BookListing(props) {
  return (


    <div class="row row-cols-1 row-cols-md-4 g-4 mt-3 ms-3 me-3">
    <div class="col">
      <div class="card h-100">
        <img src="https://res.cloudinary.com/dd0ratk2q/image/upload/v1671701077/The-Hobbit-Book-Cover-441x600_bzu7m3.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">The Hobbit</h5>
          <p class="card-text">J.R.R Tolkein</p>
          <button onClick="cartAdd()" type="button" class="btn btn-primary btn-sm px-4 me-md-2">Add to Cart</button>
        </div>
        <div class="card-footer">
          <small class="text-muted">30 AED</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://res.cloudinary.com/dd0ratk2q/image/upload/v1671701077/The-Godfather_h4770x.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">The Godfather</h5>
          <p class="card-text">Mario Puzo</p>
          <button type="button" class="btn btn-primary btn-sm px-4 me-md-2">Add to Cart</button>
        </div>
        <div class="card-footer">
          <small class="text-muted">45 AED</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://res.cloudinary.com/dd0ratk2q/image/upload/v1671701077/The-Invisible-Man_xs3apx.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">The Invisible Man</h5>
          <p class="card-text">Ralph Ellison</p>
          <button type="button" class="btn btn-primary btn-sm px-4 me-md-2">Add to Cart</button>
        </div>
        <div class="card-footer">
          <small class="text-muted">20 AED</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://res.cloudinary.com/dd0ratk2q/image/upload/v1671701077/Pyscho_kotzf0.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Psycho</h5>
          <p class="card-text">Robert Bloch</p>
          <button type="button" class="btn btn-primary btn-sm px-4 me-md-2">Add to Cart</button>
        </div>
        <div class="card-footer">
          <small class="text-muted">32 AED</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://res.cloudinary.com/dd0ratk2q/image/upload/v1671701077/ClockWorkOrange_ds56ge.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Clockwork Orange</h5>
          <p class="card-text">Anthony Burgess</p>
          <button type="button" class="btn btn-primary btn-sm px-4 me-md-2">Add to Cart</button>
        </div>
        <div class="card-footer">
          <small class="text-muted">12 AED</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://res.cloudinary.com/dd0ratk2q/image/upload/v1671701077/Jurassic-Park_vmsl8q.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Jurassic Park</h5>
          <p class="card-text">Michael Crichton</p>
          <button type="button" class="btn btn-primary btn-sm px-4 me-md-2">Add to Cart</button>
        </div>
        <div class="card-footer">
          <small class="text-muted">42 AED</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://res.cloudinary.com/dd0ratk2q/image/upload/v1671701076/The-Great-Gatsby_ncxcds.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">The Great Gatsby</h5>
          <p class="card-text">F.Scott Fitzgerald</p>
          <button type="button" class="btn btn-primary btn-sm px-4 me-md-2">Add to Cart</button>
        </div>
        <div class="card-footer">
          <small class="text-muted"> 32 AED</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://res.cloudinary.com/dd0ratk2q/image/upload/v1671701076/BondCasinoRoyale_rqxzv3.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Casino Royala</h5>
          <p class="card-text">Ian Fleming</p>
          <button type="button" class="btn btn-primary btn-sm px-4 me-md-2">Add to Cart</button>
        </div>
        <div class="card-footer">
          <small class="text-muted">64 AED</small>
        </div>
      </div>
    </div>
  </div>
  
  );
}

function cartAdd() {
  alert("Added Successfully");
}

export default BookListing;

