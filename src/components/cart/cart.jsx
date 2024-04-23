import { useEffect, useState } from "react"
import { Dock } from "react-dock"

function Cart() {

    const [show, setShow] = useState(false);

    useEffect(function() {
        window.addEventListener('openSidebar', function() {
            setShow(true);
        });
    }, []);

    return <Dock position="right"
                 isVisible={show}
                 fluid={false}
                 size={420}
                 onVisibleChange={function(visible) {
                    setShow(visible)
                 }}
                 >
        <div>
            <h1>Meu Pedido</h1>
        </div>
    </Dock>
}

export default Cart