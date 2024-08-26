// アスキーアートの定義
const asciiNumbers = {
  0: ["#####", "#   #", "#   #", "#   #", "#####"],
  1: ["  #  ", "  #  ", "  #  ", "  #  ", "  #  "],
  2: ["#####", "    #", "#####", "#    ", "#####"],
  3: ["#####", "    #", "#####", "    #", "#####"],
  4: ["#   #", "#   #", "#####", "    #", "    #"],
  5: ["#####", "#    ", "#####", "    #", "#####"],
  6: ["#####", "#    ", "#####", "#   #", "#####"],
  7: ["#####", "    #", "    #", "    #", "    #"],
  8: ["#####", "#   #", "#####", "#   #", "#####"],
  9: ["#####", "#   #", "#####", "    #", "#####"],
  ":": ["     ", "  #  ", "     ", "  #  ", "     "],
};

// 現在時刻のアスキーアートを生成する機能
export function generateTimeAsciiArt() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  let asciiArt = ["", "", "", "", ""];

  for (const char of timeString) {
    const lines = asciiNumbers[char];
    for (let i = 0; i < lines.length; i++) {
      asciiArt[i] += lines[i] + "  ";
    }
  }

  return asciiArt.join("\n");
}

// トーストメッセージを表示する関数（再利用）
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.backgroundColor = "rgba(0,0,0,0.7)";
  toast.style.color = "white";
  toast.style.padding = "10px";
  toast.style.borderRadius = "5px";
  toast.style.zIndex = "1000";
  document.body.appendChild(toast);
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3000);
}

// 使用例として、時間のアスキーアートを表示し、クリックでコピーできるようにする
export function displayAsciiTime(containerId) {
  const container = document.querySelector(`#${containerId}`);

  if (!container) {
    console.error(`Element with id "${containerId}" not found.`);
    return;
  }

  const asciiArt = generateTimeAsciiArt();
  container.textContent = asciiArt;
  container.style.cursor = "pointer";
  container.style.fontFamily = "monospace";
  container.onclick = () => {
    navigator.clipboard.writeText(asciiArt).then(() => {
      showToast("コピーしました");
    });
  };
}
