import React from "react";

function HeaderComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="/creation">
                Account Creation
              </a>
              <a className="nav-link" aria-current="page" href="/entitlement">
                Account Entitlements
              </a>
              <a className="nav-link" href="/levelOne">
                Level I Approval
              </a>
              <a className="nav-link" href="/levelTwo">
                Level II Approval
              </a>
              <a className="nav-link" href="/levelThree">
                Level III Approval
              </a>
              <a className="nav-link" href="/userAccessList">
                User Access List
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
