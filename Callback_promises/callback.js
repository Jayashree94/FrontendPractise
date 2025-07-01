const cart =["dress","shoe","purse"];

createOrder(cart, function (orderId){
    proceedToPayments(orderId, function (paymentID){
        showOrderSummary(paymentID, function (){
            updateBalance();
        })
    })
});

createOrder(cart)
.then((orderId) => proceedToPayments(orderId))
.then((paymentID) => showOrderSummary(paymentID))
.then((paymentID) =>updateBalance(paymentID) )


