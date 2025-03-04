import React, { useState, useEffect } from 'react';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Invoices from './pages/Invoices';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('src/projects.json');
        setProjects(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Projects projects={projects} />} />
          <Route
            path='/projects/:id'
            element={<ProjectDetails projects={projects} />}
          />
          <Route path='/invoices' element={<Invoices />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
