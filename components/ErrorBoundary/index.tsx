import React, { ReactNode } from "react";
import { version } from "@/constants/version";

export class ErrorBoundary extends React.Component{
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true });
    if(version === "dev"){
      console.log(errorInfo);
    }
  }
  render() {
    return (
      <>
        { // @ts-ignore
          this.props.children ? this.props.children : <div></div>
        }
      </>
    );
  }
}
