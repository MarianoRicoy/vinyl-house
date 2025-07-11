interface Icategory {
    id: number;
    name: string;
    products?: IProduct[];
}

interface IOrder {
    id: number;
    status: string;
    date: Date;
    user: IUser;
    products: IProduct[];
}

interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
    //category: Icategory;
}

enum eRole {
    ADMIN = 'admin',
    USER = 'user',
}

interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: eRole;
    orders: IOrder[];
}

type Params<T> = Promise<T>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// TODO: llevar al servicio de fetch cuando lo implmentemos

interface createOrderDto { //POST
    userId: number;
    products: number[];
}

interface LoginUserDto { //POST
    email: string;
    password: string;
}

interface RegisterUserDto { //POST
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string
}
