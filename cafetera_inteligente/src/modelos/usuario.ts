export class Usuario {
    constructor(
		public idUsuario: number,
		public login: String,
	    public password: String,
	    public nombres: String,
	    public apellidos: String,
		public rol: String
    ) {  }  
}