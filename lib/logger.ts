/**
 * Logger utility for consistent logging across the application
 * In production, logs are sent to error tracking services
 * In development, logs are printed to console
 */

type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug'

interface LogEntry {
  level: LogLevel
  message: string
  data?: unknown
  timestamp: string
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private isProduction = process.env.NODE_ENV === 'production'

  private formatMessage(level: LogLevel, message: string, data?: unknown): LogEntry {
    return {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
    }
  }

  private logToConsole(entry: LogEntry) {
    if (!this.isDevelopment) return

    const { level, message, data, timestamp } = entry
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`

    switch (level) {
      case 'error':
        console.error(prefix, message, data || '')
        break
      case 'warn':
        console.warn(prefix, message, data || '')
        break
      case 'info':
        console.info(prefix, message, data || '')
        break
      case 'debug':
        console.debug(prefix, message, data || '')
        break
      default:
        console.log(prefix, message, data || '')
    }
  }

  private async sendToErrorTracking(entry: LogEntry) {
    // TODO: Integrate with error tracking service (Sentry, LogRocket, etc.)
    // For now, errors are only logged in development
    if (this.isProduction && entry.level === 'error') {
      // await fetch('/api/logs', { method: 'POST', body: JSON.stringify(entry) })
    }
  }

  log(message: string, data?: unknown) {
    const entry = this.formatMessage('log', message, data)
    this.logToConsole(entry)
  }

  info(message: string, data?: unknown) {
    const entry = this.formatMessage('info', message, data)
    this.logToConsole(entry)
  }

  warn(message: string, data?: unknown) {
    const entry = this.formatMessage('warn', message, data)
    this.logToConsole(entry)
    this.sendToErrorTracking(entry)
  }

  error(message: string, error?: unknown) {
    const entry = this.formatMessage('error', message, error)
    this.logToConsole(entry)
    this.sendToErrorTracking(entry)
  }

  debug(message: string, data?: unknown) {
    if (this.isDevelopment) {
      const entry = this.formatMessage('debug', message, data)
      this.logToConsole(entry)
    }
  }
}

// Export singleton instance
export const logger = new Logger()
