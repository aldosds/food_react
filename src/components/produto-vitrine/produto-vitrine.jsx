import "./produto-vitrine.css";
import foto from "../../assets/hamburguer.png"
import bag from "../../assets/bag-black.png"

function ProdutoVitrine() {
    return <div className="produto-box text-center">
        <img src={foto} alt="Foto hamburguer" />

        <div>
            <h2>Spicy Burguer</h2>
            <p className="prod-vitrine-descricao">Hamburguer de 250g, queijo, tomate. alface e cebol</p>
            <p aclassName="prod-vitrine-preco">R$ 18,90</p>
        </div>

        <div>
            <button className="btn btn-cart">
                <img src={bag} className="icon" alt="ícone de uma sacola" />
                Adicionar
            </button>
        </div>
        
    </div>
}

export default ProdutoVitrine;