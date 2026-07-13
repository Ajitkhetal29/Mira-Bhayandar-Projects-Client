import axios from "axios";

/**
 * @param {string} backendUrl
 * @param {{ name: string; email: string; phone: string; message: string }} payload
 */
export async function submitLead(backendUrl, payload) {
  if (!backendUrl) {
    throw new Error("Backend not configured");
  }
  const { data } = await axios.post(`${backendUrl}/api/lead/submit`, {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    message: payload.message.trim(),
  });

  // Best-effort CRM sync — failure must not affect primary submit result
  const delta_crm_url = "https://api.realtechmktg.com/api/digital-lead-assignment/sync";
  try {
    await axios.post(delta_crm_url, {
      name: payload.name.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      websiteName: "Mira Bhaynandar Properties",
    });
  } catch (error) {
    console.error("Error sending data to delta_crm:", error);
  }

  return data;
}
