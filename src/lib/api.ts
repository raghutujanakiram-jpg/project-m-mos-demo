// Generic API wrapper
export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(import.meta.env.VITE_API_URL + path, {
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "Request failed");
  }

  return res.json();
}

// Lead form: /lead
export const submitLead = (payload: any) =>
  apiRequest("/lead", {
    method: "POST",
    body: JSON.stringify(payload),
  });

// Support form: /support
export const submitSupport = (payload: any) =>
  apiRequest("/support", {
    method: "POST",
    body: JSON.stringify(payload),
  });

// Partner request: /partner-request
export const submitPartnerRequest = (payload: any) =>
  apiRequest("/partner-request", {
    method: "POST",
    body: JSON.stringify(payload),
  });

// Floor plan upload — multipart
export const uploadFloorPlan = (formData: FormData) =>
  apiRequest("/upload-floorplan", {
    method: "POST",
    body: formData,
  });

