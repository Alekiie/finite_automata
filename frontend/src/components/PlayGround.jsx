import React, { useState } from "react";
import axios from "../configs/axios";
import ReactFlow, { Background, Controls, MarkerType } from "reactflow";
import "reactflow/dist/style.css";

const PlayGround = () => {
  const [PlayGround, setPlayGround] = useState("");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/playground", {
        grammarInput: PlayGround, // Use the PlayGround state value as grammarInput
      });
      const { nodes, edges } = response.data;

      // Update the nodes and edges in state to render the automaton
      setNodes(
        nodes.map((node) => ({
          id: node.id,
          data: { label: node.label },
          position: node.position,
          style: {
            backgroundColor: node.id === 'START' ? 'lightblue' : node.id === 'END' ? 'lightcoral' : 'lightgreen',
            borderRadius: '50%',
            padding: '10px',
          },
        }))
      );
      setEdges(
        edges.map((edge) => ({
          id: edge.id,
          source: edge.source,
          target: edge.target,
          label: edge.label,
          markerEnd: { type: MarkerType.ArrowClosed },
          animated: true,
        }))
      );
    } catch (error) {
      console.error("Error processing grammar:", error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <h1>Finite Automata Visualizer</h1>

      {/* Grammar Input Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <textarea
          value={PlayGround}
          onChange={(e) => setPlayGround(e.target.value)}
          placeholder="Enter your finite grammar (e.g., S -> aA, A -> bB)"
          rows="5"
          cols="50"
          style={{ padding: "10px", border: "1px solid #ccc" }}
        />
        <br />
        <button
          type="submit"
          style={{ marginTop: "10px", padding: "8px 16px" }}
          className="bg-green-300 px-4 py-2 shadow-md text-center rounded-lg hover:bg-green-400 transition-all ease-in-out cursor-pointer"
        >
          Submit Grammar
        </button>
      </form>

      {/* Automaton Visualization */}
      {nodes.length > 0 && (
        <div  className="w-full h-full">
          <h2>Automaton Visualization</h2>
          <ReactFlow nodes={nodes} edges={edges} >
            <Background color="#aaa" gap={30} />
            <Controls />
          </ReactFlow>
        </div>
      )}
    </div>
  );
};

export default PlayGround;
