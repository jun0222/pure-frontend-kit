export function createAutoSaveTextarea({
  containerId,
  localStorageKey,
  enableDownload = false,
  downloadButtonText = "Download",
}) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.style.width = "100%";
  textarea.style.height = "200px";

  // ローカルストレージからデータを読み込む
  textarea.value = localStorage.getItem(localStorageKey) || "";

  // テキストエリアの値をローカルストレージに保存
  textarea.addEventListener("input", () => {
    localStorage.setItem(localStorageKey, textarea.value);
  });

  container.appendChild(textarea);

  // ダウンロード機能を有効にする場合
  if (enableDownload) {
    const downloadButton = document.createElement("button");
    downloadButton.textContent = downloadButtonText;

    downloadButton.addEventListener("click", () => {
      const blob = new Blob([textarea.value], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${localStorageKey}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    container.appendChild(downloadButton);
  }
}
