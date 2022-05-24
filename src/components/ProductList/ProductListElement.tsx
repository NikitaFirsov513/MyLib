import { TBookListElement } from "../../data/BookList"
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';


type TPropsProductListElement = {
    bookElement: TBookListElement,
}

export default function ProductListElement(props: TPropsProductListElement) {

    const { bookElement } = props;


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
        <>
            <div className="productList__element">
                <ColorButton variant="contained" size='small'><p className='productList__button'>+</p></ColorButton>
                <div className="productList__img"><img src={bookElement.image} alt="" /></div>
                <div className="productList__text">
                    <div className="productList__title"><p>{bookElement.title}</p></div>
                    <div className="productList__name"><p>{bookElement.name}</p></div>
                </div>

            </div>
        </>)
}