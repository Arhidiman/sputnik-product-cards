import { formatPriceByCurrency } from '../../utils/formatPriceByCurrency'
import './ProductCard.scss'

export interface IProductCard {
    title: string,
    origin: string,
    price: number,
    currency: 'RUB' | 'USD' | 'EUR'
    imageUrl: string
}

export const ProductCard: React.FC<IProductCard> = (
    {
        title,
        origin,
        imageUrl,
        price,
        currency,
    }
) => {
    return (
        <div className="product-card">
            <div className='product-card_header'>
                <h3 className='product-card_title'>
                    {title}
                </h3>
                <p className='product-card_origin'>{origin}</p>
            </div>
            <img className='product-card_image' alt='image' src={imageUrl} />
            <div className='product-card_footer'>
                <p className='product-card_price'>
                    {formatPriceByCurrency(price, currency)}
                </p>
            </div>
        </div>
    )
}