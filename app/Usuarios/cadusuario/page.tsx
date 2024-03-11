import Link from "next/link";

export default function CadUsuario () {
    return (
        <>
            <h1> cadastro </h1>
            <p> insira as informações do usuário </p>


            <li><Link href={'/'}> voltar</Link></li>
        </>
    );
}