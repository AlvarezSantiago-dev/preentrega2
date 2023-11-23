export const ItemDetail = ({ name, description, image, stock }) => {
    return (
        <div>
            <p>Nombre: {name}</p>
            <p>Descripción: {description}</p>
            <p>Stock: {stock}</p>
            <div>
                <img src={image} alt={name} style={{ maxWidth: "100%" }} />
            </div>
        </div>
    );
};