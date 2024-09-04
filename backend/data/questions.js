const questionsData = [
  {
    question: "Which of the following automata accepts only regular languages?",
    options: [
      "Finite Automaton",
      "Pushdown Automaton",
      "Turing Machine",
      "Linear Bounded Automaton",
    ],
    answer: ["Finite Automaton"],
    reason:
      "Finite automata are only capable of recognizing regular languages, as they lack memory or stack capabilities.",
  },
  {
    question:
      "What is the minimum number of states required to recognize the language L = {w | w ends with '01'}?",
    options: ["2", "3", "4", "5"],
    answer: ["3"],
    reason:
      "A minimum of 3 states are required: one for initial state, one for recognizing '0', and the final state after recognizing '01'.",
  },
  {
    question:
      "Can a non-deterministic finite automaton (NFA) be converted into an equivalent deterministic finite automaton (DFA)?",
    options: ["Yes", "No", "Sometimes", "Depends on the language"],
    answer: ["Yes"],
    reason:
      "Every NFA can be converted into an equivalent DFA that recognizes the same language.",
  },
  {
    question:
      "Which language is recognized by the following regular expression: (a|b)*abb?",
    options: [
      "All strings ending with 'abb'",
      "All strings containing 'abb'",
      "All strings beginning with 'abb'",
      "All strings with an even number of 'a's and 'b's",
    ],
    answer: ["All strings ending with 'abb'"],
    reason:
      "The regular expression (a|b)*abb matches any string of 'a' and 'b' characters that ends with 'abb'.",
  },
  {
    question: "What is the primary difference between a DFA and an NFA?",
    options: [
      "DFA has a unique transition for each state-symbol pair, while NFA may have multiple transitions",
      "DFA can recognize more languages than NFA",
      "NFA uses a stack memory, DFA does not",
      "DFA is faster than NFA in all cases",
    ],
    answer: [
      "DFA has a unique transition for each state-symbol pair, while NFA may have multiple transitions",
    ],
    reason:
      "In a DFA, each state has exactly one transition for each input symbol, whereas an NFA may have zero, one, or multiple transitions.",
  },
  {
    question:
      "Which of the following is true about a language recognized by a Turing machine?",
    options: [
      "It must be context-free",
      "It must be regular",
      "It may be recursively enumerable",
      "It must be deterministic",
    ],
    answer: ["It may be recursively enumerable"],
    reason:
      "Turing machines recognize recursively enumerable languages, which include all context-free and regular languages.",
  },
  {
    question: "Is the following language regular: L = {a^n b^n | n ≥ 0}?",
    options: ["Yes", "No", "Only if n = 0", "Depends on n"],
    answer: ["No"],
    reason:
      "The language L = {a^n b^n | n ≥ 0} is not regular because it requires counting, which finite automata cannot do.",
  },
  {
    question: "Which of the following is not a property of regular languages?",
    options: [
      "Closure under union",
      "Closure under intersection",
      "Closure under complementation",
      "Closure under concatenation",
    ],
    answer: ["Closure under intersection"],
    reason:
      "Regular languages are closed under union, complementation, and concatenation but not under intersection.",
  },
  {
    question:
      "Which operation on regular languages always produces a regular language?",
    options: ["Union", "Intersection", "Complement", "Concatenation"],
    answer: ["Union", "Complement", "Concatenation"],
    reason:
      "Regular languages are closed under union, complement, and concatenation operations.",
  },
  {
    question: "What is the role of the start state in a finite automaton?",
    options: [
      "It determines where the automaton begins its computation",
      "It is where the computation ends",
      "It is used to accept the input",
      "It is used for rejecting the input",
    ],
    answer: ["It determines where the automaton begins its computation"],
    reason:
      "The start state is where the finite automaton begins processing an input string.",
  },
  {
    question:
      "Which of the following strings is accepted by the DFA described by the transition diagram?",
    options: ["'aab'", "'abb'", "'baa'", "'bba'"],
    answer: ["'abb'"],
    reason:
      "The transition diagram indicates that the DFA accepts the string 'abb'.",
  },
  {
    question:
      "Which language is described by the following regular expression: (ab)*?",
    options: [
      "Even length strings of 'a' and 'b'",
      "Odd length strings of 'a' and 'b'",
      "All strings containing 'ab'",
      "Strings alternating 'a' and 'b'",
    ],
    answer: ["Even length strings of 'a' and 'b'"],
    reason:
      "The expression (ab)* matches strings composed of repeated 'ab' pairs, resulting in an even length.",
  },
  {
    question:
      "Is it possible for a finite automaton to recognize the language of all strings over {a, b} that contain an equal number of 'a's and 'b's?",
    options: [
      "Yes",
      "No",
      "Only if the length of strings is even",
      "Only if the length of strings is odd",
    ],
    answer: ["No"],
    reason:
      "A finite automaton cannot count and thus cannot recognize a language where the number of symbols must be balanced.",
  },
  {
    question:
      "Which of the following statements is true for context-free languages?",
    options: [
      "They can be recognized by a pushdown automaton",
      "They are a subset of regular languages",
      "They require a Turing machine for recognition",
      "They can only be generated by regular grammars",
    ],
    answer: ["They can be recognized by a pushdown automaton"],
    reason:
      "Context-free languages are recognized by pushdown automata, which utilize a stack to keep track of context.",
  },
  {
    question:
      "Which of the following operations does not necessarily preserve regularity?",
    options: ["Intersection", "Union", "Complement", "Reverse"],
    answer: ["Intersection"],
    reason:
      "The intersection of two regular languages does not necessarily result in a regular language.",
  },
  {
    question: "Which of the following is an example of a non-regular language?",
    options: [
      "L = {a^n b^m | n, m ≥ 0}",
      "L = {a^n b^n | n ≥ 0}",
      "L = {a^n | n is even}",
      "L = {a, b}*",
    ],
    answer: ["L = {a^n b^n | n ≥ 0}"],
    reason:
      "L = {a^n b^n | n ≥ 0} is non-regular because it requires counting, which cannot be done by finite automata.",
  },
  {
    question: "In which case is a language considered undecidable?",
    options: [
      "When it cannot be recognized by any Turing machine",
      "When it is not context-free",
      "When it is not regular",
      "When it is not context-sensitive",
    ],
    answer: ["When it cannot be recognized by any Turing machine"],
    reason:
      "An undecidable language is one for which no Turing machine can decide membership for all possible input strings.",
  },
  {
    question:
      "Which of the following is true about the language recognized by a deterministic finite automaton (DFA)?",
    options: [
      "It must be regular",
      "It may be context-free",
      "It may be recursively enumerable",
      "It can be non-deterministic",
    ],
    answer: ["It must be regular"],
    reason:
      "A DFA can only recognize regular languages because of its limited computational power.",
  },
  {
    question:
      "Which of the following languages is recognized by the regular expression a(b|c)*?",
    options: [
      "Strings starting with 'a'",
      "Strings ending with 'a'",
      "Strings containing both 'b' and 'c'",
      "Strings that are palindromes",
    ],
    answer: ["Strings starting with 'a'"],
    reason:
      "The expression a(b|c)* matches any string that starts with 'a' followed by zero or more occurrences of 'b' or 'c'.",
  },
  {
    question: "Is the language L = {w | w is a palindrome} regular?",
    options: [
      "Yes",
      "No",
      "Only if w is of even length",
      "Only if w is of odd length",
    ],
    answer: ["No"],
    reason:
      "The language of palindromes is not regular because checking for a palindrome requires memory beyond what finite automata can provide.",
  },
  {
    question:
      "Which of the following automata is the most powerful in terms of language recognition?",
    options: [
      "Finite Automaton",
      "Pushdown Automaton",
      "Turing Machine",
      "Linear Bounded Automaton",
    ],
    answer: ["Turing Machine"],
    reason:
      "The Turing machine is the most powerful automaton, capable of recognizing a broader class of languages, including those recognized by finite and pushdown automata.",
  },
  {
    question: "Which of the following automata accepts only regular languages?",
    options: [
      "Finite Automaton",
      "Pushdown Automaton",
      "Turing Machine",
      "Linear Bounded Automaton",
    ],
    answer: ["Finite Automaton"],
    reason:
      "Finite automata are only capable of recognizing regular languages, as they lack memory or stack capabilities.",
  },
  {
    question:
      "What is the minimum number of states required to recognize the language L = {w | w ends with '01'}?",
    options: ["2", "3", "4", "5"],
    answer: ["3"],
    reason:
      "A minimum of 3 states are required: one for initial state, one for recognizing '0', and the final state after recognizing '01'.",
  },
  {
    question:
      "Can a non-deterministic finite automaton (NFA) be converted into an equivalent deterministic finite automaton (DFA)?",
    options: ["Yes", "No", "Sometimes", "Depends on the language"],
    answer: ["Yes"],
    reason:
      "Every NFA can be converted into an equivalent DFA that recognizes the same language.",
  },
  {
    question:
      "Which language is recognized by the following regular expression: (a|b)*abb?",
    options: [
      "All strings ending with 'abb'",
      "All strings containing 'abb'",
      "All strings beginning with 'abb'",
      "All strings with an even number of 'a's and 'b's",
    ],
    answer: ["All strings ending with 'abb'"],
    reason:
      "The regular expression (a|b)*abb matches any string of 'a' and 'b' characters that ends with 'abb'.",
  },
  {
    question: "What is the primary difference between a DFA and an NFA?",
    options: [
      "DFA has a unique transition for each state-symbol pair, while NFA may have multiple transitions",
      "DFA can recognize more languages than NFA",
      "NFA uses a stack memory, DFA does not",
      "DFA is faster than NFA in all cases",
    ],
    answer: [
      "DFA has a unique transition for each state-symbol pair, while NFA may have multiple transitions",
    ],
    reason:
      "In a DFA, each state has exactly one transition for each input symbol, whereas an NFA may have zero, one, or multiple transitions.",
  },
  {
    question:
      "Which of the following is true about a language recognized by a Turing machine?",
    options: [
      "It must be context-free",
      "It must be regular",
      "It may be recursively enumerable",
      "It must be deterministic",
    ],
    answer: ["It may be recursively enumerable"],
    reason:
      "Turing machines recognize recursively enumerable languages, which include all context-free and regular languages.",
  },
  {
    question: "Is the following language regular: L = {a^n b^n | n ≥ 0}?",
    options: ["Yes", "No", "Only if n = 0", "Depends on n"],
    answer: ["No"],
    reason:
      "The language L = {a^n b^n | n ≥ 0} is not regular because it requires counting, which finite automata cannot do.",
  },
  {
    question: "Which of the following is not a property of regular languages?",
    options: [
      "Closure under union",
      "Closure under intersection",
      "Closure under complementation",
      "Closure under concatenation",
    ],
    answer: ["Closure under intersection"],
    reason:
      "Regular languages are closed under union, complementation, and concatenation but not under intersection.",
  },
  {
    question:
      "Which operation on regular languages always produces a regular language?",
    options: ["Union", "Intersection", "Complement", "Concatenation"],
    answer: ["Union", "Complement", "Concatenation"],
    reason:
      "Regular languages are closed under union, complement, and concatenation operations.",
  },
  {
    question: "What is the role of the start state in a finite automaton?",
    options: [
      "It determines where the automaton begins its computation",
      "It is where the computation ends",
      "It is used to accept the input",
      "It is used for rejecting the input",
    ],
    answer: ["It determines where the automaton begins its computation"],
    reason:
      "The start state is where the finite automaton begins processing an input string.",
  },
  {
    question:
      "Which of the following strings is accepted by the DFA described by the transition diagram?",
    options: ["'aab'", "'abb'", "'baa'", "'bba'"],
    answer: ["'abb'"],
    reason:
      "The transition diagram indicates that the DFA accepts the string 'abb'.",
  },
  {
    question:
      "Which language is described by the following regular expression: (ab)*?",
    options: [
      "Even length strings of 'a' and 'b'",
      "Odd length strings of 'a' and 'b'",
      "All strings containing 'ab'",
      "Strings alternating 'a' and 'b'",
    ],
    answer: ["Even length strings of 'a' and 'b'"],
    reason:
      "The expression (ab)* matches strings composed of repeated 'ab' pairs, resulting in an even length.",
  },
  {
    question:
      "Is it possible for a finite automaton to recognize the language of all strings over {a, b} that contain an equal number of 'a's and 'b's?",
    options: [
      "Yes",
      "No",
      "Only if the length of strings is even",
      "Only if the length of strings is odd",
    ],
    answer: ["No"],
    reason:
      "A finite automaton cannot count and thus cannot recognize a language where the number of symbols must be balanced.",
  },
  {
    question:
      "Which of the following statements is true for context-free languages?",
    options: [
      "They can be recognized by a pushdown automaton",
      "They are a subset of regular languages",
      "They require a Turing machine for recognition",
      "They can only be generated by regular grammars",
    ],
    answer: ["They can be recognized by a pushdown automaton"],
    reason:
      "Context-free languages are recognized by pushdown automata, which utilize a stack to keep track of context.",
  },
  {
    question:
      "Which of the following operations does not necessarily preserve regularity?",
    options: ["Intersection", "Union", "Complement", "Reverse"],
    answer: ["Intersection"],
    reason:
      "The intersection of two regular languages does not necessarily result in a regular language.",
  },
  {
    question: "Which of the following is an example of a non-regular language?",
    options: [
      "L = {a^n b^m | n, m ≥ 0}",
      "L = {a^n b^n | n ≥ 0}",
      "L = {a^n | n is even}",
      "L = {a, b}*",
    ],
    answer: ["L = {a^n b^n | n ≥ 0}"],
    reason:
      "L = {a^n b^n | n ≥ 0} is non-regular because it requires counting, which cannot be done by finite automata.",
  },
  {
    question: "In which case is a language considered undecidable?",
    options: [
      "When it cannot be recognized by any Turing machine",
      "When it is not context-free",
      "When it is not regular",
      "When it is not context-sensitive",
    ],
    answer: ["When it cannot be recognized by any Turing machine"],
    reason:
      "An undecidable language is one for which no Turing machine can decide membership for all possible input strings.",
  },
  {
    question:
      "Which of the following is true about the language recognized by a deterministic finite automaton (DFA)?",
    options: [
      "It must be regular",
      "It may be context-free",
      "It may be recursively enumerable",
      "It can be non-deterministic",
    ],
    answer: ["It must be regular"],
    reason:
      "A DFA can only recognize regular languages because of its limited computational power.",
  },
  {
    question:
      "Which of the following languages is recognized by the regular expression a(b|c)*?",
    options: [
      "Strings starting with 'a'",
      "Strings ending with 'a'",
      "Strings containing both 'b' and 'c'",
      "Strings that are palindromes",
    ],
    answer: ["Strings starting with 'a'"],
    reason:
      "The expression a(b|c)* matches any string that starts with 'a' followed by zero or more occurrences of 'b' or 'c'.",
  },
  {
    question: "Is the language L = {w | w is a palindrome} regular?",
    options: [
      "Yes",
      "No",
      "Only if w is of even length",
      "Only if w is of odd length",
    ],
    answer: ["No"],
    reason:
      "The language of palindromes is not regular because checking for a palindrome requires memory beyond what finite automata can provide.",
  },
  {
    question:
      "Which of the following automata is the most powerful in terms of language recognition?",
    options: [
      "Finite Automaton",
      "Pushdown Automaton",
      "Turing Machine",
      "Linear Bounded Automaton",
    ],
    answer: ["Turing Machine"],
    reason:
      "The Turing machine is the most powerful automaton, capable of recognizing a broader class of languages, including those recognized by finite and pushdown automata.",
  },
  {
    question:
      "Which of the following is true about a Turing machine with a two-way infinite tape?",
    options: [
      "It has the same computational power as a Turing machine with a one-way infinite tape",
      "It is more powerful than a Turing machine with a one-way infinite tape",
      "It can recognize more languages",
      "It is less powerful than a Turing machine with a one-way infinite tape",
    ],
    answer: [
      "It has the same computational power as a Turing machine with a one-way infinite tape",
    ],
    reason:
      "Both types of Turing machines have the same computational power; the tape's infinity in one or both directions doesn't increase computational capability.",
  },
  {
    question:
      "What is the language recognized by the regular expression (a|b)*a?",
    options: [
      "All strings over {a, b} that end with 'a'",
      "All strings over {a, b} that start with 'a'",
      "All strings over {a, b} containing 'a'",
      "All strings over {a, b} without 'b'",
    ],
    answer: ["All strings over {a, b} that end with 'a'"],
    reason:
      "The regular expression (a|b)*a matches any string of 'a's and 'b's that ends with 'a'.",
  },
  {
    question:
      "Which of the following is true about a language that is context-sensitive?",
    options: [
      "It is also context-free",
      "It can be recognized by a linear bounded automaton",
      "It is always regular",
      "It can be recognized by a finite automaton",
    ],
    answer: ["It can be recognized by a linear bounded automaton"],
    reason:
      "Context-sensitive languages are recognized by linear bounded automata, which are Turing machines with bounded tape.",
  },
  {
    question: "What does the pumping lemma for regular languages demonstrate?",
    options: [
      "That regular languages have a repeating pattern",
      "That regular languages are closed under intersection",
      "That all finite languages are regular",
      "That all infinite languages are regular",
    ],
    answer: ["That regular languages have a repeating pattern"],
    reason:
      "The pumping lemma for regular languages shows that if a language is regular, strings within the language can be 'pumped' or repeated in a pattern.",
  },
  {
    question:
      "Can a finite automaton recognize the language of balanced parentheses?",
    options: [
      "Yes",
      "No",
      "Only if the length of the string is even",
      "Only if the length of the string is odd",
    ],
    answer: ["No"],
    reason:
      "The language of balanced parentheses requires a stack for counting, which finite automata do not have, thus making it non-regular.",
  },
  {
    question:
      "Which of the following statements is true for a language recognized by a pushdown automaton (PDA)?",
    options: [
      "It must be context-free",
      "It must be regular",
      "It must be recursively enumerable",
      "It must be context-sensitive",
    ],
    answer: ["It must be context-free"],
    reason:
      "Pushdown automata are used to recognize context-free languages, which can be generated by context-free grammars.",
  },
  {
    question: "Which of the following is an undecidable problem?",
    options: [
      "Determining if a DFA recognizes a particular string",
      "Determining if a context-free grammar generates an empty language",
      "Determining if a Turing machine halts on all inputs",
      "Determining if a regular language is finite",
    ],
    answer: ["Determining if a Turing machine halts on all inputs"],
    reason:
      "The halting problem, which asks whether a Turing machine halts on all inputs, is a classic example of an undecidable problem.",
  },
  {
    question:
      "Which of the following is an example of a language that is context-free but not regular?",
    options: [
      "L = {a^n b^n | n ≥ 0}",
      "L = {a^n | n is even}",
      "L = {a, b}*",
      "L = {a^m b^n | m, n ≥ 0}",
    ],
    answer: ["L = {a^n b^n | n ≥ 0}"],
    reason:
      "The language L = {a^n b^n | n ≥ 0} is context-free because it can be generated by a context-free grammar, but it is not regular because it requires counting.",
  },
  {
    question:
      "Which of the following is true about a linear bounded automaton (LBA)?",
    options: [
      "It is more powerful than a pushdown automaton",
      "It is less powerful than a Turing machine",
      "It can recognize context-sensitive languages",
      "All of the above",
    ],
    answer: ["All of the above"],
    reason:
      "An LBA is indeed more powerful than a pushdown automaton, less powerful than a Turing machine, and can recognize context-sensitive languages.",
  },
  {
    question:
      "What is the purpose of the transition function in a finite automaton?",
    options: [
      "To determine the next state based on the current state and input symbol",
      "To determine whether the input string is accepted",
      "To generate the output string",
      "To check if the automaton is deterministic",
    ],
    answer: [
      "To determine the next state based on the current state and input symbol",
    ],
    reason:
      "The transition function in a finite automaton defines how the automaton moves from one state to another based on the current state and input symbol.",
  },
  {
    question:
      "Which of the following languages is recognized by a DFA but not an NFA?",
    options: [
      "No such language exists",
      "L = {a^n b^n | n ≥ 0}",
      "L = {a^n | n is even}",
      "L = {a^m b^n | m, n ≥ 0}",
    ],
    answer: ["No such language exists"],
    reason:
      "Any language recognized by a DFA can also be recognized by an NFA, and vice versa.",
  },
  {
    question:
      "Which of the following is true for a non-deterministic finite automaton (NFA)?",
    options: [
      "It may have multiple transitions for the same input from a given state",
      "It must be deterministic",
      "It can recognize more languages than a DFA",
      "It cannot be converted to a DFA",
    ],
    answer: [
      "It may have multiple transitions for the same input from a given state",
    ],
    reason:
      "In an NFA, for a given state and input symbol, there can be multiple possible next states.",
  },
  {
    question:
      "Which of the following is an example of a context-sensitive language?",
    options: [
      "L = {a^n b^n c^n | n ≥ 0}",
      "L = {a^n b^n | n ≥ 0}",
      "L = {a^n | n is even}",
      "L = {a, b}*",
    ],
    answer: ["L = {a^n b^n c^n | n ≥ 0}"],
    reason:
      "The language L = {a^n b^n c^n | n ≥ 0} is context-sensitive because it requires maintaining a balance among the numbers of 'a', 'b', and 'c'.",
  },
  {
    question:
      "What is the complexity of checking if a string is accepted by a DFA?",
    options: ["O(n)", "O(n^2)", "O(2^n)", "O(n log n)"],
    answer: ["O(n)"],
    reason:
      "Checking if a string is accepted by a DFA requires linear time, as each character in the string must be processed exactly once.",
  },
  {
    question:
      "Which of the following describes a language recognized by a deterministic pushdown automaton (DPDA) but not a non-deterministic pushdown automaton (NPDA)?",
    options: [
      "No such language exists",
      "L = {a^n b^n c^n | n ≥ 0}",
      "L = {a^n b^n | n ≥ 0}",
      "L = {a^m b^n | m, n ≥ 0}",
    ],
    answer: ["No such language exists"],
    reason:
      "Any language recognized by a DPDA can also be recognized by an NPDA, but not vice versa.",
  },
  {
    question:
      "Which of the following is true about a context-free grammar (CFG)?",
    options: [
      "It generates context-free languages",
      "It cannot generate regular languages",
      "It can generate all possible languages",
      "It is less powerful than a regular grammar",
    ],
    answer: ["It generates context-free languages"],
    reason:
      "A context-free grammar is used to generate context-free languages, which include but are not limited to regular languages.",
  },
  {
    question: "What is the Chomsky hierarchy?",
    options: [
      "A classification of grammars by their generative power",
      "A method for converting regular expressions to finite automata",
      "A procedure for minimizing DFAs",
      "A technique for parsing context-free grammars",
    ],
    answer: ["A classification of grammars by their generative power"],
    reason:
      "The Chomsky hierarchy is a classification of formal grammars in terms of their generative power, including regular, context-free, context-sensitive, and recursively enumerable languages.",
  },
  {
    question:
      "What is the relationship between regular languages and context-free languages?",
    options: [
      "All regular languages are context-free, but not all context-free languages are regular",
      "All context-free languages are regular, but not all regular languages are context-free",
      "Regular languages and context-free languages are disjoint sets",
      "All regular languages and context-free languages are equivalent",
    ],
    answer: [
      "All regular languages are context-free, but not all context-free languages are regular",
    ],
    reason:
      "Regular languages are a subset of context-free languages, meaning every regular language is context-free, but there are context-free languages that are not regular.",
  },
  {
    question: "What is the purpose of a stack in a pushdown automaton?",
    options: [
      "To store and retrieve symbols based on last-in, first-out (LIFO) order",
      "To store input symbols for future transitions",
      "To determine if the input string is accepted",
      "To generate the output string",
    ],
    answer: [
      "To store and retrieve symbols based on last-in, first-out (LIFO) order",
    ],
    reason:
      "The stack in a pushdown automaton is used to store symbols in a LIFO manner, which is essential for recognizing context-free languages.",
  },
];
module.exports={questionsData}