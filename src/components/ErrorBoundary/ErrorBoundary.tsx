import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error or perform other actions here
    console.error('Error:', error)
    console.error('Error Info:', errorInfo)
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error message or UI here
      return <div>Something went wrong. Please try again later.</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
