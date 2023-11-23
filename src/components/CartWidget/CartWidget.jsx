
import styles from "./cart.module.css"
export const CartWidget = () => {
  return (
    <div className={styles.cart}>
        <img src="/src/img/cart.png" alt="" />
        <span>4</span>
    </div>
  )
}
