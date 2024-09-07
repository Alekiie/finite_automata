const generateFiniteAutomaton = (req, res) => {
    const { grammarInput } = req.body;
  
    if (!grammarInput) {
      return res.status(400).json({ error: "Invalid or missing grammar input" });
    }
  
    try {
      const rules = grammarInput.split("\n").map((rule) => rule.trim());
      const nodes = [];
      const edges = [];
      const states = new Set();
      const terminals = new Set();
  
      // Parse the rules and generate nodes and edges
      rules.forEach((rule, index) => {
        const [left, right] = rule.split("->").map((part) => part.trim());
        const symbols = right.split("");
  
        if (!states.has(left)) {
          states.add(left);
          nodes.push({
            id: left,
            label: left,
            position: { x: 100 + index * 150, y: 100 },
          });
        }
  
        symbols.forEach((symbol, i) => {
          if (!states.has(symbol) && symbol !== ' ' && symbol !== 'ε') {
            terminals.add(symbol);
            // Optionally, add a terminal node if needed
          }
          if (i === symbols.length - 1 && !states.has(symbol) && symbol !== ' ') {
            states.add(symbol);
            nodes.push({
              id: symbol,
              label: symbol,
              position: { x: 100 + (index + 1) * 150, y: 300 },
            });
          }
  
          const nextState = i === symbols.length - 1 ? symbol : symbols[i + 1];
  
          edges.push({
            id: `${left}-${nextState}`,
            source: left,
            target: nextState,
            label: symbol,
          });
        });
      });
  
      // Identify start and end states
      const startState = rules[0]?.split("->")[0].trim();
      const endStates = Array.from(states).filter(state => !edges.some(edge => edge.target === state));
  
      // Add special start and end nodes
      if (startState) {
        nodes.push({
          id: 'START',
          label: 'START',
          position: { x: 0, y: 100 },
        });
  
        edges.push({
          id: 'START-' + startState,
          source: 'START',
          target: startState,
          label: '',
        });
      }
  
      endStates.forEach(state => {
        nodes.push({
          id: state + '_END',
          label: state + '_END',
          position: { x: 100 + (Array.from(states).indexOf(state) + 1) * 150, y: 400 },
        });
  
        edges.push({
          id: state + '_END-' + state,
          source: state,
          target: state + '_END',
          label: '',
        });
      });
  
      res.json({ nodes, edges });
    } catch (error) {
      console.error("Error processing grammar:", error);
      res.status(500).json({ error: "Failed to process grammar" });
    }
  };
  
  module.exports = generateFiniteAutomaton;
  