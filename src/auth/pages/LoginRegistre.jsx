import { useState } from "react"
import { Bienvenido, Login, Registro } from "../pages";



export const LoginRegistre = () => {

  const [isToggled, setIsToggled] = useState(false);
  
  const handleToggle = () => {
    setIsToggled(prev => !prev);
  };
  
  return (
    <>
      <div 
        className={`container ${ isToggled ? 'toggle' : ''}`}
        >
        {/* INICIAR SESION */}
        <Login />
 

        {/* Registrarse */}
        <Registro />

        {/* Bienvenido VitalSave */}
        <Bienvenido 
          isToggled={ isToggled }
          handleToggle={ handleToggle}/>
      </div>
    </>
  )
}
