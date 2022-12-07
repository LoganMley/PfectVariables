import Header from "./Header";

function HomeScreen() {
  return (
    <div className="containter">
    <h2 className="pb-2 border-bottom"></h2>
    <a id="Pricing"></a>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                 
                    <h4 className="my-0 fw-normal">Non-Fiction</h4>
                  </div>
                  <div className="card-body">
                   <h5>Starting at:</h5>
                    <h1 className="card-title pricing-card-title">100 Dhs</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>A mix of historical and informative books.</li>
                      <li>Free Delivery</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">View our digital library.</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Action and Horror</h4>
                  </div>
                  <div className="card-body">
                   <h5>Starting at:</h5>
                    <h1 className="card-title pricing-card-title">50 Dhs</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Choose from an extensive selection of action and horror titles. </li>
                      <li>Free Delivery</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">View our digital library.</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Special Offers</h4>
                  </div>
                  <div className="card-body">
                    <h5>Starting at:</h5>
                    <h1 className="card-title pricing-card-title">75 Dhs</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Exclusive online only offers.</li>
                      <li>Buy one Get one Free!</li>
                      <li>Free Delivery</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Special Offers</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
  );
}

export default HomeScreen;


