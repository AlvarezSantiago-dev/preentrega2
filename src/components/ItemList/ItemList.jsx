import { Item } from "../Item/Item"
import styles from "./Itemlist.module.css"

export const ItemList = ({products}) => {
    return (
        <>
        <div className={styles.itemlist}>

            {products.map(product => <Item key={product.id} {...product} />)}
        </div>
        
        </>
    )
}
