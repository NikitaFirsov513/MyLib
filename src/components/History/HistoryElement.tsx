import { THistory } from "../../redux/reducers/userReducer";






export default function HistoryElement(props: { element: THistory }) {

    const element = props.element;

    return (
        <div className="history__bookList-element">

            <div className="history__bookList-info">
                <div className="history__bookList-title">
                    {element.title}
                </div>
                <div className="history__bookList-name">
                    {element.name}
                </div>
            </div>
            <div className="history__bookList-date">
                {element.date.split("T")[0]}
            </div>
        </div>)
}