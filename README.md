# CodeLogic101

Welcome to **CodeLogic101** — a repository dedicated to my journey of studying and mastering programming logic.  
Here you’ll find exercises, notes, and projects that strengthen problem-solving skills and logical reasoning in code.

---

## Purpose
The main goal of this repository is to:
- Practice **programming logic** through structured exercises.
- Develop **algorithmic thinking** and problem-solving strategies.
- Build a solid foundation for learning advanced programming concepts.

---

## Contents
- **Exercises/** → Hands-on logic problems and solutions.

## Topics Covered
- Variables & Data Types  
- Control Structures (if/else, loops)  
- Functions & Modular Thinking  
- Algorithms & Pseudocode  
- Problem-Solving Patterns  

---

## Learning Philosophy
Programming is not just about syntax — it’s about **thinking logically**.  
This repository is my sandbox for experimenting, making mistakes, and growing as a developer.

---

## Future Plans
- Add more advanced exercises (recursion, sorting algorithms, data structures).  
- Document problem-solving strategies for each exercise.  
- Expand into multiple programming languages for comparison.  

---

## Contributions
This is primarily a personal study space, but suggestions and improvements are welcome!  
Feel free to open an issue or submit a pull request.

---

## License
This repository is licensed under the MIT License — free to use, learn, and share.


***

# **100 Progressive Programming Exercises**

## **Level 1 — Foundations (1–15)**

_Basics, I/O, variables, arithmetic_

1. **Hello, World** — print exactly `"Hello, World!"`.
2. **Simple Sum (formatted)** — read two integers and print `SUM = X`.
3. **Difference & Product** — read two integers; print their difference and product (two lines).
4. **Average of Three** — read 3 floats; print average with 2 decimals.
5. **Temperature Converter** — C → F using `F = C * 9/5 + 32`.
6. **Simple Interest** — compute `SI = (P*R*T)/100`.
7. **Even or Odd** — print `EVEN` or `ODD`.
8. **Max of Two** — print the larger of two integers.
9. **Max of Three** — print the largest of three numbers.
10. **Absolute Value** — read an integer; print `|x|`.
11. **Last Digit** — print last digit of an integer (handle negatives).
12. **Triangle Validity** — check triangle inequality.
13. **Leap Year** — print `LEAP` or `COMMON`.
14. **Minutes → H:M** — convert whole minutes to `hours:minutes`.
15. **Power (Non‑negative)** — compute `a^n` for integer `n ≥ 0` (iterative).

---

## **Level 2 — Conditionals & Strings (16–30)**

_Branching, validations, basic string transformations_

16. **Grade Classifier** — map 0–100 to A/B/C/D/F with exact boundaries.
17. **Sign of Product (3 integers)** — output `+`, `-`, or `0` without multiplying.
18. **Password Validator (rules)** — length ≥ 8 and ≥ 1 digit → `"VALID"`/`"INVALID"`.
19. **Password Strength (simple)** — `"STRONG"` if ≥8 and has digit & letter; else `"WEAK"`.
20. **Count Vowels** — count a/e/i/o/u (case-insensitive).
21. **Count Consonants** — ignore digits/symbols.
22. **Replace Spaces** — replace spaces with underscores.
23. **Remove Extra Spaces** — collapse consecutive spaces to one.
24. **Reverse String** — reverse characters of a string.
25. **Palindrome (basic)** — `"YES"`/`"NO"`; exact compare.
26. **Palindrome (case-insensitive)** — ignore letter case.
27. **Normalize & Word Count** — normalize spaces, then count words.
28. **Longest Word** — return the longest token (first on ties).
29. **Validate Identifier** — starts with letter/underscore; then letters/digits/underscore.
30. **Caesar Cipher (Shift)** — shift letters by `k`, preserve case; leave non-letters.

---

## **Level 3 — Loops & Basic Number Theory (31–45)**

_Iterative patterns, digit work, sequences_

31. **Multiplication Table** — print `n × i = r` for `i=1..10`.
32. **Sum 1..N** — loop or formula `N*(N+1)/2`.
33. **Sum of N Numbers** — read N values and sum them.
34. **Weighted Average** — from input pairs `(value, weight)`.
35. **Factorial (0..12)** — compute `n!`.
36. **Fibonacci (first N terms)** — `0 1 1 2 3 …`.
37. **Sum of Digits** — sum digits of a non-negative integer.
38. **Count Digits** — count digits of an integer (handle `0` and negatives).
39. **Armstrong Number (3-digit)** — check if equal to sum of cubes of digits.
40. **Decimal → Binary (manual)** — no built-ins.
41. **Harmonic Series** — compute `H_n = 1 + 1/2 + … + 1/n`.
42. **First N Multiples of 7** — print them on one line.
43. **Additive Persistence** — repeatedly sum digits until one digit remains.
44. **Collatz Length** — sequence length until reaching 1.
45. **Prime Checker (√N)** — determine whether N is prime efficiently.

---

## **Level 4 — Arrays, Searching & Sorting (46–60)**

_Arrays, frequency maps, classic sorts/search_

46. **Array Min & Max** — print min and max.
47. **Second Largest (distinct)** — print second largest or `"NA"` if none.
48. **Count Occurrences of X** — count in an array.
49. **Linear Search (index)** — first index or `-1`.
50. **Remove Duplicates (Stable)** — keep first occurrences only.
51. **Selection Sort** — in-place implementation.
52. **Insertion Sort (Trace)** — print array after each insertion step.
53. **Counting Sort** — for non-negative integers with known upper bound.
54. **Rotate Array Right by K** — handle `K ≥ N`.
55. **Merge Two Sorted Arrays** — stable merge.
56. **Pair With Given Sum (YES/NO)** — 2-sum existence using a set.
57. **Two-Sum (Indices)** — return any valid pair of indices.
58. **Majority Element (> N/2)** — Boyer–Moore or counting.
59. **Longest Positive Block** — length of the longest contiguous segment with values `> 0`.
60. **Character Frequency** — frequency of each character in a string.

---

## **Level 5 — Sets & String Analysis (61–75)**

_Sets, anagrams, token statistics, transformations_

61. **Set Intersection (unique)** — common values from two lists.
62. **Anagram Check** — case-insensitive.
63. **Anagram (ignore spaces/punct.)** — normalize then compare.
64. **Token Statistics** — longest, shortest, average token length.
65. **Balanced Parentheses** — `()` via stack.
66. **Balanced Brackets Full** — `()[]{}` via stack.
67. **First Unique Character** — index or `-1`.
68. **Run-Length Encoding** — e.g., `aaabbc → a3b2c1`.
69. **RLE Decode** — inverse of RLE (assume valid).
70. **Identifier Validation (strict)** — forbid leading digit; allow letters/digits/underscore only.
71. **Case-Sensitive vs Insensitive Sort** — compare results of both sorts.
72. **CamelCase → snake_case** — string conversion.
73. **snake_case → CamelCase** — string conversion.
74. **Anagram Groups** — group words by anagram key.
75. **Remove Non-Alphanumeric** — normalize a string to letters/digits only.

---

## **Level 6 — Math, Number Theory & Algorithms (76–85)**

_GCD/LCM, modular arithmetic, bases, rational ops_

76. **GCD (Euclid)** — iterative modulo algorithm.
77. **LCM via GCD** — `LCM(a,b) = |ab|/GCD(a,b)`.
78. **Primes in Interval [A, B]** — list all primes.
79. **Sieve of Eratosthenes** — generate primes up to N.
80. **Rule of Three** — solve `a:b = c:x`.
81. **Validate CPF (simplified)** — compute and check verifying digits.
82. **Add Fractions** — reduce using GCD.
83. **Modular Exponentiation** — fast exponentiation `(a^b) mod m`.
84. **Base-10 → Base (2–36)** — encode digits 0–9, A–Z.
85. **Base (2–36) → Base-10** — decode to integer.

---

## **Level 7 — Recursion, Backtracking & Dynamic Programming (86–95)**

_Classics in recursion and DP_

86. **Recursive Power** — `pow(a, n)` recursively.
87. **Fibonacci (Memoized)** — top-down with cache.
88. **Grid Paths (DP)** — count paths moving only right/down.
89. **Tower of Hanoi** — print moves A → C using B.
90. **Binary Search (sorted array)** — return index or `-1`.
91. **LCS Length** — dynamic programming table.
92. **Sliding Window Maximum (k)** — output max per window.
93. **Subset Sum (DP)** — boolean table approach.
94. **Edit Distance (Levenshtein)** — DP with insert/delete/replace.
95. **Longest Increasing Subsequence (O(n²))** — DP solution.

---

## **Level 8 — Advanced Structures, Intervals, Graphs & Simulation (96–100)**

_Interval scheduling, validation, traversal, simulation_

96. **Sudoku Checker (9×9)** — validate rows, columns, and 3×3 boxes.
97. **Meeting Rooms** — minimum rooms needed (sweep line or min-heap).
98. **Game of Life (K steps)** — update grid K times by rules.
99. **Merge Intervals** — merge overlapping `[start, end]`.
100. **Graph Traversal (BFS & DFS)** — print visitation order from source.
