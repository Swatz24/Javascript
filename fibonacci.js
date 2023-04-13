

function fibs(num){
    let i;
    let fibNum = [];
    for (i=2; i< num; i++){
      fibNum[0] = 0;
      fibNum[1] = 1;
      fibNum[i] = fibNum[i-1] + fibNum[i-2];

    }
    console.log(`Fibonacci series of ${num} is : ${fibNum}`);

}
fibs(8);
fibs(5);
fibs(10);
