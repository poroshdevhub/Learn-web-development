const number = [22,33,43,42 ,32];


// filter
const filterArr = number.filter((item) => {
    return item > 40 && item < 60 ;
});
console.log(filterArr);

// Map
 number.map(function(el , index , arr ){
    console.log(el , index , arr);
});

// reduce

const reduceItem = number.reduce((acc , curr) => {return acc + curr;}, 0);
console.log('reduceItem=>', reduceItem);
