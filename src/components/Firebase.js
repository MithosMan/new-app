import React, {useState, useEffect} from "react"
import {collection,getDocs,getFirestore} from "firebase/firestore"

const Informacion = () => {
    const [products, setProducts] = useState({})


    useEffect(()=>{
        const db = getFirestore();

        const itemsCollection = collection(db,"items");
        getDocs(itemsCollection).then((snapshot)=>{
            setProducts(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})));
        });
    },[])

    return (
        <>
        {products}
        </>
    )



}

export default Informacion