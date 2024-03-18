
import Link from "next/link";

export default function ListaUsuarios () {
    return (
        <>
            <h1> Usuarios </h1>
            <p> <Link href={'/Usuarios/1'}> Usuarios1</Link> </p>
            <p> <Link href={'/Usuarios/2'}> Usuarios2 </Link> </p>
            <p> <Link href={'/Usuarios/3'}> Usuarios3 </Link> </p>

            <li><Link href={'/'}> voltar</Link></li>

        </>
    );
}