import Link from "next/link";


export default function Page () {
  return(
    <>
     <h1> hello, next.js! </h1>
     <h2> titulo 2 </h2>
     <h3> titulo 3 </h3>
     Qualquer coisa

     <Link href={'/Sobre'}> Sobre</Link>
     <Link href={'/cadusuario'}> Cadastro de usuario </Link>
    
    </>
  );
}