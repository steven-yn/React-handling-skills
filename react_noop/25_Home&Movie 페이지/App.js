import React, { useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie) => {
        return (
          <Movie
            movie={movie}
            //
            key={movie.id}
            //
            removeMovie={removeMovie}
          />
        );
      })
    : "추가된 영화가 없습니다.";

  const addMovie = (movie) => {
    // MovieForm 컴포넌트로 props를 통해 보내줌.
    setMovies([
      // 추가하려는 정보를 객체에 담아 업데이트
      ...movies,
      movie,
    ]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/movies">
              <h1>Movie list</h1>
              <MovieForm addMovie={addMovie} />
              {/* MovieForm 컴포넌트로 addMovie={addMovie} props 보내기 */}
              {renderMovies}
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/" exact>
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
