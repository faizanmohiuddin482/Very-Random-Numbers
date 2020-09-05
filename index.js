function randomNumberGenerator(min,max){
    if(typeof(min)!='number'|| typeof(max)!='number'){
        min=0;
        max=1;
    }
    return (Math.random() * (max-min))+ min;
}

module.exports = randomNumberGenerator