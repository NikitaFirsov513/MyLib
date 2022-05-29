import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TBookList, TBookListElement } from '../../data/BookList';
import { useDispatch } from 'react-redux';
import { delateFromCard } from '../../redux/reducers/basketListReducer';




export default function BasketListElement(props: { element: TBookListElement }) {

    /**/
    const element: TBookListElement = props.element;


    const dispatch = useDispatch();

    function clickDelateFromCard() {
        dispatch(delateFromCard(element))
    }



    return (

        <div className="basket__bookList-element">
            <div className="basket__bookList-info">
                <div className="basket__bookList-title">
                    {element.title}
                </div>
                <div className="basket__bookList-name">
                    {element.name}
                </div>
            </div>
            <IconButton sx={{ width: "50px", height: "50px" }} onClick={e => clickDelateFromCard()}>
                <DeleteIcon sx={{ width: "30px", height: "30px", color: "#FF3434" }} />
            </IconButton>
        </div>)

}