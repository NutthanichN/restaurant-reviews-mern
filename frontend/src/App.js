import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Login from "./components/login";
import RestaurantsList from "./components/restaurants-list";
import Restaurant from "./components/restaurants";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      {/* nav bar section from bootstrap */}
      <nav className="navbar navbar-expend navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/restaurants" className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {
              user ? (
                <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                  Logout {user.name}
                </a>
              ) : (
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              )
            }
          </li>
        </div>
      </nav>

      {/* router section */}
      {<div className="container mt-3">
        <Routes>
          <Route path="/" element={<RestaurantsList/>} />
          <Route path="/restaurants" element={<RestaurantsList/>} />
          <Route path="/restaurants/:id/review" element={
            <AddReview props user={user} />
          }/>
          <Route path="/restaurants/:id" element={
            <Restaurant props user={user} />
          }/>
          <Route path="/login" element={
            <Login props login={login}/>
          }/>
        </Routes>
      </div>}
    </div>
  );
}

export default App;
