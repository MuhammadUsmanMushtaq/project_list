import React, { useState, useEffect } from 'react';
import Projects from './pages/Projects';
import Layout from './components/Layout';
import { BsArrowRepeat } from 'react-icons/bs';
import axios from 'axios';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('projects.json');
        setProjects(response.data);
      } catch (err) {
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center mt-16 flex-col h-screen'>
        <BsArrowRepeat className='animate-spin text-[#63a27a]' size={64} />
        <p> Loading . . .</p>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <Projects projects={projects} />
    </Layout>
  );
};

export default App;
