import * as React from 'react';


function ProductScreen(props) {
  return (
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={props.image} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">{props.header}</h1>
        <p class="lead">{props.desc}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">{props.buttonOne}</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">{props.buttonTwo}</button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default ProductScreen;