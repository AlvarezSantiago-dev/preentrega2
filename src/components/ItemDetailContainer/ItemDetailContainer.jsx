import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";
import { getProductById } from "../../asyncMock";
import { Item } from "../Item/Item";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        console.log("ID recibido a través de useParams:", id);

        getProductById(id)
            .then((resp) => {
                setItem(resp);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, [id]);

    return (
        <>
        <div>
        {isLoading ? <Loading /> : id && <ItemDetail {...item} />}
        </div>
            
        </>
    );
};