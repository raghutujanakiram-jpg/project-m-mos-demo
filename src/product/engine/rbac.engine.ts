export const permissions = {
  owner: ["*"],
  admin: ["rooms", "scenes", "voice", "audit"],
  member: ["rooms", "scenes", "voice"],
  guest: ["rooms"],
  readonly: ["dashboard", "audit"],
};

export function canAccess(role, module) {
  if (!role) return false;
  if (permissions[role]?.includes("*")) return true;
  return permissions[role]?.includes(module);
}