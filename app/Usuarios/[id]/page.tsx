
import Link from "next/link";

export default function PerfilUsuario({params}) {
    return (
        <>
            <h1> Perfil </h1>
            <p> Nome usuario </p>


            <li><Link href={'/Usuarios'}> voltar</Link></li>

        </>
    );
}