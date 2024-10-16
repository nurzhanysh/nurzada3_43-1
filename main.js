function func1(a, b) {
    return a < b ? a : b;
};
console.log (func1(20,7));
function getM() {
    var str= prompt("Введите строку!");
    return str.length;
}
console.log (getM())
function calculator (a,b, operation){
    if (operation ==="/" && b===0) {
        return "Делить на ноль нельзя !!!";
   }
    switch(operation){
        case "/":
            return a/b;
        case "-":
            return a-b; 
        case "*":
            return a*b;
        case "+":
            return a +b;
        default:
            return "Неверная операция";
    }
}
console.log(calculator(10,5,"*"));