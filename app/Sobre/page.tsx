
import Link from "next/link";

export default function Sobre() {
    return (
        <>
            <h1> Sobre </h1>
            <p> informações sobre o site </p>


            <li><Link href={'/'}> voltar</Link></li>

        </>
    );
}