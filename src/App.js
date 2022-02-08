import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand me-5" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All products</a></li>
            <li><hr /></li>
            <li><a className="dropdown-item" href="#">Popular Items</a></li>
       
            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
     
      </ul>
      <form className="d-flex">
        
        <button className="btn btn-outline-dark navbtn"><ion-icon name="cart"></ion-icon>Search<span className="rollcount">0</span></button>
      </form>
    </div>
  </div>
</nav>
<div className="header bg-dark text-white">
  <div className="container-fluid">
        <h1 className="text-center hedtit">Shop in style</h1>
        <p className="textHed">With this shop hompeage template</p>
  </div>
</div>
<div className="section py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
      <div className="card text-center">
        <img src={logo} className="card-img-top"/>
  
      <div className="card-body">
        <h5 className="card-title">Fancy Product</h5>
        <p className="card-text">$40.00 - $80.00</p>
      </div>
     
      <div className="card-body">
        <a href="#" className="btn btn-outline-dark cartbtn">View options</a>
      
      </div>
    </div>
      </div>
      <div className="col-md-3">
      <div className="card text-center">
      <span class="badge bg-dark">Sale</span>
        <img src={logo} className="card-img-top"/>
  
      <div className="card-body">
        <h5 className="card-title">Special Item</h5>
        <p className="text-warning  m-0 p-0"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></p>
        <p className="card-text"><span className="text-secondary text-decoration-line-through">$20.00</span>- $18.00</p>
      </div>
     
      <div className="card-body">
        <a href="#" className="btn btn-outline-dark cartbtn">Add to cart</a>
      
      </div>
    </div>
      </div>
      <div className="col-md-3">
      <div className="card text-center">
      <span class="badge bg-dark">Sale</span>
        <img src={logo} className="card-img-top"/>
  
      <div className="card-body">
        <h5 className="card-title">Sale Item</h5>
        <p className="card-text"><span className="text-secondary text-decoration-line-through">$50.00</span>- $25.00</p>
      </div>
     
      <div className="card-body">
        <a href="#" className="btn btn-outline-dark cartbtn">Add to cart</a>
      
      </div>
    </div>
      </div>
      <div className="col-md-3">
      <div className="card text-center">
        <img src={logo} className="card-img-top"/>
  
      <div className="card-body">
        <h5 className="card-title">Popular Item</h5>
        <p className="text-warning m-0 p-0"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></p>
        
        <p className="card-text">$40.00</p>
        
      </div>
     
      <div className="card-body">
        <a href="#" className="btn btn-outline-dark cartbtn">Add to cart</a>
      
      </div>
    </div>
      </div>
    </div>

    <div className="row my-5">
    <div className="col-md-3">
      <div className="card text-center">
        <img src={logo} className="card-img-top"/>
  
      <div className="card-body">
        <h5 className="card-title">Popular Item</h5>
        <p className="text-warning m-0 p-0"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></p>
        
        <p className="card-text">$40.00</p>
        
      </div>
     
      <div className="card-body">
        <a href="#" className="btn btn-outline-dark cartbtn">Add to cart</a>
      
      </div>
    </div>
      </div>
      <div className="col-md-3">
      <div className="card text-center">
      <span class="badge bg-dark">Sale</span>
        <img src={logo} className="card-img-top"/>
  
      <div className="card-body">
        <h5 className="card-title">Special Item</h5>
        <p className="text-warning  m-0 p-0"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></p>
        <p className="card-text"><span className="text-secondary text-decoration-line-through">$20.00</span>- $18.00</p>
      </div>
     
      <div className="card-body">
        <a href="#" className="btn btn-outline-dark cartbtn">Add to cart</a>
      
      </div>
    </div>
      </div>
      <div className="col-md-3">
      <div className="card text-center">
        <img src={logo} className="card-img-top"/>
  
      <div className="card-body">
        <h5 className="card-title">Fancy Product</h5>
        <p className="card-text">$40.00 - $80.00</p>
      </div>
     
      <div className="card-body">
        <a href="#" className="btn btn-outline-dark cartbtn">View options</a>
      
      </div>
    </div>
      </div>
      <div className="col-md-3">
      <div className="card text-center">
      <span class="badge bg-dark">Sale</span>
        <img src={logo} className="card-img-top"/>
  
      <div className="card-body">
        <h5 className="card-title">Sale Item</h5>
        <p className="card-text"><span className="text-secondary text-decoration-line-through">$50.00</span>- $25.00</p>
      </div>
     
      <div className="card-body">
        <a href="#" className="btn btn-outline-dark cartbtn">Add to cart</a>
      
      </div>
    </div>
      </div>
      
    </div>
  </div>
</div>
<div className="footer bg-dark">
  <p className="text-white py-5 text-center">Copyright © Your Website 2021</p>
</div>
    </div>
  );
}

export default App;
