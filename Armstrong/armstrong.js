function isArmstrong() {
    var num = parseInt(f1.n1.value);
    console.log("enter a number");

    var sum = 0;
    var temp = num;
    var numberOfDigits = num.toString().length;

    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, numberOfDigits);
        temp = parseInt(temp / 10);
    }

    if (sum === num) {
        alert("It is an Armstrong number");
    } else {
        alert("Not an Armstrong number");
    }
}
