function inBetween(a, b) {
    return function(item){
        return item >= a && item <= b;
    }
}
    
function inArray(c){
return function (mb) {
    for(let g of c){
    
    alert (`mb = ${mb} g = ${g} ${g == mb}`); //  ? true : false
     if (mb == g) return true;
    }
}
}
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([2, 1, 10])) ); // 1,2