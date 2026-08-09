// clerk.js — FULL FILE

export async function initClerk() {
  try {
    const config = await fetch("/config/clerk-config.json").then(r => r.json());

    const script = document.createElement("script");
    script.setAttribute("data-clerk-publishable-key", config.publishableKey);
    script.src = "https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js";
    script.async = true;

    script.onload = () => {
      window.Clerk.load();
      console.log("Clerk initialized.");
    };

    document.head.appendChild(script);
  } catch (err) {
    console.error("Clerk init error:", err);
  }
}
