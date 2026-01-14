export function cleanJobTitle(input) {
  if (!input || typeof input !== "string") return "";

  const textarea = document.createElement("textarea");
  textarea.innerHTML = input;
  let decoded = textarea.value;
  
  textarea.innerHTML = decoded;
  decoded = textarea.value;

  decoded = decoded.replace(/\s+/g, " ").trim();

  return decoded;
}
