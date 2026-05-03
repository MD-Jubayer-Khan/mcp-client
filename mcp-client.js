import fetch from "node-fetch";
import readline from "readline";

const BASE_URL = "http://localhost:8080/mcp";

// -----------------------------
// Helper: JSON-RPC request
// -----------------------------
async function rpc(method, params = {}) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json, text/event-stream"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Date.now(),
      method,
      params
    })
  });

  return res.json();
}

// -----------------------------
// 1. List tools
// -----------------------------
async function listTools() {
  const res = await rpc("tools/list");
  console.log("\n📦 Tools:");
  console.dir(res, { depth: null });
}

// -----------------------------
// 2. Call tool
// -----------------------------
async function callTool(name, args) {
  const res = await rpc("tools/call", {
    name,
    arguments: args
  });

  console.log("\n⚡ Tool Result:");
  console.dir(res, { depth: null });
}

// -----------------------------
// CLI interface (like Cursor)
// -----------------------------
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("🚀 MCP Client Ready");
console.log("Commands:");
console.log("  tools");
console.log("  call <toolName> <jsonArgs>");

rl.on("line", async (input) => {
  const [cmd, tool, args] = input.split(" ");

  if (cmd === "tools") {
    await listTools();
  }

  if (cmd === "call") {
    try {
      await callTool(tool, args ? JSON.parse(args) : {});
    } catch (e) {
      console.log("❌ Invalid JSON args");
    }
  }
});