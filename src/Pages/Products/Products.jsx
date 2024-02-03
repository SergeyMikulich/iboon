import React from 'react'
import Product from '../../components/product/Product';
import './Products.scss';
import furnitureData from '../../data/products'

export default function Products() {
    return (
        <section id='products'>
            <div className="container">
                <span className="text-content">
                    <h2>Лучшие продукты</h2>
                    <p>Фавориты недели наших клиентов</p>
                </span>
                {furnitureData.products.map(product => (
                    <Product key={product.title} {...product} />
                ))}
                
            </div>
        </section>
    )
}
