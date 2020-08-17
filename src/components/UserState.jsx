import React from 'react'

//llamamos a los props (usersdata) para traerlos a la tabla. Trato de pasar informacion del elemento padre al
//elemento hijo
const UserTable = (props) => {

    console.log(props.users)

    return(
        <table className="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {   //en el boton de editar, paso la funcion editRow junto con el objeto user para activar el modo editar
            //si los campos de user tienen una extension mayor a 0, inserto la informacion. Si es cero, muestro en la pantalla "No users"
            props.users.length > 0 ? (
                props.users.map(user => (
                    
                        <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username} </td>
                        <td>
                            <button className="btn btn-outline-success" onClick= {()=>{props.editRow(user)}}>Edit</button>
                            <button className="btn btn-outline-danger ml-1" onClick={()=>{props.deleteUser(user.id)}}>Delete</button>
                         </td>
                        </tr>
                    
                ) )
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )
            //itero sobre cada elemento de los users  
        }
      
    </tbody>
  </table>
    )
}

    


export default UserTable