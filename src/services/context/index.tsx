import React,{useState,createContext} from 'react'



type ContextProps = {
  isDark:Boolean;
  setDark:React.Dispatch<React.SetStateAction<Boolean>>;
}


export const Context = createContext<ContextProps>({} as ContextProps);

const ContextProvider:React.FC = ({children}) =>{

  const [isDark,setDark] = useState<Boolean>(false);

  return(
    <Context.Provider value={{isDark,setDark,}}>

      {/* 
        Criado contexto da aplicação para abertura
        e fechamento da sidebar 
        */
      }

      {children}
    </Context.Provider>

  )
};

export default ContextProvider;