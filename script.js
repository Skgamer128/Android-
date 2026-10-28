/*
  Customize these values before publishing.
  Put your real APK at: downloads/app-release.apk
*/
const APP_CONFIG = {
  name: "AppName",
  version: "1.0.0",
  developer: "Your Name / Studio",
  updated: "Add update date",
  apkPath: "downloads/app-release.apk"
};

const $ = (id) => document.getElementById(id);
const toast = $("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3600);
}

function applyAppConfig() {
  document.title = `${APP_CONFIG.name} — Official Android Download`;
  document.querySelectorAll(".brand span:last-child").forEach(el => el.textContent = APP_CONFIG.name);
  document.querySelector(".app-card-name").textContent = APP_CONFIG.name;
  $("appNameDetail").textContent = APP_CONFIG.name;
  $("developerName").textContent = APP_CONFIG.developer;
  $("heroVersion").textContent = APP_CONFIG.version;
  $("quickVersion").textContent = APP_CONFIG.version;
  $("detailVersion").textContent = APP_CONFIG.version;
  $("lastUpdated").textContent = APP_CONFIG.updated;
  $("detailUpdated").textContent = APP_CONFIG.updated;
  $("downloadButton").href = APP_CONFIG.apkPath;
  document.querySelector(".button-light").href = APP_CONFIG.apkPath;
  $("buttonMeta").textContent = `Version ${APP_CONFIG.version} · Android`;
  $("year").textContent = new Date().getFullYear();
}

async function displayApkSize() {
  try {
    const response = await fetch(APP_CONFIG.apkPath, { method: "HEAD", cache: "no-store" });
    if (!response.ok) throw new Error("APK not found");
    const length = Number(response.headers.get("content-length"));
    const sizeText = length ? `${(length / (1024 * 1024)).toFixed(1)} MB` : "Available";
    $("fileSize").textContent = sizeText;
    $("detailSize").textContent = sizeText;
  } catch {
    $("fileSize").textContent = "Add APK file";
    $("detailSize").textContent = "Add APK file";
  }
}

$("downloadButton").addEventListener("click", () => {
  // A friendly check; the browser still handles the actual file download.
  showToast("If the download doesn't start, check that the APK file has been added.");
});
document.querySelector(".button-light").addEventListener("click", () => {
  showToast("If the download doesn't start, check that the APK file has been added.");
});

$("menuToggle").addEventListener("click", () => {
  const links = document.querySelector(".nav-links");
  const open = links.classList.toggle("open");
  $("menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
    $("menuToggle").setAttribute("aria-expanded", "false");
  });
});

applyAppConfig();
displayApkSize();
