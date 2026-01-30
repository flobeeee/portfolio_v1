(function () {
  let BOARD_BODY = document.getElementById("board-body");

  function escapeHtml(text) {
    let div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function renderKeywords(keywords) {
    if (!Array.isArray(keywords) || keywords.length === 0) return "";
    return keywords
      .map(function (k) {
        return '<span class="keyword-tag">' + escapeHtml(k) + "</span>";
      })
      .join("");
  }

  function loadAndRender() {
    let list = DATABASE.portfolioTable || [];
    if (list.length === 0) {
      BOARD_BODY.innerHTML =
        '<tr><td colspan="5" class="empty-message">등록된 항목이 없습니다.</td></tr>';
      return;
    }
    renderBoard(list);
  }

  function renderBoard(list) {
    let html = "";
    console.log(list);
    list.forEach(function (item) {
      let idx = item.idx;
      let title = escapeHtml(item.title || "");
      let company = escapeHtml(item.company || "");
      let serviceName = escapeHtml(item.serviceName || "");
      let startMonth = escapeHtml(item.startMonth || "");
      let endMonth = escapeHtml(item.endMonth || "");
      let content = escapeHtml(item.content || "");
      let keywordsHtml = renderKeywords(item.keywords);

      html += '<tr class="row-main" data-idx="' + idx + '">';
      html += '<td class="col-idx">' + idx + "</td>";
      html +=
        '<td class="col-title"><span class="title-cell" role="button" tabindex="0" aria-expanded="false">' +
        '<span class="icon">▼</span> ' +
        title +
        "</span></td>";
      html += '<td class="company-cell">' + company + "</td>";
      html += '<td class="col-serviceName">' + serviceName + "</td>";
      html += '<td class="col-startMonth">' + startMonth + "</td>";
      html += '<td class="col-endMonth">' + endMonth + "</td>";
      html += '<td class="col-keywords"><div class="keywords-cell">' + keywordsHtml + "</div></td>";
      html += "</tr>";
      html += '<tr class="detail-row" id="detail-' + idx + '" hidden>';
      html += '<td colspan="5"><div class="detail-content">' + content.replace(/\n/g, '<br>') + "</div></td>";
      html += "</tr>";
    });
    BOARD_BODY.innerHTML = html;
    bindTitleClicks();
  }

  function bindTitleClicks() {
    let cells = BOARD_BODY.querySelectorAll(".title-cell");
    cells.forEach(function (cell) {
      cell.addEventListener("click", onTitleClick);
      cell.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onTitleClick.call(this, e);
        }
      });
    });
  }

  function onTitleClick() {
    let row = this.closest("tr.row-main");
    if (!row) return;
    let idx = row.getAttribute("data-idx");
    let detailRow = document.getElementById("detail-" + idx);
    if (!detailRow) return;
    let isOpen = !detailRow.hidden;
    detailRow.hidden = isOpen;
    this.classList.toggle("open", !isOpen);
    this.setAttribute("aria-expanded", !isOpen ? "true" : "false");
  }

  loadAndRender();
})();
