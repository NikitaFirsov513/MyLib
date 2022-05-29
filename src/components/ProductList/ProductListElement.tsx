import { TBookListElement } from "../../data/BookList"
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { addToCard, delateFromCard } from "../../redux/reducers/basketListReducer";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store/store";


type TPropsProductListElement = {
    bookElement: TBookListElement,
}

export default function ProductListElement(props: TPropsProductListElement) {

    const { bookElement } = props;
    const dispatch = useDispatch();
    const [inGrosery, setInGrosary] = useState(false)
    const bookList = useSelector((state: RootState) => state.basketList.bookList);



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

    const ColorButtonInGrosary = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#8B8C8D"),
        position: "absolute",
        width: "40px",
        marginLeft: "115px",
        marginTop: "235px",
        height: "40px",
        backgroundColor: "#5C5C5C",
        padding: 0,
        '&:hover': {
            backgroundColor: "#2D2C2C",
        },
    }));



    function clickAddToCard() {
        //alert("asd")
        dispatch(addToCard(bookElement))
        setInGrosary(true);

    }


    function clickDelateFromCard() {
        dispatch(delateFromCard(bookElement))
        setInGrosary(false);
    }


    useEffect(() => {
        setInGrosary(bookList.some((elem) => elem.id === bookElement.id))
    }, [])

    useEffect(() => {
        setInGrosary(bookList.some((elem) => elem.id === bookElement.id))
    }, [bookList])

    return (
        <>
            <div className="productList__element">

                {inGrosery ?
                    <ColorButtonInGrosary onClick={e => clickDelateFromCard()} variant="contained" size='small'><p className='productList__button'>+</p></ColorButtonInGrosary>
                    :
                    <ColorButton onClick={e => clickAddToCard()} variant="contained" size='small'><p className='productList__button'>+</p></ColorButton>
                }

                <div className="productList__img"><img src={bookElement.image} alt="" /></div>
                <div className="productList__text">
                    <div className="productList__title"><p>{bookElement.title}</p></div>
                    <div className="productList__name"><p>{bookElement.name}</p></div>
                </div>

            </div>
        </>)
}