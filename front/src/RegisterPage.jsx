import { useState } from "react"

   const RegisterPage = () => {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    const [error, setError] = useState(false)
    const [alerta, setAlerta] = useState("")


    const validarRegister = (e) => {
        e.preventDefault()
        setAlerta("")
        if (!usuario.trim() || !password.trim() || !repassword.trim()) {
            setError(true)
            setAlerta("Todos los datos son obligatorios")
            return
        }
          if (password.trim() !== repassword.trim()) {
            setError(true)
            setAlerta("Las contraseñas no coinciden")
            return
        }
        if (password.trim().length < 6 && repassword.trim().length < 6) {
        setError(true)
        setAlerta("La contraseña debe tener al menos 6 caracteres")
        return
    }
          const registered = { usuario: usuario.trim(), password: password.trim() }
            localStorage.setItem('registeredUser', JSON.stringify(registered))

          setError(false)
          setAlerta("Registro Exitoso")
          setUsuario('')
          setPassword('')
          setRepassword('')
    }
  return (
     <form onSubmit={validarRegister}>
    <div className="RegisterPage">
        {alerta && (error ? <p className="error">{alerta}</p> : <p className="check">{alerta}</p>)}
        <label>Nombre Usuario</label>
    <input type="text" name="usuario" onChange={(e) => setUsuario(e.target.value)} value={usuario}/>
    <label>Contraseña</label>
    <input type="password" name="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}/>
    <label>Repita Contraseña</label>
    <input type="password" name="RepitaContraseña" onChange={(e) => setRepassword(e.target.value)} value={repassword}/>
    <button type="submit">Enviar</button>
    </div>
    </form>
  )
}

export default RegisterPage;