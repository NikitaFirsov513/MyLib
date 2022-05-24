import './ProductList.scss'
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { TBookList } from '../../data/BookList';
import ProductListElement from './ProductListElement';

type TProps = {
    bookList: TBookList,
}

export default function ProductList(props: TProps) {

    const { bookList } = props;

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#8B8C8D"),
        position: "absolute",
        width: "40px",
        marginLeft: "115px",
        marginTop: "235px",
        height: "40px",
        backgroundColor: "#8B8C8D",
        '&:hover': {
            backgroundColor: "#5C5C5C",
        },
    }));


    return (
        <div className="productList">
            <div className="productList__container">


                {bookList.map((element) => <ProductListElement key={element.name + element.title} bookElement={element} />)}


            </div>
        </div>)
}