export const formatPriceByCurrency = (price: number, currency: 'RUB' | 'USD' | 'EUR') => {
    return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency,
            minimumFractionDigits: 2
    }).format(price / 100);
}
