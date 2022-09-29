import { Children, useState } from 'react';
import '../assets/styles/caja.css'
import Pagina2 from './Pagina2';

function Caja() {
    const [users, setUsers] = useState([]);

    return (
        <div className="caja">
            <h2>Sign Up</h2>
            <h2 className='ban'>Crear cuenta para acceder a los cursos</h2>
            <div className='info'>
                <form onSubmit={
                    ev => {
                        ev.preventDefault();
                        const newUser = {
                            name: ev.target.nombre.value,
                            lastName: ev.target.apellido.value,
                            edad: ev.target.edad.value,
                            userName: ev.target.userName.value,
                            pass: ev.target.pass.value,
                            email: ev.target.email.value,
                            profile: ev.target.profile.value,
                            nivel: ev.target.nivel.value,
                        }
                        alert('datos guardados');
                        setUsers([...users, newUser]);
                    }
                }>
                    <input type="text" placeholder='* Nombres:' autoComplete='off' name='nombre'/>
                    <input type="text" placeholder='* Apellidos' name='apellido'/>
                    <input type="number" placeholder='* Edad' name='edad'/>
                    <input type="text" placeholder='* Nombre de usuario' name='userName' />
                    <input type="password" placeholder='* contraseña' name='pass'/>
                    <input type="email" placeholder='* Correo electronico' name='email'/>
                    <select name="profile" id="profile">
                        <option value="empresa">Empresa</option>
                        <option value="estudiante">Estudiante</option>
                    </select>
                    <select name="nivel" id="nivel">
                        <option value="uno">Nivel principiante</option>
                        <option value="dos">Nivel intermedio</option>
                        <option value="tres">Nivel avanzado</option>
                    </select>
                    <input type="submit" className='enviar' id='enviar' />
                    {console.log(users)}
                </form>
                
            </div>
        </div>
     );
}

export default Caja;