
import Link from "next/link";

export default function ListaUsuarios () {
    return (
        <>
            <h1> Usuarios </h1>
            <p> Usuarios1 </p>
            <p> Usuarios2 </p>
            <p> Usuarios3 </p>


            <li><Link href={'/'}> voltar</Link></li>

        </>
    );
}