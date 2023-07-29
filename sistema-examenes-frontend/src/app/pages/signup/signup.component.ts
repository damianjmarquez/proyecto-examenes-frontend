import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit    {

  public user = {
    username : "",
    password : "",
    nombre : "",
    apellido : "",
    email : "",
    telefono : ""
  }
  constructor(private userService:UserService, private snack:MatSnackBar){}

  ngOnInit(): void {
   
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username ==""|| this.user.username == null){
      this.snack.open("el nombre de usuario es requerido","aceptar",{
        duration :3000,
        verticalPosition: "top",
        horizontalPosition:"right"
      });
      return;
    }
    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire("Usuario Guardado", "usuario registrado con exito en el sistema","success")
      },(error) =>{
        console.log(error)
        this.snack.open("Ocurrio un error en el sistema","aceptar",{
          duration :3000,
          
        });
      }
    )
  }

  
}
