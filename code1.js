let  arr = [1,2,3,5,4,5,6,7,4,7,8,1,9,10]
let blankarr = [];
arr = arr.sort((a,b) => b-a)
for(let i = 0 ; i<arr.length ; i++)
{
for(let j=0 ; j <arr.length ; j++)
{
    if(arr[i] == arr[j]  &&  ! blankarr.includes(arr[i]))
    {
        blankarr.push(arr[i])
    }
}
}
console.log("arr" ,arr)
console.log("blankarr" , blankarr)

// --------------------------------*************************----------------------------------------------
let arr1 = [1, 2, 3, 5, 4, 5, 6, 7, 4, 7, 8, 1, 9, 10];

arr1 = arr1.sort((a, b) => b - a);

let blankarr1 = [...new Set(arr1)];

console.log("arr1", arr1);
console.log("blankarr1", blankarr1);

// ---------------------------------************************----------------------------------------------
let arr2 = [1, 2, 3, 5, 4, 5, 6, 7, 4, 7, 8, 1, 9, 10];

arr2.sort((a, b) => b - a);

let uniqueSet = new Set();
let blankarr2 = [];

for (let i = 0; i < arr2.length; i++) {
    if (!uniqueSet.has(arr2[i])) {
        uniqueSet.add(arr2[i]);
        blankarr2.push(arr2[i]);
    }
}

console.log("arr2", arr2);
console.log("blankarr2", blankarr2);


//  this above code is   maintain  the time and pace  complexity 