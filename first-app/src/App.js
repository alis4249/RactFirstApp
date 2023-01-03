// // import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// const App=()=> {
//   const [positionY, setPositionY] = useState(25)
//   const[positionX, setPositionX] = useState(25)

//   return (
//     <div className='position'>
//     <button onClick={()=>setPositionX(250)}>Right</button>
//     <button onClick={()=>setPositionX(-250)}>Left</button>
//     <button onClick={()=>setPositionY(5)}>up</button>
//     <button onClick={()=>setPositionY(250)}>down</button>
  

//     <div style={{
//       backgroundColor: 'blueviolet',
//       padding: '40px',
//       width: '40px',
//       background:'brown',
//       marginTop:positionY+'px',
//       marginLeft:positionX+'px'
      
//     }}>
// </div>
//     </div>
//   ) ;
// }

// export default App;

import './App.css';
import React, { useState } from 'react';

// const App=()=> {
//  const [positionY, setPositionY] = useState(300)
//  const [positionX, setPositionX] = useState(500)
//   const moveX = (action)=> {
//     setPositionY(300)
//       if(action==='left'){
//         setPositionX(300)
//       }else if(action==='right'){
//         setPositionX(700)
//       }
//   }

//   const moveY = (action)=> {
//     setPositionY(300)
//     if(action==='up'){
//       setPositionY(100)
//     }else if(action==='down'){
//       setPositionY(500)
//     }
// }
//   return (
//     <>
//     <button onClick={()=>moveX('left')}>left</button>
//     <button onClick={()=>moveX('right')}>right</button>
//     <button onClick={()=>moveY('up')}>up</button>
//     <button onClick={()=>moveY('down')}>down</button>
//     <div style={{
//       backgroundColor: 'red',
//        padding: '32px',
//       width:'30px',
//       marginTop: positionY+'px',
//       marginLeft: positionX+'px'
//     }}>
//     </div>
//     </>
//   );
// }
const App =()=>{
  const[backgroundColor, setbackgroundColor]=useState('yellow')
  const[widthSize, setWithSize]=useState(10)
  const[margin, setMargin]=useState(5)
  return (
    <div>
    <div style={{
      backgroundColor: backgroundColor,
      width: widthSize+'vw',
      height:'100px',
      marginTop:margin+'px'
    }}>
    </div>
    
    <input onKeyUp={(e)=>setbackgroundColor(e.target.value)} placeholder="color"/>
    <input onKeyUp={(e)=>setWithSize(e.target.value)} placeholder="size in px"/>
    <input onKeyUp={(e)=>setMargin(e.target.value)}placeholder="Margin in px"></input>
    </div>
  );
}
export default App;

