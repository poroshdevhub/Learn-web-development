
const num = [1,2,3,4,5,6];

// for
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log(element);
    
}
// forEach

num.forEach((item , index, arr ) => {
    // console.log(item);
    // console.log(index);
    console.log(arr);
});