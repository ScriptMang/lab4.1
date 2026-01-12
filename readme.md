## Reflection

1. How did you approach creating more flexible functions with parameters?
  * The way I approached creating flexible functions was using if statements to return different values. I also used the fact that javascript uses undefined as a nil value to make an optional parameter. For example in the function calculateTotalCost I use the discount parameter as an optional value. 
  
2. What challenges did you face while incorporating conditional logic in your functions?
  * I didn't really run into any issues using conditional logic in my functions.
   
3. How does refactoring improve the readability and maintainability of your code?
 * Refactoring my caculateTotalCost function allowed me to add new functionality. Refactoring improves readability because your logic may not make sense. A refactor in the case can reduce the amount of code on screen leading to better maintainability. Other times a refactor can happen due to new language features being built-in for things you did manually. Refactoring controls technical debt. Technical debt is any code that's undocumented that can easily prevent you pushing a new feature. Refactoring is something to keep track of. In a job its very likely you're going to work in an existing codebase. Business needs scale over time and existing codebases are always in need of a refactor. Sometimes its for security reasons to protect from bad actors. Like switching to new language or upgrading to the latest version of a language. Refactoring can also improving maintainability because it could require unit-testing or even integration testing to spot the problem in the function. What's also important to refactoring is performance. Are you adding too many objects? Are running too many loops? Are you using the right collection datatype for function your creating? These are the questions you'll ask when refactoring for performance. It leads to better maintainability, since it also gives you head room to add more functions that build on the previous.

