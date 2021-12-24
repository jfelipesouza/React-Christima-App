import React,{useState,createContext} from 'react'



type ContextProps = {
  isDark:Boolean;
  setDark:React.Dispatch<React.SetStateAction<Boolean>>;
  open:Boolean;
  setOpen:React.Dispatch<React.SetStateAction<Boolean>>;
}


export const Context = createContext<ContextProps>({} as ContextProps);

const ContextProvider:React.FC = ({children}) =>{

  const [isDark,setDark] = useState<Boolean>(false);
  const [open,setOpen] = useState<Boolean>(false);

  return(
    <Context.Provider value={{isDark,setDark,open,setOpen}}>

      {/* 
        Criado contexto da aplicação para mudança de tema 
        */
      }

      {children}
    </Context.Provider>

  )
};

export default ContextProvider;