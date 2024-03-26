import "./styles.css"


export default function Header() {
    return (
        <header>
            <div id="title">
                <h1>Marketing</h1>
                <h1>Criativo</h1>
            </div>
            <ul>
                <a href="#">
                    <li>Inicio</li>
                </a>
                <a href="#">
                    <li>Serviços</li>
                </a>
                <a href="#">
                    <li>Sobre</li>
                </a>
                <a href="#">
                    <li>Contato</li>
                </a>
                <a href="#" id="inscreva-se-btn">
                    <li>Já tem uma conta?</li>
                </a>
            </ul>

        </header>
    )
}