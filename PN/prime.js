function isPrime(){
    var num = parseInt(f1.n1.value);
    console.log("enter a number");

    if (num <= 1) {
        alert("Not a prime number");
        return;
    }

    for(let i = 2; i < num; i++){
        if (num % i === 0) {
            alert("Not a prime number");
            return;
        }
    }

    alert("It is a prime number");
}
