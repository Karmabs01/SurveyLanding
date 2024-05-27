import logo from "../../../src/img/logo/Logo-opacity.png";

function ChildComponent() {

  return (
    <header className="header">
    <div className="navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html"
                ><img src={logo} alt="Logo"
              /></a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}

export default ChildComponent;
