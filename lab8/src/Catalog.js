import React, { Component } from 'react';
import './Catalog.css';
import Products from './products.json';


const ProductList = ({ fR }) => Products.map(({ manufacture, image, name, amount }) => {
    if (manufacture.toLowerCase() === fR ||
        name.toLowerCase().substring(0, fR.length).includes(fR)) {
        return (
            <div class="product">
                <img src={image} alt={name} />
                <p class="price">{amount}</p>
                <h3>{name}</h3>
            </div>
        )
    } else if (fR === "all") {
        return (
            <div class="product">
                <img src={image} alt={name} />
                <p class="price">{amount}</p>
                <h3>{name}</h3>
            </div>
        )
    }
})

class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            filterRadio: 'all'
        }
    }
    change(e) {
        this.setState({ filterRadio: e.currentTarget.value });
    }
    clear() {
        this.setState({ filterRadio: 'all' });
        document.getElementById('inpText').value = '';
        console.log(document.getElementById('all').checked = true);
    }

    render() {
        return (
            <>
                <h1 class="header-big">Catalog</h1>

                <div class="catalog">

                    <div class="column-left">
                        <div class="filter">
                            <div class="filter-header">
                                <h4>Search</h4>
                                <a href="#" class="clear" onClick={this.clear.bind(this)}  >Clear</a>
                            </div>
                            <div>
                                <input id="inpText" type="text" onChange={this.change.bind(this)} placeholder="search..." />
                            </div>
                            <h4>Manufacturer</h4>
                            <div>
                                <div>
                                    <input type="radio" name="manufacturere" id="all" value="all" defaultChecked
                                        onClick={this.change.bind(this)} />
                                    <label for="all"  >All</label>
                                </div>
                                <div>
                                    <input type="radio" name="manufacturere" id="apple" value="apple"
                                        onClick={this.change.bind(this)} />
                                    <label for="apple">Apple</label>
                                </div>
                                <div>
                                    <input type="radio" name="manufacturere" id="dell" value="dell"
                                        onClick={this.change.bind(this)} />
                                    <label for="dell"  >Dell</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column-right">
                        <div class="products">
                            <ProductList fR={this.state.filterRadio}></ProductList>
                        </div>
                    </div>
                </div>

            </>

        );
    }
}

export default Catalog;