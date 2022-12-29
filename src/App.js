import './App.css';
import { Tabs, Avatar} from 'flowbite-react';
import Skills from './Skills';
import Edu from './Edu';
import Work from './Work';
import Profile from './Profile';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <div className="container mx-auto px-4">
     <Avatar
  img="MD-LinkedIn-Profile.jpg"
  rounded={true} size="lg"
>
  <div className="space-y-1 font-medium dark:text-white">
    <div>
      Maciej Dmytrow
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400">
      Frontend Developer
    </div>
  </div>
</Avatar>
     <Tabs.Group
  aria-label="Tabs with underline"
  style="underline"
>
  <Tabs.Item title="Contact Details">
    <Contact />
  </Tabs.Item>
  <Tabs.Item active={true} title="Profile">
  <Profile />
  </Tabs.Item>
  <Tabs.Item title="Education & Cert">
    <Edu />
  </Tabs.Item>
  <Tabs.Item title="Technical Skills & Software Stack">
  <Skills />
  </Tabs.Item>
  <Tabs.Item title="Work Experience">
    <Work />
  </Tabs.Item>
</Tabs.Group>
    </div>
    </div>
  );
}

export default App;
