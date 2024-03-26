import "./styles.css"
export default function Aside() {
    return (
        <aside>
            <h2><span>Inscreva-se agora</span></h2>
            <h2>na Newsletter</h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus omnis illum praesentium ipsam
                temporibus nemo alias at fuga sapiente, suscipit labore est beatae, dignissimos aut quae voluptates
                accusantium. Odio, quasi.</p>
            <form action="">
                <input type="text" name="Nome" id="input-name" placeholder="Nome" />
                <input type="email" name="email" id="input-email" placeholder="Email" />
                <input type="submit" value="Enviar" />
            </form>
        </aside>
    )
}