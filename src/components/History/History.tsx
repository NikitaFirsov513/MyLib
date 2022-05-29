import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import "./History.scss"
import HistoryElement from "./HistoryElement"
import { setHistory } from "../../redux/actions/userActions"



export default function History() {


    const history = useSelector((state: RootState) => state.user.history);
    const userEmail = useSelector((state: RootState) => state.user.userData?.email);

    const dispatch = useDispatch();
    useEffect(() => {

        if (userEmail !== undefined)
            dispatch(setHistory(userEmail))
    }, [])


    return (
        <div className="history">
            {history.length !== 0
                ? <>
                    <div className="history__name">
                        <p>Ваши книги</p>
                    </div>
                    <div className="history__bookList">
                        {history.map((elem) => (<HistoryElement element={elem} />))}
                    </div>
                </>
                :
                <div className="history__name">
                    <p>У вас нет книг</p>
                </div>}
        </div>
    )

}