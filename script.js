function getOdds(nums) {
    
    // Quitamos los numeros impares del array usando el método .filter()
    const odds = nums.filter(num => num % 2 !== 0);
    
    return odds;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getOdds(nums);