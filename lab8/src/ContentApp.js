import React, { Component } from 'react';
import './App.css';
import Products from './products.json';



let ProductsFiltred1 = Products.filter(({ category, featured }) => (category === "desktop" && featured === true));
let ProductsFiltred2 = Products.filter(({ category, featured }) => (category === "tablet" && featured === true));
ProductsFiltred1 = ProductsFiltred1.slice(0, 4);
ProductsFiltred2 = ProductsFiltred2.slice(0, 4);

const ProductsSelected1 = ProductsFiltred1.map(({ amount, image, name, manufacture }, id) => (
    <>
        <div class="product" key={id}>
            <img src={image} alt={manufacture + ' ' + name} />
            <p class="price">{amount}</p>
            <h3>{name}</h3>
        </div>
    </>)
)

const ProductsSelected2 = ProductsFiltred2.map(({ amount, image, name, manufacture }, id) => (
    <>
        <div class="product" key={id}>
            <img src={image} alt={manufacture + ' ' + name} />
            <p class="price">{amount}</p>
            <h3>{name}</h3>
        </div>
    </>)
)


class ContentApp extends Component {

    render() {
        return (
            <>
                <h1 class="header-big">Welcome to our store</h1>
                <h2 class="header-small">Desktops</h2>
                {ProductsSelected1}
                <h2 class="header-small">Tablets</h2>
                {ProductsSelected2}
            </>
        );
    }
}

export default ContentApp;