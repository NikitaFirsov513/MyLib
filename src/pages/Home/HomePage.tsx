import { useSelector } from "react-redux"
import ProductList from "../../components/ProductList/ProductList";
import { RootState } from "../../redux/store/store"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";

export default function HomePage() {

    const bookList = useSelector((state: RootState) => state.bookList.bookList);
    const bookListAfterParams = useSelector((state: RootState) => state.bookList.bookListAfterParams);

    const [open, setOpen] = useState(true);


    

    return (

        <>
            {bookList.length !== 0 ?
                <>
                    <ProductList bookList={bookListAfterParams} />
                </>
                :
                <>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </>}


        </>)
}