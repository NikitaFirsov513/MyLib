import styled from "@emotion/styled";
import { Alert, Snackbar } from "@mui/material";
import Button, { ButtonProps } from '@mui/material/Button';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCard, delateFromCard } from "../../redux/reducers/basketListReducer";
import { setDialog } from "../../redux/reducers/userReducer";
import { RootState } from "../../redux/store/store";
import "./Basket.scss";
import BasketListElement from "./BasketListElement";
import bookingFetch from "../../utils/bookingFetch";


const BasketButton = styled(Button)<ButtonProps>(({ theme }) => ({
    margin: "30px 0 0 0",
    color: "#ffffff",
    fontWeight: 500,
    width: "177px",
    height: "42px",
    backgroundColor: "#8B8C8D",
    '&:hover': {
        backgroundColor: "#5C5C5C",
    },
}));


export default function Basket(props: { setPropState: Function, setOpenSuccess: Function }) {
    const [openError, setOpenError] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    let setOpenSuccess = props.setOpenSuccess;
    const dispatch = useDispatch();
    const basketList = useSelector((state: RootState) => state.basketList.bookList);
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const userData = useSelector((state: RootState) => state.user.userData);
    let setPropState = props.setPropState;
    async function handleClick() {


        if (isAuth === false || userData === null) {
            setOpenError(true);
            return
        }

        dispatch(setDialog({ isLoginOpen: false, isRegistrationOpen: false, isLoad: true }))

        const res = await bookingFetch(userData?.username, basketList);

        switch (res.status) {
            case 200:
                //alert("ok")
                setOpenSuccess(true);
                setPropState(false);
                dispatch(clearCard("any"))
                break;
            default:
                setOpenWarning(true);
        }


    }

    function errorClose() {
        setOpenError(false);
    };
    function successClose() {
        setOpenSuccess(false);
    };
    function warningClose() {
        setOpenWarning(false);
    };
    return (

        <div className="basket">
            {basketList.length !== 0 ? <>
                <div className="basket__name">
                    <p>Корзина</p>
                </div>
                <div className="basket__bookList">
                    {basketList.map(elem => (<BasketListElement key={elem.name} element={elem} />))}
                </div>
                <BasketButton onClick={e => handleClick()}>
                    ЗАБРОНИРОВАТЬ
                </BasketButton></>
                :
                <div className="basket__name">
                    <p>Корзина пуста</p>
                </div>
            }

            <Snackbar open={openError} autoHideDuration={6000} onClose={errorClose}>
                <Alert onClose={errorClose} severity="error" sx={{ width: '100%' }}>
                    Ошибка авторизации
                </Alert>
            </Snackbar>

            <Snackbar open={openWarning} autoHideDuration={6000} onClose={warningClose}>
                <Alert onClose={warningClose} severity="warning" sx={{ width: '100%' }}>
                    Ошибка
                </Alert>
            </Snackbar>
        </div>
    )



}