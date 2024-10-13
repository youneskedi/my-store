import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage=34;

export default function Home(){
 const[contproudect , setcontproudect]=useState([]);
    const getcoutproudect=async()=>{
        const res=await fetch('http://127.0.0.1:8000/api/countproudect')
      if(res.ok){
        const response=await res.json();
       setcontproudect(response.data);
    
      }
    }   
    //countorders
    const[order, setorder]=useState([]);
        
    const getcountorder=async()=>{
      const res=await fetch('http://127.0.0.1:8000/api/countorders')
    if(res.ok){
      const response=await res.json();
     setorder(response.data);
  
    }}
    //count user
    const[user , setuser]=useState([]);
        
    const getuser=async()=>{
      const res=await fetch('http://127.0.0.1:8000/api/countUser')
    if(res.ok){
      const response=await res.json();
     setuser(response.data);
  
    }
  else{
  //   appcontext.ShowPopup("faled to server")
  }}
    useEffect(()=>{
      getuser()
      getcoutproudect()
      getcountorder()
    },[]) ///

 
 return (
    <div >
      {  (
        <>

<div style={{ width: '100px', height: '100px' }}> 
<CircularProgressbar className="circle"
  value={user}
  
  text={'user'+`${user}`}
  
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, ${user / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
    
  })}
/>;</div>


<div style={{ width: '100px', height: '100px' }}> 
<CircularProgressbar value={contproudect} text={'pr'+`${contproudect}%`} />;
    </div>
    <div style={{ width: '100px', height: '100px' }}> 
<CircularProgressbar value={order} text={'order'+`${order}`} />;
    </div>
    

        </>
      )}
    </div>
  );
  }