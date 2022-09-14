export default function Cart(props) {
    return (
        <div>
            <ShowCart 
            products={props.products}
            ItemCount={props.ItemCount}
            />
        </div>
    );
}

function ShowCart(props) {
    return (
        <div>
            <h2>Your Cart Items</h2>
            {props.products.map((prod) => {
                if (prod.quantity > 0) {
                   return (
                    <div>
                        <img src={prod.img} alt={prod.description}className="border"></img>
                        <p className="">Quantity {prod.quantity}</p>
                        <p className="px-4">{prod.description}</p>
                    </div>
                   );
                }
            })}
        </div>
    )
}