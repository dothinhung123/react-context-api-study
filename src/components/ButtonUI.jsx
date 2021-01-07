// import React,{useContext} from 'react';
// import LanguageContext from '../contexts/LanguageContext'
// const ButtonUI =(props)=>{
// const country = useContext(LanguageContext);
// const text =country ==='english'?'Submit':"Voorlegen";
// console.log(country)
//     return(
     
//        <div>
//         <button className="ui primary">
//            {text}
//         </button>
//        </div>
//     )
// }
// export default ButtonUI

// way 2
import React,{useContext} from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext'
const ButtonUI =(props)=>{
// const country = useContext(LanguageContext);
// const text =country ==='english'?'Submit':"Voorlegen";
    return(
     
       <div>
      <ColorContext.Consumer >
      {(color)=>{   return <button className={`ui ${color} button`}>
          <LanguageContext.Consumer>
              {(value)=>value ==='english'?'Submit':"Voorlege"}
          </LanguageContext.Consumer>
        </button>}}
      </ColorContext.Consumer>
       </div>
    )
}
export default ButtonUI

