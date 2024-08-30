import { useForm } from "../../hooks/useForm"

const registro = {
    nombre: '',
    email: '',
    password: ''
}

export const Registro = () => {
 

    const { nombre, email, password, onInputChange } = useForm(registro);
    const nombreValido = nombre.length > 1 ? 'Nombre Valido' : 'Nombre Incomplento'
    const esValido = email.includes('@') ? 'Email valido' : 'No valido'
    const pasValido = password.length > 6 ? 'Contraseña Valido' : 'Contraseña No Valida'

    const onSubmitLogin = (e) => {
        e.preventDefault();
        
        console.log({nombre, email, password});
    }

    
  return (
    <>
        <div className="container-form" >
          <form className="sign-up" onSubmit={ onSubmitLogin }>
            <h2>Registrarse</h2>
            <div className="social-networks">
              <ion-icon name="logo-facebook" />
              <ion-icon name="logo-twitter" />
              <ion-icon name="logo-instagram" />
              <ion-icon name="logo-google" />
            </div>
            <span>Use su correo electrónico para registrarse</span>
            <div className="container-input">
              <ion-icon name="person-outline" />
              <input 
                type="text" 
                placeholder="Nombre"
                name="nombre"
                value={ nombre }
                onChange={ onInputChange }/>
            </div>
            <div className="container-input">
              <ion-icon name="mail-outline" />
              <input 
                type="text" 
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputChange } />
            </div>
            <div className="container-input">
              <ion-icon name="lock-closed-outline" />
              <input 
                type="password" 
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputChange } />
            </div>
            <button className="button" >REGISTRARSE</button>
          </form>
        </div>
    </>
  )
}
