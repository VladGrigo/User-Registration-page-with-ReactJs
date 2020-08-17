import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from "./components/UserState"
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from "./components/AddUserForm"
import EditUserForm from "./components/EditUserForm"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Inicio from "./components/Inicio"


function App() {

  //Tabla de users y username 

    const usersData = [
      {id: uuidv4() , name: "Veronica", username: "vero69"},
      {id: uuidv4() , name: "Agustin", username: "agu94"},
      {id: uuidv4() , name: "Cristian", username: "cristian64"}
      
    ]

    const [users, setUsers]= useState(usersData);

  // Agregar usuarios 

    const addUser= (user)=> {
      user.id=uuidv4()
      setUsers([...users, user])
    }

  //Eliminar usuarios 
  
    const deleteUser= (id) =>{
      console.log(id)
      setUsers(users.filter(user=> user.id !== id))
    }

  //Editar usuarios

    //lo utilizamos si el modo "editar" esta activo o no 
  const[editing, setEditing]=useState(false)
    //para agregar el perfil editado, necesitamos un estado vacio 
  const initialFormState = { id: null, name: '', username: '' }
    //necesitamos ver y editar que perfil elegimos. Por eso aplicamos el user vacio a un currentuser
  const [currentUser, setCurrentuser] = useState(initialFormState)
    //cuando el edit es seleccionado sobre un perfil, deberia aparecer el modo "editar". A esta funcion la pasamos a UserState
  const editRow= (user) =>{
    setEditing(true)
    setCurrentuser({
      id:user.id, name: user.name, username: user.username
    })
  }
    //cuando ya editamos, vuelve la ventana de agregar usuario y se mapea el array de usuarios. Si el id de usuarios del array es igual al nuevo, actualizamos la fila del perfil 
  const updateUser =(id, updatedUser) =>{
    setEditing(false)
    setUsers(users.map(user=>(user.id === id ? updatedUser: user)))
  }
  return (
    <Router>
      <Switch>
        <Route path="/crudapp" exact>
          <div className="container-two">
              <div className="btn-group mt-5">
                <Link to="/" className="btn btn-dark">Inicio</Link>
              </div>
              <hr />
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
              <div className="flex-large">
                
                {
                  editing ? (
                    <div>
                      <h1>Edit User</h1>
                      <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
                    </div>
                  ) : (
                    <div>
                      <h1>Add user</h1>
                      <AddUserForm addUser={addUser} />
                    </div>
                  
                  )
                }
              </div>
              <div className="flex-large">
                <h2>View users</h2>
                <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
              </div>
            </div>
          </div>
        </Route> 
        <Route path="/">
            <Inicio/>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
