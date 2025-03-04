import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import Invoices from './pages/Invoices';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import projects from './projects';
const App = () => {
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
