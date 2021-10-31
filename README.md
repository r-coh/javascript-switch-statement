# The Javascript Switch Statement Explained With Examples

## Introduction

In javascript a switch statement, is a control flow structure that's used to evaluate multiple results of a single expression ensuring that the instructions are executed on matching one of the expected values. The expected values need to be constants within the switch statement as they are not evaluated at runtime.  

Switch statement also provides a default, which matches any of the undefined expected results, allowing for error handling when unexpected values occur.  

A switch statement will continue evaluating the given clauses unless a `break` is explicitly introduced after executing all the instructions matching a certain clause. This ensures other expected values and their respective instructions are not executed even when they match. On the other hand, without a `break`, the switch clause is evaluated to the end.  

To actually see this practice, a switch statement would be usefull when, given an expression such as the nationality of a user, a switch statement can be used to execute seperate statments based on the user region, be it setting the national language of the given nationality for example.  

Another examples that would actually necessistate the usage of switch statement, is when given the response from a HTTP request, a switch statement can be used to perform different actions based on the response status code.  

## Syntax of a Switch Statement

```javascript
switch (expression) {
    case result_1: // value_1 is a constant
        // Statements here are executed when result of expression matches value of result_1
        [break;] // OPTIONAL break to break from switch clause once this claues matches.

    case result_2:
        // Statements executed when expression returns value that matches result_2
        [break;]

    ... // Other clauses

    case result_n;
        [break;]

    [default:
        // Statements here are excuted when none of the other clauses match expression result.
        // The default clause can be placed at any position within the switch statement
        // This is an optional case, but it's good practice to always have a default clause.
        [break;]]    
}
```

Once control of a program enters a switch statement, the `expression` is first executed, then followed by matching the first case constant to the value of the expression result, in the case they match, the statements in that clause are executed.

In a scenario that they do not match, control of program goes on to compare the expression's result to the second clause, evaluating it's statements when there is a match.

Once the statements of a given case clause are executed, where a `break` statement is used, this ends the switch case and program control is returned to main program. Since `break` statements are optional, when they are not available, the program will continue matching other case clauses that flow irrespective they matched the case without a break statement. This introduces some very unique usage for a switch statement.

In a scenario where non of the clause match, the `default` clause if available is executed, calling all the statements for the default clause and then exiting the switch statement. When a `default` clause is not available, no statements within any of the switch cases would be excuted.  

## Flow Diagram

![flow_diagram](flow_diagram.png "Flow Diagram")

As shown above, the program start by executing the given expression, then checking the results match/equal to the given case constant, in which case it would go ahead to execute the statements for the matching case. When `break` statements are provided, the program exits the switch statement immediately, otherwise continues evaluating other cases.

## How Switch Statement Works in Javascript

### Expression

In javascript, expressions are blocks of code that evaluate to a value, meaning that the given expression must return a value. This is the value to be compared to the constant defined in each case clause. Switch statements evaluate a given expression only once.

### Cases

Cases define how values from the expression compares to each given case.  In Javascript, the comparision of results is strict `===`, meaning values must be of the same type.

To retain changes made while executing a switch statement, variables are set outside of the switch block, and their values can be altered within the matching cases.

Variables can also be scoped within the case blocks of a given clause by using `let` and `const`.

One outsanding feature of cases, is the different outcomes based on the provision of `break` statement at the end of the case blocks. When provided, once its encoutered, the excution within the switch block ends, otherwise, other clauses are evaluated.

### Default Case

The default case is optional and can be defined in whichever position within the switch block, its evaluated when all the other cases do no match the value of given expression. A `break` statement is not necessary in this case as the excution of the switch statement ends here anyway.

## Examples of Switch Statements

Example to print name of the Day fetched from the day of week of the the current date time. This can be used to modify the result of the expected day name say _'Monday'_ to something funky as _'Money Day'_.

```javascript
const epoch_day = new Date('January 1, 1970 00:00:00')
switch (epoch_day.getDay()) {
    case 0: 
        console.log("Sunny Day");
        break;
    case 1:
        console.log("Money Day");
        break;
    case 2:
        console.log("Two Days");
        break;
    case 3:
        console.log("Wedding Day");
        break;
    case 4: 
        console.log("Thus Day");
        break;
    case 5: 
        console.log("Free Day");
        break;
    case 6:
        console.log("Sabbath Day");
        break;
    default:
        console.log("Not a day of the week.");
}
```

First a constant is defined with epoch time in Javascript Date format. The expression evaluates the day of week with `Date.protocal.getDay()` of the constant date variable, which returns an integer representing days of the week, ie. 0-6 to Sunday to Saturday respectively.

The returned value is compared with the given result, return a modified name of the day of the week of epoch time.

## Executing Multiple Cases if Condition Satisfies

Considering that `break` statements are optional, multiple cases can be evaluated within the same switch block. When no `break` statement is provided, the program will continue to execute other case's statement block until a `break` statement is encountered.

Example, lets use a switch statement to find when epoch time was either a weekday or weekend.

```javascript
let epoch_date = new Date('January 1, 1970 00:00:00')
switch (epoch_date.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Epoch was on a weekday");
        break;
    case 6:
    case 0:
        console.log("Epoch was on a weekend");
        break;
    default:
        console.log("Invalid day of the week")s
}
```

In the above example, `break` statement having been omitted for the case blocks of the first 5 case clauses, ensures that once any of the case constant matches a given value, its code block will be executed, but since there are no defined statements, it goes on to execute other case clauses until encountering a `break` system, that exits the program from execution.

## Switch Statement vs If Else Statement

`if else` statements is a conditional control structure that is used to compare against a pair of outcomes. This can only be either `true` or `false` responses, and any other custom matching required should always return a boolean. If else statements are used to evaluate at most 2 conditions.

Switch statements have better support for handling multilple result expressions unlike if else statement that mostly works on binary results of an expression, ie. there can only be 2 outcomes. Multiple conditions can be achieved with if else statements, by nesting multiple of if else statements together.

Even though it's possible to achieve similar control flow with `if else` statements, `switch case` offers more readablity of the code, as nested if conditions are not always quick to read through and understand flow of a program.  

An Example of an nested if else statement usage.

```javascript
let epoch_date = new Date('January 1, 1970 00:00:00')
var day = epoch_date.getDay()
if (day === 0) { 
    console.log("[IF] Epoch was on a weekend")
} else if (day <= 5){
    console.log("[IF ELSE] Epoch was on a weekeday")
} else  if (day === 6){
    console.log("[IF ELSE] Epoch was on a weekend")
} else {
    console.log("[ELSE] Invalid day of the week")
}
```

## When to use Switch Statement

Switch statements, as we have explored in the examples, is better suited for multiple cases of an expected result. While an if else statement would be better for cases with only 2 conditions.

## Wrap up