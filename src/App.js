import './App.css';
import ProfileCard from './ProfileCard';

const users = [
  {
    name: 'Alice Martin',
    image: 'https://i.pravatar.cc/150?u=alice',
    description: 'Dévelopeuse frontend spécialisée en React et amatrice de café',
    socialNetworks: {
      linkedin: 'https://www.linkedin.com/in/alice-martin/',
      github: 'https://github.com/alice'
    }
  },
  {
    name: 'Bob Durand',
    image: 'https://i.pravatar.cc/150?u=bob',
    description: 'Architecte Backend, passioné par les microservices.',
    socialNetworks: {
      linkedin: 'https://www.linkedin.com/in/bob-durand/',
      github: 'https://github.com/bob'
    }
  },
  {
    name: 'Claire Petit',
    image: 'https://i.pravatar.cc/150?u=claire',
    description: 'Designer UI/UX, transforme des idées complexes en interfaces simples.',
    socialNetworks: {
      linkedin: 'https://www.linkedin.com/in/claire-petit/',
      github: 'https://github.com/claire'
    }
  },
  
];
function App() {
  return (
    <div className='app-container'>
      <h1 className='app-title'>Mon équipe</h1>
      <div className='profiles-containers'>
        <ProfileCard name={users[0].name} image={users[0].image} description={users[0].description} socialNetworks={users[0].socialNetworks} />
        <ProfileCard name={users[1].name} image={users[1].image} description={users[1].description} socialNetworks={users[1].socialNetworks} />
        <ProfileCard name={users[2].name} image={users[2].image} description={users[2].description} socialNetworks={users[2].socialNetworks} />
      </div>
   </div>
  );
}

export default App;
