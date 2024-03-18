
import Link from "next/link";

export default function PerfilUsuario({params}: {params: {id:string}}) {
    return (
        <>
            <h1> Perfil </h1>
            <p> Nome usuario {params.id} </p>


            <li><Link href={'/Usuarios'}> voltar</Link></li>

        </>
    );
}