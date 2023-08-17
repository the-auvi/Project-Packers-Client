export const cart = {
    updateCart: {
        method: "POST",
        uri: "cart",
        body: undefined,
        suggestions: {
            raw: "A raw example of the uri: 'cart'",
            body: "Please provide body object",
        }
    },
    getCart: {
        method: "GET",
        uri: "cart",
        suggestions: {
            raw: "A raw example of the uri: 'cart'.",
        }
    },
    addDiscount: {
        method: "PATCH",
        uri: "cartdiscount",
        body: {
            discountApplied: undefined
        },
        suggestions: {
            raw: "A raw example of the uri: 'cart'.",
            discountApplied: "Please add a discount"
        }
    }
}