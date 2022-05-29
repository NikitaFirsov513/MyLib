import { TBookList } from "../data/BookList";

export default async function bookingFetch(username: string, basketList: TBookList) {


    const req = await fetch(`http://localhost/MyLib/hs/v1/booking/create`,
        {
            method: 'POST',
            body:
                JSON.stringify({
                    username: username,
                    books: basketList
                })
        });
    return req

}

