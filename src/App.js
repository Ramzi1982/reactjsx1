
import './style.css';
import Img2 from './img2.jpg'




function App() {
  return (
    <div
       style={{border:"solid 1px noir",maxWidth:"100vw"}}>

<h1 className="title red">رمضان كريم</h1>

<br/>

<img className='imageInSrc' src={Img2} alt="Allah"/> 

<br/>
<h1 className="title red">كل عام و انتم بخير</h1>

<img className='imageInPublic' src='/img1.jpg' alt="Muhamed"/>

<video width="350" height="280" controls className='video'>

  <source src="/maVideo.mp4" type="video/mp4"/></video>

  </div>










    
    
  );
}

export default App;
