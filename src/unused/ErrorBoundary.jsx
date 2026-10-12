import { Component } from "react";

// Error boundaries must be class components.
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Task list failed to render:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fallback" role="alert">
          <p>We couldn't show your tasks right now.</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
