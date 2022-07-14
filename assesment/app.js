const product1= {
    num:1,
    sold:60,
     qty :document.querySelector('#qty-span1'),
     price:document.querySelector('#price1'),
     subs:document.querySelector('#btn-substract1'),
     add: document.querySelector('#btn-add1')
}
const product2 = {
    num:1,
    sold:30,
    qty: document.getElementById('qty-span2'),
    price: document.getElementById('price2'),
    subs: document.getElementById('btn-substract2'),
    add: document.getElementById('btn-add2')
}
const product3 = {
    num:1,
    sold:20,
    qty: document.getElementById('qty-span3'),
    price: document.getElementById('price3'),
    subs: document.getElementById('btn-substract3'),
    add: document.getElementById('btn-add3')
}

function addQuantity (product){
    product.num += 1;
   const realPrice =  product.sold * product.num
    
    if(product.num ===10){
        product.add.disabled =true;
        product.subs.disabled=false
    }
    product.qty.textContent = product.num;
    product.price.textContent=realPrice;
}
function reduceQuantity(product){
    product.num -=1;
    const realPrice = product.sold /product.num;
    if(product.num ===1){
        product.subs.disabled=true;
        product.add.disabled =false;
    }
    product.qty.textContent = product.num;
    product.price.textContent = realPrice;
}
product1.add.addEventListener('click',function(){
    addQuantity(product1)
})
product1.subs.addEventListener('click', function () {
    reduceQuantity(product1)
})
product2.add.addEventListener('click', function () {
    addQuantity(product2)
})
product2.subs.addEventListener('click', function () {
    reduceQuantity(product2)
})
product3.add.addEventListener('click', function () {
    addQuantity(product3)
})
product3.subs.addEventListener('click', function () {
    reduceQuantity(product3)
})