import { Link } from "react-router-dom";
import styles from "./Item.module.css"
import { Button } from "../Button/Button";
import { Contador } from "../Contador/Contador";



export const Item = ({ id, name, image, price, stock }) => {
    return (
        <div className={styles.item}>
            <h4>{name}</h4>
            <img src={image} alt="" />
            <div>
                <div>
                    <p className="card-text"> {price} </p>
                    <Contador max={stock} className={styles.contadorstyles}/>
                </div>
            </div>
            <Link to={`/item/${id}`}>
                <Button text={"detalles"} />
            </Link>
        </div>
    );
};