const numbers=[23,45,43,56,67];
// for(let i=0; i<numbers.length; i++){
//     const number= numbers[i];
//     console.log(number);
// }

// alternative
// for(const number of numbers){
//     console.log(number)
// }
const products=[
    {id:1, name:'walton phone', price:19000},
    {id:2, name:'iphone', price:79000},
    {id:3, name:'xiaomi Phone', price:49000},
    {id:4, name:'mac book air laptop', price:190000},
    {id:5, name:'lenovo yoga Laptop', price:70000},
    {id:6, name:'dell', price:202000},
    {id:7, name:'samsung note 7 Phone', price:109000},
    {id:8, name:'nokia old age phone', price:191000}

];

// for(const product of products){
//     console.log(product)
// }

function matchedProducts(products, search){
    const matched =[];
    for(const product of products){
        // console.log(product.name.includes(search))
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const Result=matchedProducts(products, 'laptop');
console.log(Result);
