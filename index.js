function hasTargetSum(array, target) {
  // Write your algorithm here
    const numSet = new Set(); // Create a Set to store encountered numbers

    for (const num of array) {
        const complement = target - num;
        
        // If the complement exists in the Set, we found a pair that sums to the target
        if (numSet.has(complement)) {
            return true;
        }

        // Otherwise, add the current number to the Set for future reference
        numSet.add(num);
    }

    // If no pair is found, return false
    return false;
}

// Test cases
console.log(hasTargetSum([2, 7, 11, 15], 9));  // true (2 + 7 = 9)
console.log(hasTargetSum([3, 1, 4, 6, 5], 8));  // true (3 + 5 = 8)
console.log(hasTargetSum([1, 2, 3, 4, 5], 10)); // true (5 + 5 = 10)
console.log(hasTargetSum([1, 2, 3, 4, 5], 7));  // false (No pair adds up to 7)


/* 
  Write the Big O time complexity of your function here
/
Test Case 1:
Input: hasTargetSum([2, 7, 11, 15], 9)
Expected Output: true (2 + 7 = 9)

Test Case 2:
Input: hasTargetSum([3, 1, 4, 6, 5], 8)
Expected Output: true (3 + 5 = 8)

Test Case 3:
Input: hasTargetSum([1, 2, 3, 4, 5], 10)
Expected Output: true (5 + 5 = 10)

Test Case 4:
Input: hasTargetSum([1, 2, 3, 4, 5], 7)
Expected Output: false (No pair adds up to 7)

/* 
  Add your pseudocode here
/
function hasTargetSum(arr, target):
    Create an empty Set to store encountered numbers
    
    For each number in arr:
        Calculate the complement as (target - current number)
        
        If the complement exists in the Set:
            Return true (a pair exists that sums to the target)
        
        Add the current number to the Set
    
    If no pair is found:
        Return false
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

function hasTargetSum(arr, target) {
  const numSet = new Set();
  
  for (const num of arr) {
      const complement = target - num;
      if (numSet.has(complement)) {
          return true;
      }
      numSet.add(num);
  }
  
  return false;
}
