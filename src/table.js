// テーブルのレイアウトを生成し、クリックでコピーできる機能を追加
export function createClickableTable(containerId, data) {
  const container = document.querySelector(`#${containerId}`);
  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  const thead = document.createElement("thead");
  thead.innerHTML = `
        <tr>
            <th>説明</th>
            <th>コンテンツ</th>
        </tr>`;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.className = "item";
    row.innerHTML = `<td>${item.description}</td><td>${item.content}</td>`;
    row.style.cursor = "pointer";
    row.onclick = () => {
      navigator.clipboard.writeText(item.content).then(() => {
        showToast("コピーしました");
      });
    };
    row.onmouseover = () => {
      row.style.backgroundColor = "#f0f0f0";
    };
    row.onmouseout = () => {
      row.style.backgroundColor = "";
    };
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

// トーストメッセージを表示する関数
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
