// テーブルのレイアウトを生成し、クリックでコピーできる機能を追加
export function createClickableTable(containerId, data) {
  const container = document.querySelector(`#${containerId}`);

  if (!container) {
    console.error(`Element with id "${containerId}" not found.`);
    return;
  }

  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "20px";

  const thead = document.createElement("thead");
  thead.innerHTML = `
        <tr>
            <th style="border: 1px solid black; padding: 10px; background-color: #f2f2f2;">説明</th>
            <th style="border: 1px solid black; padding: 10px; background-color: #f2f2f2;">コンテンツ</th>
        </tr>`;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.className = "item";
    row.innerHTML = `<td style="border: 1px solid black; padding: 10px;">${item.description}</td>
                     <td style="border: 1px solid black; padding: 10px;">${item.content}</td>`;
    row.style.cursor = "pointer";
    row.onclick = () => {
      navigator.clipboard.writeText(item.content).then(() => {
        showToast("コピーしました");
      });
    };
    // 奇数行に背景色を追加
    if (index % 2 !== 0) {
      row.style.backgroundColor = "#f9f9f9";
    }
    row.onmouseover = () => {
      row.style.backgroundColor = "#d0d0d0";
    };
    row.onmouseout = () => {
      // マウスが離れたら元の背景色に戻す
      row.style.backgroundColor = index % 2 !== 0 ? "#f9f9f9" : "";
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
