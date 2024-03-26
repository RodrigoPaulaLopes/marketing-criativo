import Article from "./article/Index"
import Aside from "./aside/Index"
import "./styles.css"


export default function Main() {
    return (
        <main>
            <Aside/>
            <Article/>
        </main>
    )
}