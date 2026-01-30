(function () {
  const PAGE_SIZE = 10;
  let currentPage = 1;
  let fullList = [];

  let BOARD_BODY = document.getElementById("board-body");
  let PAGINATION_WRAP = document.getElementById("pagination-wrap");

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

  function getTotalPages() {
    return Math.max(1, Math.ceil(fullList.length / PAGE_SIZE));
  }

  function getPageList() {
    const start = (currentPage - 1) * PAGE_SIZE;
    return fullList.slice(start, start + PAGE_SIZE);
  }

  function loadAndRender() {
    fullList = (DATABASE.portfolioTable || []).slice();
    fullList.sort(function (a, b) {
      return (b.idx - a.idx);
    });
    if (fullList.length === 0) {
      BOARD_BODY.innerHTML =
        '<tr><td colspan="7" class="empty-message">등록된 항목이 없습니다.</td></tr>';
      PAGINATION_WRAP.innerHTML = "";
      return;
    }
    const list = getPageList();
    renderBoard(list);
    renderPagination();
  }

  function renderBoard(list) {
    let html = "";
    list.forEach(function (item, i) {
      let idx = item.idx;
      let no = idx;
      let title = escapeHtml(item.title || "");
      let company = escapeHtml(item.company || "");
      let serviceName = escapeHtml(item.serviceName || "");
      let startMonth = escapeHtml(item.startMonth || "");
      let endMonth = escapeHtml(item.endMonth || "");
      let content = escapeHtml(item.content || "");
      let keywordsHtml = renderKeywords(item.keywords);

      html += '<tr class="row-main" data-idx="' + idx + '">';
      html += '<td class="col-idx">' + no + "</td>";
      html +=
        '<td class="col-title"><span class="title-cell" role="button" tabindex="0" aria-expanded="false">' +
        '<span class="icon">▼</span> ' +
        title +
        "</span></td>";
      html += '<td class="company-cell">' + company + "</td>";
      html += '<td class="col-serviceName">' + serviceName + "</td>";
      html += '<td class="col-startMonth">' + startMonth.substring(0, 4) + "." + startMonth.substring(4, 6) + "</td>";
      html += '<td class="col-endMonth">' + endMonth.substring(0, 4) + "." + endMonth.substring(4, 6) + "</td>";
      html += '<td class="col-keywords"><div class="keywords-cell">' + keywordsHtml + "</div></td>";
      html += "</tr>";
      html += '<tr class="detail-row" id="detail-' + idx + '" hidden>';
      html += '<td colspan="7"><div class="detail-content">' + content.replace(/\n/g, '<br>') + "</div></td>";
      html += "</tr>";
    });
    BOARD_BODY.innerHTML = html;
    bindTitleClicks();
  }

  function renderPagination() {
    const totalPages = getTotalPages();
    if (totalPages <= 1) {
      PAGINATION_WRAP.innerHTML = "";
      return;
    }
    const prevDisabled = currentPage <= 1 ? ' disabled' : "";
    const nextDisabled = currentPage >= totalPages ? ' disabled' : "";
    let html = '<div class="pagination">';
    html += '<button type="button" class="pagination-btn pagination-prev" data-page="prev" aria-label="이전 페이지"' + prevDisabled + '>이전</button>';
    html += '<ul class="pagination-list">';
    for (let p = 1; p <= totalPages; p++) {
      const active = p === currentPage ? ' class="active"' : "";
      html += '<li><button type="button" class="pagination-btn pagination-num"' + active + ' data-page="' + p + '">' + p + "</button></li>";
    }
    html += "</ul>";
    html += '<button type="button" class="pagination-btn pagination-next" data-page="next" aria-label="다음 페이지"' + nextDisabled + '>다음</button>';
    html += "</div>";
    PAGINATION_WRAP.innerHTML = html;
    bindPaginationClicks();
  }

  function bindPaginationClicks() {
    PAGINATION_WRAP.querySelectorAll(".pagination-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const totalPages = getTotalPages();
        const page = this.getAttribute("data-page");
        if (page === "prev") {
          if (currentPage > 1) currentPage--;
        } else if (page === "next") {
          if (currentPage < totalPages) currentPage++;
        } else {
          const p = parseInt(page, 10);
          if (p >= 1 && p <= totalPages) currentPage = p;
        }
        loadAndRender();
      });
    });
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
