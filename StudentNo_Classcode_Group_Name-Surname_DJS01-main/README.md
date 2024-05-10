# DJS01: Mars Climate Orbiter Challenge

## Introduction

To highlight the importance of precise computations, this task involved simulating a similar problem in a spacecraft navigation system, similar to the Climate Orbiter on Mars.

##### Problem Areas to Address

1. **Unit Mismatch**: The provided functions fail to convert units correctly, leading to calculation inaccuracies.
2. **Parameter Misalignment**: Parameters are not handled in a way that prevents or highlights the potential for unit mismatch errors, leading to possible confusion.

## Elements Included

**Form Handling:** In this code, I used form inputs for the dividend (dividend) and divider (divider). Additionally, I output the result of the division (result) and included error messages (error).
**Form Submission:** I implemented a form submission event listener and prevented the default behavior to manage the division calculation manually.
**Input Validation: To ensure the code's robustness, I added checks for empty inputs, valid numbers, and division by zero scenarios.
**Critical Text Handling:** For an additional layer of security, I included logic to detect specific text inputs ('YOLO' and '+++') and trigger a critical error message that replaces the screen content.
**DOM Manipulation:\*\* To update and manage content dynamically, I utilized DOM methods such as innerText and innerHTML.

## Reflections

### Areas of Mastery

**Form Handling:** My proficiency in JavaScript allowed me to handle form submissions effectively. I used FormData and object destructuring to extract input values efficiently.
**Input Validation:** I implemented thorough input validation checks, which ensured the code's robustness in handling various scenarios like empty values, invalid numbers, and division by zero.
**Error Handling:** In the face of multiple error scenarios, I was able to provide users with clear and informative error messages to improve their experience with the application.

## Challenges Faced

To say the least, ensuring that all possible errors were accounted for and that the corresponding error messages were accurate and helpful proved to be a challenging but rewarding task. Also implementing logic to detect critical text inputs required careful planning and execution, as I needed to ensure that it did not interfere with regular input validations.

## Overall Learning Experience

Working on debugging, refactoring, and enhancing the JavaScript functions solidified my knowledge and skill level regarding concepts like error handling, and critical text detection. Solving problems such as error handling and critical text detection is improving my ability to solve problems.
