import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />

                        <div className="row">
                            <div className='col-lg-3'>
                            <ul class="breadcrumb">
  <li><a href="#">Clothing</a></li>
  <li><a href="#">Women's</a></li>
  <li><a href="#">OuterWear</a></li>
</ul>
                                <p>Filters</p>
                                <hr />
                                <h6>Attribute</h6>
                                <input type="checkbox" id="Option1" name="Option1" value="Option1" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<input type="checkbox" id="Option2" name="Option2" value="Option2" /><span>&nbsp;&nbsp;</span>
<label for="Option2"> Option</label><br/>
<input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<a href=''>Show More</a>
<hr/>
<h6>Attribute</h6>
                                <input type="checkbox" id="Option1" name="Option1" value="Option1" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<input type="checkbox" id="Option2" name="Option2" value="Option2" /><span>&nbsp;&nbsp;</span>
<label for="Option2"> Option</label><br/>
<input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<a href=''>Show More</a>
<hr/>
<h6>Attribute</h6>
                                <input type="checkbox" id="Option1" name="Option1" value="Option1" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<input type="checkbox" id="Option2" name="Option2" value="Option2" /><span>&nbsp;&nbsp;</span>
<label for="Option2"> Option</label><br/>
<input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<a href=''>Show More</a>
<hr/>
<h6>Attribute</h6>
                                <input type="checkbox" id="Option1" name="Option1" value="Option1" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<input type="checkbox" id="Option2" name="Option2" value="Option2" /><span>&nbsp;&nbsp;</span>
<label for="Option2"> Option</label><br/>
<input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
<label for="Option"> Option</label><br/>
<a href=''>Show More</a>
<hr/>
                            </div>
                            <div className='col-lg-9'>
                                <h5>38 Results</h5>
                                <div className="row">
                                    <ProductConsumer>
                                        {(value) => {
                                            return value.products.map(product => {
                                                return <Product key={product.id} product={product} />
                                            });
                                        }}
                                    </ProductConsumer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
