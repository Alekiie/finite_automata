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
  {
    question:
      "What is a distinguishing characteristic of a deterministic finite automaton (DFA)?",
    options: [
      "It has exactly one transition for each symbol in the alphabet from each state",
      "It can have multiple transitions for the same symbol from the same state",
      "It always accepts regular languages",
      "It has an infinite number of states",
    ],
    answer: [
      "It has exactly one transition for each symbol in the alphabet from each state",
    ],
    reason:
      "A DFA has a single, well-defined transition for each symbol, making its behavior predictable and deterministic.",
  },
  {
    question:
      "Which type of language is accepted by a non-deterministic finite automaton (NFA)?",
    options: [
      "Context-free languages",
      "Regular languages",
      "Context-sensitive languages",
      "Unrestricted languages",
    ],
    answer: ["Regular languages"],
    reason:
      "NFAs accept regular languages, just like DFAs, though they may have multiple possible transitions for a given input.",
  },
  {
    question:
      "What does it mean if a state in a finite automaton is an accepting state?",
    options: [
      "It indicates that the automaton has reached its final state",
      "It indicates that the input string has been successfully processed and accepted",
      "It indicates that the automaton will transition to a new state",
      "It indicates that the automaton has no further transitions to process",
    ],
    answer: [
      "It indicates that the input string has been successfully processed and accepted",
    ],
    reason:
      "An accepting state means that the automaton has read the entire input string and determined that it belongs to the language it accepts.",
  },
  {
    question: "What distinguishes a DFA from an NFA?",
    options: [
      "A DFA can have multiple transitions for the same input symbol from a single state",
      "An NFA can have epsilon (empty string) transitions",
      "An NFA can have infinite states",
      "A DFA accepts non-regular languages",
    ],
    answer: ["An NFA can have epsilon (empty string) transitions"],
    reason:
      "NFAs allow transitions without consuming input symbols (epsilon transitions), unlike DFAs, which require a transition for every input symbol.",
  },
  {
    question: "What is the significance of epsilon transitions in an NFA?",
    options: [
      "They allow the automaton to change states without consuming input symbols",
      "They enable the automaton to process context-sensitive languages",
      "They are used to backtrack in case of an incorrect input",
      "They ensure that the automaton reaches an accepting state",
    ],
    answer: [
      "They allow the automaton to change states without consuming input symbols",
    ],
    reason:
      "Epsilon transitions in NFAs enable state transitions without processing an input symbol, adding flexibility in the automaton's behavior.",
  },
  {
    question: "Which of the following is true about regular languages?",
    options: [
      "They can be represented by both DFAs and NFAs",
      "They require context-free grammars for representation",
      "They cannot be expressed using regular expressions",
      "They are a superset of context-free languages",
    ],
    answer: ["They can be represented by both DFAs and NFAs"],
    reason:
      "Regular languages can be accepted by both DFAs and NFAs and can also be described using regular expressions.",
  },
  {
    question: "What is the purpose of the start state in a finite automaton?",
    options: [
      "It determines where the automaton begins processing the input",
      "It identifies the first accepting state",
      "It stores the input string",
      "It processes the last symbol of the input",
    ],
    answer: ["It determines where the automaton begins processing the input"],
    reason:
      "The start state is the initial state of the automaton, where it begins processing the input string.",
  },
  {
    question: "In which of the following cases is a language not regular?",
    options: [
      "When it can be described by a regular expression",
      "When it requires a context-free grammar for recognition",
      "When it can be accepted by a DFA",
      "When it can be recognized by an NFA",
    ],
    answer: ["When it requires a context-free grammar for recognition"],
    reason:
      "Languages that require context-free grammars are not regular languages, as they exceed the capabilities of finite automata.",
  },
  {
    question: "What is the role of transitions in finite automata?",
    options: [
      "They specify how the automaton moves between states based on input symbols",
      "They define the starting and ending points of the automaton",
      "They store input symbols for future use",
      "They generate the output string for the automaton",
    ],
    answer: [
      "They specify how the automaton moves between states based on input symbols",
    ],
    reason:
      "Transitions define how the automaton moves from one state to another when processing each input symbol.",
  },
  {
    question: "How are non-deterministic transitions handled in an NFA?",
    options: [
      "The automaton explores all possible transitions simultaneously",
      "The automaton chooses the first available transition",
      "The automaton backtracks if the wrong transition is chosen",
      "The automaton ignores non-deterministic transitions",
    ],
    answer: ["The automaton explores all possible transitions simultaneously"],
    reason:
      "An NFA can take multiple possible transitions from a given state and explore them simultaneously, effectively evaluating all options.",
  },
  {
    question:
      "What is the pumping lemma used for in the context of regular languages?",
    options: [
      "To prove that a language is regular",
      "To prove that a language is not regular",
      "To generate strings accepted by a DFA",
      "To minimize the number of states in a DFA",
    ],
    answer: ["To prove that a language is not regular"],
    reason:
      "The pumping lemma provides a way to prove that a language is not regular by demonstrating that strings within the language cannot be 'pumped' or repeated as required by the lemma.",
  },
  {
    question:
      "What is a distinguishing feature of context-free languages compared to regular languages?",
    options: [
      "Context-free languages can be recognized by pushdown automata",
      "Context-free languages can be represented by finite automata",
      "Context-free languages require regular expressions for their definition",
      "Context-free languages are a subset of regular languages",
    ],
    answer: ["Context-free languages can be recognized by pushdown automata"],
    reason:
      "Pushdown automata, which use a stack for memory, are capable of recognizing context-free languages, whereas finite automata are limited to regular languages.",
  },
  {
    question: "What does it mean if a finite automaton is non-deterministic?",
    options: [
      "It can have multiple possible transitions for the same input symbol from a given state",
      "It must backtrack when an incorrect input is processed",
      "It has no accepting states",
      "It accepts only context-free languages",
    ],
    answer: [
      "It can have multiple possible transitions for the same input symbol from a given state",
    ],
    reason:
      "A non-deterministic finite automaton (NFA) allows multiple transitions for the same input symbol, making its behavior non-deterministic.",
  },
  {
    question:
      "Which of the following is true about deterministic context-free languages?",
    options: [
      "They are accepted by deterministic pushdown automata",
      "They require a Turing machine for recognition",
      "They are a superset of regular languages",
      "They cannot be expressed using grammars",
    ],
    answer: ["They are accepted by deterministic pushdown automata"],
    reason:
      "Deterministic context-free languages are accepted by deterministic pushdown automata (DPDAs), which are a stricter form of PDA compared to non-deterministic ones.",
  },
  {
    question: "Which operation is closed under regular languages?",
    options: [
      "Union",
      "Intersection with context-free languages",
      "Complement with context-sensitive languages",
      "Concatenation with context-sensitive languages",
    ],
    answer: ["Union"],
    reason:
      "Regular languages are closed under union, meaning that the union of two regular languages is also regular.",
  },
  {
    question:
      "How can a finite automaton be converted to a regular expression?",
    options: [
      "By using state elimination",
      "By creating a context-free grammar",
      "By constructing a pushdown automaton",
      "By generating a Turing machine",
    ],
    answer: ["By using state elimination"],
    reason:
      "The state elimination method can be used to convert a finite automaton into a regular expression that describes the same language.",
  },
  {
    question: "What does it mean if a language is described as regular?",
    options: [
      "It can be accepted by a finite automaton",
      "It requires a context-free grammar for recognition",
      "It can only be described by a context-sensitive grammar",
      "It can be recognized by a Turing machine",
    ],
    answer: ["It can be accepted by a finite automaton"],
    reason:
      "A regular language can be accepted by a finite automaton and does not require the computational power of a pushdown automaton or Turing machine.",
  },
  {
    question: "What is the purpose of the transition function in a DFA?",
    options: [
      "To define how the automaton moves between states based on the input",
      "To identify the initial state of the automaton",
      "To determine if the input string is accepted",
      "To count the number of input symbols processed",
    ],
    answer: [
      "To define how the automaton moves between states based on the input",
    ],
    reason:
      "The transition function determines how a DFA moves from one state to another for each input symbol it processes.",
  },
  {
    question:
      "What does it mean if a regular language is closed under complement?",
    options: [
      "The complement of the regular language is also a regular language",
      "The complement of the regular language is a context-free language",
      "The complement of the regular language is an empty set",
      "The regular language does not have a complement",
    ],
    answer: [
      "The complement of the regular language is also a regular language",
    ],
    reason:
      "Regular languages are closed under complement, meaning that if a language is regular, its complement is also regular.",
  },
  {
    question: "What is the relationship between a DFA and an NFA?",
    options: [
      "Every NFA can be converted to an equivalent DFA",
      "Every DFA can be converted to an NFA, but not the reverse",
      "NFAs accept a larger class of languages than DFAs",
      "DFAs require fewer states than NFAs for every language",
    ],
    answer: ["Every NFA can be converted to an equivalent DFA"],
    reason:
      "NFAs and DFAs accept the same class of languages, and every NFA can be converted into a DFA, though the DFA may have more states.",
  },
  {
    question:
      "Which of the following correctly describes a regular expression?",
    options: [
      "A formal way to describe a regular language",
      "A method to describe context-free languages",
      "A finite automaton with epsilon transitions",
      "A deterministic Turing machine",
    ],
    answer: ["A formal way to describe a regular language"],
    reason:
      "A regular expression is a formal way of describing regular languages, using symbols and operators like union, concatenation, and Kleene star.",
  },
  {
    question:
      "What is the role of the Kleene star (*) in a regular expression?",
    options: [
      "It indicates zero or more occurrences of the preceding element",
      "It matches exactly one occurrence of the preceding element",
      "It represents an accepting state in the automaton",
      "It separates different expressions",
    ],
    answer: ["It indicates zero or more occurrences of the preceding element"],
    reason:
      "In a regular expression, the Kleene star (*) denotes zero or more repetitions of the element before it, allowing flexibility in matching strings.",
  },
  {
    question:
      "Which of the following languages cannot be recognized by a finite automaton?",
    options: ["Anbn", "a*b", "a+b", "a*"],
    answer: ["Anbn"],
    reason:
      "The language Anbn is not regular, as it requires memory to match the number of 'a's with the number of 'b's, which finite automata do not have.",
  },
  {
    question:
      "Which type of automaton is capable of recognizing a context-free language?",
    options: [
      "Pushdown automaton",
      "Finite automaton",
      "Turing machine",
      "Regular expression",
    ],
    answer: ["Pushdown automaton"],
    reason:
      "A pushdown automaton, which uses a stack, can recognize context-free languages, while a finite automaton cannot.",
  },
  {
    question: "How can a DFA be minimized?",
    options: [
      "By merging equivalent states",
      "By adding epsilon transitions",
      "By converting it to an NFA",
      "By removing the start state",
    ],
    answer: ["By merging equivalent states"],
    reason:
      "Minimizing a DFA involves identifying and merging equivalent states, reducing the number of states without changing the language it accepts.",
  },
  {
    question:
      "Which of the following is not a valid operation for regular languages?",
    options: [
      "Intersection with a context-free language",
      "Union with another regular language",
      "Concatenation with another regular language",
      "Kleene star applied to a regular language",
    ],
    answer: ["Intersection with a context-free language"],
    reason:
      "Regular languages are not closed under intersection with context-free languages, but they are closed under union, concatenation, and Kleene star.",
  },
  {
    question:
      "What is the primary use of the transition table in a finite automaton?",
    options: [
      "To define the transitions between states based on the input symbols",
      "To determine the output string generated by the automaton",
      "To minimize the number of states in the automaton",
      "To generate the input string for the automaton",
    ],
    answer: [
      "To define the transitions between states based on the input symbols",
    ],
    reason:
      "The transition table of a finite automaton specifies the state transitions for each input symbol, defining how the automaton processes strings.",
  },
  {
    question:
      "How can the language recognized by a pushdown automaton be described?",
    options: [
      "As a context-free language",
      "As a regular language",
      "As a context-sensitive language",
      "As a recursive language",
    ],
    answer: ["As a context-free language"],
    reason:
      "Pushdown automata recognize context-free languages by utilizing a stack to store and retrieve information during computation.",
  },
  {
    question: "What happens if a string reaches an accepting state in a DFA?",
    options: [
      "The string is accepted by the DFA",
      "The string is rejected by the DFA",
      "The DFA moves back to the start state",
      "The DFA continues processing the next input string",
    ],
    answer: ["The string is accepted by the DFA"],
    reason:
      "When a string reaches an accepting state in a DFA, it indicates that the string is valid according to the rules defined by the DFA.",
  },
  {
    question:
      "Which of the following properties is unique to pushdown automata compared to finite automata?",
    options: [
      "The use of a stack for memory",
      "The use of a transition table",
      "The use of regular expressions",
      "The ability to recognize regular languages",
    ],
    answer: ["The use of a stack for memory"],
    reason:
      "Pushdown automata utilize a stack to handle more complex language recognition tasks, like context-free languages, which is a key difference from finite automata.",
  },
  {
    question: "What type of grammar generates regular languages?",
    options: [
      "Right-linear grammar",
      "Context-free grammar",
      "Context-sensitive grammar",
      "Unrestricted grammar",
    ],
    answer: ["Right-linear grammar"],
    reason:
      "Regular languages can be generated by right-linear grammars, where all productions have a single terminal symbol possibly followed by a non-terminal.",
  },
  {
    question:
      "Which of the following is true about non-deterministic pushdown automata (NPDA)?",
    options: [
      "They can accept some languages that deterministic pushdown automata (DPDA) cannot",
      "They can only accept regular languages",
      "They are equivalent to finite automata",
      "They use two stacks instead of one",
    ],
    answer: [
      "They can accept some languages that deterministic pushdown automata (DPDA) cannot",
    ],
    reason:
      "Non-deterministic pushdown automata are more powerful than deterministic pushdown automata, as they can recognize a broader set of context-free languages.",
  },
  {
    question:
      "What is the key difference between a deterministic finite automaton (DFA) and a non-deterministic finite automaton (NFA)?",
    options: [
      "An NFA can have multiple possible transitions for a given input, while a DFA cannot",
      "A DFA can process multiple input symbols at once",
      "An NFA has an infinite number of states, while a DFA has a finite number",
      "A DFA can accept a larger class of languages than an NFA",
    ],
    answer: [
      "An NFA can have multiple possible transitions for a given input, while a DFA cannot",
    ],
    reason:
      "The key difference between an NFA and a DFA is that an NFA allows multiple transitions for a given input symbol, while a DFA must have exactly one transition for each symbol.",
  },
  {
    question: "Which of the following problems is undecidable?",
    options: [
      "Determining whether a context-free grammar is ambiguous",
      "Checking if a DFA accepts a string",
      "Minimizing a DFA",
      "Converting an NFA to a DFA",
    ],
    answer: ["Determining whether a context-free grammar is ambiguous"],
    reason:
      "It is undecidable whether a given context-free grammar is ambiguous, meaning there is no algorithm that can determine this in all cases.",
  },
  {
    question:
      "Which type of automaton is equivalent to a Turing machine with two stacks?",
    options: [
      "Pushdown automaton",
      "Non-deterministic finite automaton",
      "Deterministic finite automaton",
      "Linear bounded automaton",
    ],
    answer: ["Pushdown automaton"],
    reason:
      "A pushdown automaton with two stacks is equivalent in power to a Turing machine, meaning it can recognize the same class of languages.",
  },
  {
    question:
      "What is the significance of epsilon (ε) transitions in finite automata?",
    options: [
      "They allow the automaton to change states without consuming an input symbol",
      "They indicate the automaton has finished processing the input",
      "They signify an accepting state",
      "They define the start state of the automaton",
    ],
    answer: [
      "They allow the automaton to change states without consuming an input symbol",
    ],
    reason:
      "Epsilon (ε) transitions in finite automata enable state transitions without reading an input symbol, which is characteristic of non-deterministic finite automata (NFA).",
  },
  {
    question: "Which of the following can be recognized by a finite automaton?",
    options: [
      "All strings consisting of an even number of 'a's",
      "All strings of the form AnBn",
      "All palindromes over the alphabet {a, b}",
      "All strings over the alphabet {a, b} with balanced parentheses",
    ],
    answer: ["All strings consisting of an even number of 'a's"],
    reason:
      "A finite automaton can recognize simple patterns such as strings with an even number of 'a's, but it cannot recognize more complex structures like AnBn or palindromes.",
  },
];
module.exports = { questionsData };
