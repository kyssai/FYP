# 部署到網站伺服器 / Deploy to web server

## 相對路徑（預設，多數情況請用這個）

本專案連結使用 **`Source/檔名.pdf`** 這類**相對路徑**（相對於目前這一頁的網址）。

上傳到伺服器時，請**維持與本機相同的資料夾結構**，例如：

```text
（網站根目錄或任一子資料夾）
├── index.html
├── progress.html
├── styles.css
├── Source/
│   └── Detailed Project Proposal.pdf
├── IMG/
│   └── …
└── …
```

若訪客開啟：

`https://你的網域/某資料夾/progress.html`

則 PDF 會自動變成：

`https://你的網域/某資料夾/Source/Detailed%20Project%20Proposal.pdf`

**不必**因為上傳到伺服器就改成 `C:\` 或 `file://`，瀏覽器會依**目前網頁的網址**自動組出正確路徑。

---

## 可選：`site-config.js`（子路徑網址）

若你希望**固定從網域根目錄**組出絕對路徑（例如網站掛在 `https://example.com/myproject/`），可編輯 **`site-config.js`**：

```js
window.FYP_SITE_BASE = "/myproject";  // 依實際子路徑調整，不要結尾斜線
```

留空 `""` 則維持純相對路徑，與多數虛擬主機、GitHub Pages 子資料夾部署相容。

---

## 檢查清單

1. `Source/Detailed Project Proposal.pdf` 已上傳且檔名一致（含空格）。
2. 用瀏覽器開啟線上 `progress.html`，按右鍵「在新分頁開啟」PDF 連結，確認網址無 404。

---

## 上線後圖片變得「超大」、本機卻正常？

常見原因：

1. **`styles.css` 沒載入**（路徑錯誤、檔名大小寫不同）  
   - Linux 主機**區分大小寫**：請確認上傳檔名為 **`styles.css`**（全小寫），與 HTML 裡 `href="styles.css"` 一致。  
   - 在瀏覽器按 **F12 → Network**，重新整理，看 `styles.css` 是否 **200**（不是 404）。

2. **已加入備援**：每頁 `<head>` 內有一段內嵌樣式，即使 CSS 偶發失敗也會限制圖片寬度；`styles.css` 內亦設有 **`min-width: 0`** 於雙欄區塊，避免大圖撐破版面。

若仍異常，請確認 **`IMG/`** 內圖檔已完整上傳，且與本機結構相同。
