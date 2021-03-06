import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className=" col-lg-4 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to="/">
                            <img src={img} alt="product" className="card-img-top" />
                            </Link>
                           
                            </div>
                        )}
                    </ProductConsumer>
                    {/* card footer */}
                    <div className="card-footer justify-content-between">
                        <h6 className="align-self-center mb-0"><b>{title}</b></h6>
                        <p className="text-blue font-italic mb-0">
                            <span >$</span>
                            {price}
                        </p>
                        <i className='fa fa-heart'></i>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer {
            background: rgba(247, 247, 247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 1s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0,0);
    }
    .cart-btn:hover {
        color: var(--mainBlue);
        cursor: pointer;
    }
`;