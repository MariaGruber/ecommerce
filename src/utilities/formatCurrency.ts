const CurrencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency",
})

export function formatCurrency(number: number) {
    return CurrencyFormatter.format(number)
}