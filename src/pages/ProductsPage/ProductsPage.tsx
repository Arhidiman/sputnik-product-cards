import { ProductCard } from "../../components/ProductCard/ProductCard"
import { mockProducts } from "../../mockData/mockProducts"
import type { IProductCard } from "../../components/ProductCard/ProductCard"
import './ProductsPage.scss'

export const ProductsPage: React.FC = () => {
    return (
        <div className="products-page">
            <div className="products-page-container">

                <div className="products-page_products">
                    {
                        mockProducts && mockProducts.map((product: IProductCard) => (
                        <ProductCard {...product}/>
                        ))
                    }
                </div>
            
            </div>
        
        </div>
)
}