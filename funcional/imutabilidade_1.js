function ordernar(array){
  return [...array].sort((a,b) => a -b) 
}
 // o paramentro [...array]

const nums = Object.freeze([3, 1, 7, 9, 4, 6])
const numsOrdernados = ordernar(nums)
console.log(nums, numsOrdernados)

const partNums= nums.slice(2)
console.log(partNums, nums)