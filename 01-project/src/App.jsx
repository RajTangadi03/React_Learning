import { useState } from "react";
import "./App.css";

/* -------------------- Helpers -------------------- */

function buildTree(family, rootId) {
  const map = new Map();
  family.forEach(p => map.set(p.id, { ...p, children: [] }));

  family.forEach(p => {
    if (p.parentId !== null && map.has(p.parentId)) {
      map.get(p.parentId).children.push(map.get(p.id));
    }
  });

  return map.get(rootId);
}

/* -------------------- Tree Node UI -------------------- */

function TreeNode({ node }) {
  return (
    <div style={{ marginLeft: 30 }}>
      <div
        style={{
          border: "1px solid #aaa",
          padding: "6px 10px",
          display: "inline-block",
          borderRadius: "6px",
          marginBottom: "6px",
          background: "rgba(98, -91, 255, 0.87)"
        }}
      >
        {node.name} (ID: {node.id})
      </div>

      <div>
        {node.children.map(child => (
          <TreeNode key={child.id} node={child} />
        ))}
      </div>
    </div>
  );
}

/* -------------------- App -------------------- */

export default function App() {
  const [family, setFamily] = useState([]);

  const [name, setName] = useState("");
  const [parentId, setParentId] = useState("");

  const root = family.find(p => p.parentId === null);
  const treeRoot = root ? buildTree(family, root.id) : null;

  function handleAdd() {
    if (!name.trim()) return alert("Enter child name");

    // First node → root
    if (family.length === 0) {
      setFamily([
        {
          id: 1,
          name,
          parentId: null
        }
      ]);
    } else {
      const pid = Number(parentId);
      if (!family.find(p => p.id === pid)) {
        return alert("Parent ID does not exist");
      }

      setFamily(prev => [
        ...prev,
        {
          id: prev.length + 1,
          name,
          parentId: pid
        }
      ]);
    }

    setName("");
    setParentId("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>🌳 Family Tree Builder</h1>

      <div style={{ marginBottom: 15 }}>
        <input
          placeholder="Child name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        {family.length > 0 && (
          <input
            placeholder="Parent ID"
            value={parentId}
            onChange={e => setParentId(e.target.value)}
            style={{ marginLeft: 10 }}
          />
        )}

        <button onClick={handleAdd} style={{ marginLeft: 10 }}>
          Add Node
        </button>
      </div>

      <hr />

      {treeRoot ? <TreeNode node={treeRoot} /> : <p>Tree is empty</p>}
    </div>
  );
}
