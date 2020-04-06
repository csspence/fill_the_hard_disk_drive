/*
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.
*/

const save = (sizes, hd) => {
  let sum = 0;
  let files = 0;
  for(let i = 0; i < sizes.length; i++) {
    if(sum + sizes[i] <= hd) {
      sum += sizes[i];
      files++;
    }
  }

  return files;
}