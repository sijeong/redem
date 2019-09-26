export type __Product = {
    id: number;
    name: string;
    description: string;
    price: number   
}

export const products: __Product[] = [
    {
        id: 1,
        description: "A collection of navigational components that compose declaratively with your app",
        name: "React Router",
        price: 8
    },
    {
        id: 2,
        description: "A library that helps manage state across your app",
        name: "React Redux",
        price: 12
    },
    {
        id: 3,
        description: "A library that helps you interface wiht a GraphQ backend",
        name: "React Apollo",
        price: 12
    }
]