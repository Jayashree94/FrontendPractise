const cart =["dress","shoe","purse"];

api.createOrder(cart,function(){
    api.proceedPayments(orderId,function(){
        api.paymentdone(paymentid,function(){
        })

    });
})