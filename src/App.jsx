import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Photo from './assets/photo.jpg'
import SocialLink from './components/social-link';

 function App() {
  return (
    <div className="h-screen bg-slate-950 text-slate-100">
        <div className="flex justify-center items-center h-full">
          <div className="md:w-3/5 lg:w-2/6 xl:2/4 flex flex-col justify-center items-center space-y-4 rounded">
            <img src={Photo} className="rounded-full border-4 border-slate-100 w-2/4" />
            <h1 className="text-3xl font-bold text-slate-100">Carlos Alberto Jr</h1>
            <SocialLink href="" text="Linkedin" background="sky-800"backgroundHover="sky-900" icon={<FaLinkedin size={20}/>} />
            <SocialLink text="Instagram" background="rose-600"backgroundHover="rose-700" icon={<FaInstagram size={20}/>} />
            <SocialLink text="Github" background="slate-100"backgroundHover="slate-200" icon={<FaGithub size={20}/>} darkText/>
            <SocialLink text="Twitter" background="sky-600"backgroundHover="sky-700" icon={<FaTwitter size={20}/>} />
          </div>
        </div>
    </div>
  );
}

export default App;
