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
    },
    isOnline: true
  },
  {
    name: 'Bob Durand',
    image: 'https://i.pravatar.cc/150?u=bob',
    description: 'Architecte Backend, passioné par les microservices.',
    socialNetworks: {
      linkedin: 'https://www.linkedin.com/in/bob-durand/',
      github: 'https://github.com/bob'
    },
    isOnline: false
  },
  {
    name: 'Claire Petit',
    image: 'https://i.pravatar.cc/150?u=claire',
    description: 'Designer UI/UX, transforme des idées complexes en interfaces simples.',
    socialNetworks: {
      linkedin: 'https://www.linkedin.com/in/claire-petit/',
      github: 'https://github.com/claire'
    },
    isOnline: true
  },
  
];
function App() {
  return (
    <div className='app-container'>
      <h1 className='app-title'>Mon équipe</h1>
      <div className='profiles-containers'>
        {
          users.map(user => (<ProfileCard key={user.name} name={user.name} image={user.image} description={user.description} socialNetworks={user.socialNetworks} isOnline={user.isOnline} />))
        }
      </div>
   </div>
  );
}

export default App;
