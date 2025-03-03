import Projects from './Projects';
import Layout from './components/Layout';
const projects = [
  {
    id: 1,
    projectName: 'Web Hosting',
    status: 'Active',
  },
  {
    id: 2,
    projectName: 'Web page',
    status: 'Active',
  },
  {
    id: 3,
    projectName: 'Cloud Service',
    status: 'Inactive',
  },
  {
    id: 4,
    projectName: 'App development',
    status: 'Active',
  },
  {
    id: 5,
    projectName: 'Project Mgmt',
    status: 'Inactive',
  },
];
const App = () => {
  return (
    <Layout>
      <div className='text-center  p-4'>
        <Projects projects={projects} />
      </div>
    </Layout>
  );
};

export default App;
