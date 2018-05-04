export default interface AlertsContext {
  alert(...messages: string[]): void;
  alertWithType(type: string, title: string, ...messages: string[]): void;
}
