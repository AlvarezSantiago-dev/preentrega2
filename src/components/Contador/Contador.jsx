import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";

export const Contador = ({ max }) => {
    const { count, increment, decrement } = useCount({ initial: 0, max });

    return (
        <>
            <Button text={"-"} functionClick={decrement} />       
            <strong>{count}</strong>
            <Button text={"+"} functionClick={increment}/>
        </>
    );
};