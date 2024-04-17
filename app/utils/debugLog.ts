function debugLog(msg: string, node: any): void {
    // Check if running in development mode
    if (import.meta.env.DEV) {
      console.log('🐛', `${msg}`, node);
    }
    // In production, this function will do nothing
  }

export { debugLog };