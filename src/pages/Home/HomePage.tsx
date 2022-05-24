import { useSelector } from "react-redux"
import ProductList from "../../components/ProductList/ProductList";
import { RootState } from "../../redux/store/store"

export default function HomePage() {

    const bookList = useSelector((state: RootState) => state.bookList.bookListAfterParams);


    return (

        <>
            {bookList.length !== 0 ?
                <>
                    <ProductList bookList={bookList} />
                </>
                :
                <>

                </>}


        </>)
}