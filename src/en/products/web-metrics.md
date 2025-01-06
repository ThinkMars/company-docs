# Web Metrics Monitoring Tool

Monitor and collect web data to generate metrics. Supports collection of metrics including: JS errors, Vue errors, resource errors, route changes, HTTP requests, performance metrics, custom monitoring metrics, etc.

## Repository

[web-metrics](https://github.com/ThinkMars/company/tree/main/packages/web-metrics)

## Installation

⚠️ Note: This project is not published to npm, please use internally for learning purposes. You can clone this repository and run it locally.

## Usage

```js
import { createMonitor, MetricsType } from "@company/web-metrics";

const monitor = createMonitor({
  projectId: "my-project", // Project ID
  serverUrl: "http://localhost:3000/api/track", // Server URL
  userId: "123456", // User unique ID, if not provided, a deviceId will be automatically generated
});

// Custom error tracking
monitor.track({
  eventName: "your_event_name",
  data: {
    button: "submit",
  },
});
```

## API

### createMonitor

Create a monitoring instance with some initial configuration. Initialization must be done in advance, otherwise it may not be usable.

```js
interface Monitor {
  config: MonitorConfig;
  track(eventName: string, eventType?: MetricsType, data?: object);
}

createMonitor(config: MonitorConfig): Monitor;
```

### track

Custom data reporting, you can pass in a custom metric type, default is `MetricsType.Custom`. After initialization, this method can be called at any time to report data.

```typescript
track(eventName: string, eventType?: MetricsType, data?: object);
```

## Types

### MonitorConfig

```ts
interface MonitorConfig {
  // Your project ID
  projectId: string;
  // Server URL to receive data
  serverUrl?: string;
  // Your user unique ID, if not provided, a deviceId will be automatically generated
  userId?: string | number;
  // Whitelist, when the URL is not in the whitelist, it will not be reported
  whiteURLList?: string[];
  // In debug mode, data will be printed to the console instead of being sent to the server, can be used for local debugging.
  debug?: boolean;
  // Whether to use image to send data, default is false.
  // If set to false, navigator.sendBeacon will be used to send data first.
  useImg?: boolean;
}
```

### MetricsType

```ts
export enum MetricsType {
  Performance = "performance",
  VueJsError = "vueJsError",
  JSError = "jsError",
  UnHandleRejectionError = "unHandleRejectionError",
  ResourceError = "resourceError",
  HttpRequest = "httpRequest",
  RouterChange = "routerChange",
  Custom = "custom",
}
```
