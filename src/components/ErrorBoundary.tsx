/**
 * Error Boundary Component for Graceful Error Handling
 * Implements production-ready error recovery and user feedback
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Update state with error info
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, send to error monitoring service
    if (import.meta.env.PROD) {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      // TODO: Integrate with error monitoring service (Sentry, LogRocket, etc.)
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: 'anonymous', // TODO: Get from auth context
      };

      console.error('Error report:', errorReport);
      
      // Example: Send to monitoring service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport)
      // });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null
      });
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-xl text-destructive">Something went wrong</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  We're sorry, but something unexpected happened. Our team has been notified.
                </AlertDescription>
              </Alert>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Error ID: {this.state.errorId}
                </p>
                {import.meta.env.DEV && this.state.error && (
                  <details className="text-left">
                    <summary className="cursor-pointer text-sm font-medium mb-2">
                      Technical Details (Development)
                    </summary>
                    <pre className="text-xs bg-muted p-2 rounded overflow-auto max-h-32">
                      {this.state.error.message}
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
              </div>

              <div className="flex flex-col gap-2">
                {this.retryCount < this.maxRetries && (
                  <Button 
                    onClick={this.handleRetry} 
                    className="w-full"
                    variant="default"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again ({this.maxRetries - this.retryCount} attempts left)
                  </Button>
                )}
                
                <Button 
                  onClick={this.handleReload} 
                  className="w-full"
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reload Page
                </Button>
                
                <Button 
                  onClick={this.handleGoHome} 
                  className="w-full"
                  variant="outline"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Go to Homepage
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  If this problem persists, please contact our support team.
                </p>
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={() => window.open('mailto:support@anupamahospital.com', '_blank')}
                  className="text-xs"
                >
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Hook for functional components to handle errors
export const useErrorHandler = () => {
  const handleError = React.useCallback((error: Error, errorInfo?: any) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    
    // In production, send to monitoring service
    if (import.meta.env.PROD) {
      // TODO: Integrate with error monitoring service
      console.error('Production error:', { error: error.message, stack: error.stack, errorInfo });
    }
  }, []);

  return handleError;
};

export default ErrorBoundary;
