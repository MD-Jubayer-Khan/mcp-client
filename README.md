# MCP Tester (Node.js MCP Client)

A lightweight CLI-based Model Context Protocol (MCP) client designed for testing and debugging MCP servers. This tool allows developers to interact with any MCP-compliant server directly from their terminal without needing to set up a full LLM environment like Cursor or Claude Desktop.

## ✨ Motivation
This project was born out of a practical need. While testing MCP servers in IDEs like Cursor is convenient, users often face **free usage limits** which can halt development. To avoid these restrictions and provide a way for developers without premium subscriptions to test their servers freely and infinitely, I built this standalone client. 

## 🎯 Who is this for?
- **MCP Server Developers:** Quickly verify if your tools are correctly exposed and responding as expected.
- **LLM Integrators:** Understand the JSON-RPC interface of the Model Context Protocol.
- **System Architects:** Test tool-calling logic and data structures in isolation.

## 🛠️ Features
- **List Tools:** Retrieve all tools exposed by your MCP server.
- **Call Tools:** Execute specific tools with custom JSON arguments.
- **Lightweight:** Minimal dependencies (`node-fetch` and `readline`).
- **Interactive CLI:** Simple command-based interface.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- A running MCP server (default expected at `http://localhost:8080/mcp`)

### Installation
1. Clone the repository or download the files.
2. Install dependencies:
   ```bash
   npm install
   ```

### Usage
Run the client:
```bash
node mcp-client.js
```

Once started, you can use the following commands:

| Command | Description | Example |
|---------|-------------|---------|
| `tools` | Lists all available tools from the server | `tools` |
| `call`  | Calls a tool with JSON arguments | `call my_tool {"arg1": "value"}` |

## 🧩 Language Compatibility
While this client is built using **Node.js**, its utility is universal:
- **Server Agnostic:** It can communicate with any MCP server, whether the server is written in **Python, Go, Rust, Java, or Node.js**.
- **Protocol Based:** As long as the server follows the [Model Context Protocol](https://modelcontextprotocol.io) and is accessible over HTTP, this client can interact with it.

## 💡 Problems Solved
- **No More "Black Box" Testing:** Avoid the complexity of testing servers inside AI apps where logs might be hidden.
- **Bypass Usage Limits:** Test your MCP server as much as you want without worrying about Cursor or Claude's daily message limits.
- **Fast Iteration:** Test tool changes instantly without restarting your primary IDE or LLM client.
- **Protocol Verification:** Ensure your server strictly adheres to the JSON-RPC 2.0 standards used by MCP.

## ⚙️ Configuration
By default, the client connects to `http://localhost:8080/mcp`. You can modify the `BASE_URL` at the top of `mcp-client.js` if your server is running on a different port or path.

```javascript
const BASE_URL = "http://your-server-url:port/mcp";
```

---
Built with ❤️ for the MCP Ecosystem.
