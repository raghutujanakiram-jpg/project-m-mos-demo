export const auditLogs = [
  { actor: "User", action: "Toggle Light", time: new Date().toISOString() },
];

export function exportCSV() {
  const csv =
    "actor,action,time\n" +
    auditLogs.map((l) => `${l.actor},${l.action},${l.time}`).join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "audit.csv";
  a.click();
}