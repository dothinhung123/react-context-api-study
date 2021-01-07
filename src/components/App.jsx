import React,{useState} from 'react';
import UserCreate from './UserCreate.jsx';
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext.js';
const App=()=>{
    const [language, setLanguage] = useState('english');
    const [color, setColor]       = useState('green')
    const onlanguagechange =(language,color)=>{
        setLanguage(language);
        setColor(color)
    }
    return(
        <div className ="ui container">
            <div>
                Select a language:
                <i className="flag us" onClick={()=> onlanguagechange('english','green')} />
                <i className="flag nl"  onClick={()=> onlanguagechange('dutch','blue')}/>
                <div>{language}</div>
                
            </div>
            <LanguageContext.Provider value={language}>
                <ColorContext.Provider value={color}>
                        <UserCreate></UserCreate>
                </ColorContext.Provider>
            </LanguageContext.Provider>
            

        </div>
    )
}
export default App