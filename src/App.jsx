import logo from './logo.svg';
import './App.css';
import Web from './Components/web';
import Student from './Components/StudentsInfor/StudentMap';
import Students from './Components/StudentsInfor/StudentsInfor';
import ImageCard from './Components/ImageCard/ImageCard';
import SignIn from './Components/SignInBootstrap/SignInBootstrap';

function App(){
  return(
    <>
     <Web/>
     <Student/>
     <ImageCard/>
     <SignIn/>
    </>
  )
}
  

export default App;
