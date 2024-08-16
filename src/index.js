// メタタグを挿入する関数
export function addNoZoomMetaTag() {
  const metaTag = document.createElement("meta");
  metaTag.name = "viewport";
  metaTag.content =
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
  document.head.appendChild(metaTag);
}

// トーストメッセージを表示する関数
export function showCustomToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.cssText = `
      visibility: hidden;
      min-width: 250px;
      margin-left: -125px;
      background-color: #333;
      color: #fff;
      text-align: center;
      border-radius: 2px;
      padding: 16px;
      position: fixed;
      z-index: 1;
      left: 50%;
      bottom: 30px;
      font-size: 17px;
    `;
  document.body.appendChild(toast);

  toast.style.visibility = "visible";
  setTimeout(() => {
    toast.style.visibility = "hidden";
    document.body.removeChild(toast);
  }, 3000);
}
