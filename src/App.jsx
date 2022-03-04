import React from "react";
import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from  "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/movie">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}