import React from 'react'
import {useForm} from "react-hook-form"

const AddUserForm = (props) => {
    //Mediante el props, estoy recibiendo lo que me deja la funcion AddUser
   const {register, errors, handleSubmit}= useForm()
   //La info pasada en el input, se almacena en data y lo agrego al array de usuarios mediante addUser
   const onSubmit = (data, e) =>{
    console.log(data)

    props.addUser(data)

    e.target.reset()
   } 


    return ( 
        //el handle submit valida el contenido del input antes de hacer el submit 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={register({ required:{value: true, message:"Campo requerido" } })} />
            <div>
                {
                // En el caso de que sea incorrecto el input ingresado, se mostrará el message de error 
                errors?.name?.message
                }
            </div>
            <label>Username</label>
            <input type="text" name="username" ref={register({ required: {value: true, message: "Campo requerido"} })} />
            <div>
                {errors?.username?.message}
            </div>
            <button className="btn btn-outline-primary">Add new user</button>
        </form>
     );
}
 
export default AddUserForm;
