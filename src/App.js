import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import More from './views/More';

const BASE_URL = "https://api.globalgiving.org/api/public/projectservice/countries/KE/projects/active";

const App = () => {

  const [data, setData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get(`${BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&nextProjectId=${next}`);
        const newProjects = [...projects, ...response.data.projects.project];
        setData(response.data);
        setProjects(newProjects);
      } catch (err) {
        console.log(err);
      }

    }

    getProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next]);

  const loadMore = () => {
    if (data.projects.hasNext) {
      setNext(data.projects.nextProjectId)
    }
  }

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home projects={projects} loadMore={loadMore}/>
          </Route>
          <Route path="/more" component={More} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
