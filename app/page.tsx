import Link from "next/link";


export default function Page () {
  return(
    <>
     <h1> hello, next.js! </h1>
     <h2> titulo 2 </h2>
     <h3> titulo 3 </h3>
     

     <ul>

     <li><Link href={'/Sobre'}> Sobre</Link></li>
      <li><Link href={'/Usuarios/cadusuario'}> Cadastro de usuario </Link></li>
      <li><Link href={'/Usuarios'}> listar usuarios </Link></li>

     </ul>

     
    
    </>
  );
}