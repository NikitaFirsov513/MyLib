export type TBookListElement = {
    title: string,
    name: string,
    image: string,
    genre: string,


}


export type TBookList = TBookListElement[];

export const bookList: TBookList = [

    {
        title: "1984",
        name: "Джордж Оруэлл",
        image: "https://res.cloudinary.com/cifroteh/image/upload/v1653298959/wtvnW47Q0slsjfhxTsYB9mxK0c4awejxLafUZva7fIu4JA6W7d96GdOUAW48exjToFWkMqavB_mYByhf6PanE8IP_azj7gk.jpg",
        genre: "антиутопия/социальная фантастика/роман/",
    },
    {
        title: "На западном фронте без перемен",
        name: "Эрих Мария Ремарк",
        image: "https://res.cloudinary.com/cifroteh/image/upload/v1653299112/6067063631_faei3e.webp",
        genre: "роман/",
    }

]



