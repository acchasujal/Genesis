// src/ErrorBoundary.tsx
import React from "react";

export default class ErrorBoundary extends React.Component<{children:any}, {error:any}> {
  constructor(props:any) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error:any) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, color: "#fff", background: "#111" }}>
          <h3>3D Scene failed to load</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
