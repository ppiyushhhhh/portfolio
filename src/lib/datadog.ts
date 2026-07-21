import { datadogRum } from "@datadog/browser-rum";
import { reactPlugin } from "@datadog/browser-rum-react";

let initialized = false;

export function initDatadog() {
  if (initialized || typeof window === "undefined") return;

  datadogRum.init({
    applicationId: "69dd9dd6-885d-4d7e-b38d-c7ff5428ad28",
    clientToken: "pub8c5751290b886672d03ec578ad90fc00",
    site: "us5.datadoghq.com",
    service: "portfolio",
    env: "production",
    version: "1.0.0",
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
    plugins: [reactPlugin()],
  });

  datadogRum.startSessionReplayRecording();
  initialized = true;
}
