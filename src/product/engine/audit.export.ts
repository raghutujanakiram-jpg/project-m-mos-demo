import { auditEvents } from "../data/audit.mock";

export function getAuditLogs() {
  // In real implementation:
  // - pull from local DB / file / edge store
  // - append-only semantics
  return auditEvents.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}