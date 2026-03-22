/**
 * 部署到網站伺服器時的路徑設定 / Server deployment path config
 *
 * • 留空 ""：使用「相對於目前網頁」的路徑（建議多數情況）
 *   只要上傳時保持與本機相同的資料夾結構（Source 與 progress.html 同層），
 *   連結會自動變成 https://你的網域/.../Source/檔名.pdf
 *
 * • 若網站固定掛在子路徑（例如 https://example.com/courses/fyp/），可設為
 *   "/courses/fyp"（前面加 /，不要結尾斜線）
 *   則 PDF 會指向 /courses/fyp/Source/Detailed%20Project%20Proposal.pdf
 */
window.FYP_SITE_BASE = "";

/**
 * @param {string} relPath e.g. "Source/file.pdf"
 * @returns {string} URL path for href
 */
window.fypAsset = function (relPath) {
  relPath = (relPath || "").replace(/^\//, "");
  var b = (window.FYP_SITE_BASE || "").replace(/\/$/, "");
  if (!b) return relPath;
  return b + "/" + relPath;
};
