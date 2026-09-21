// 모바일 메뉴 토글
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// 소개 페이지 탭 (회사개요 / CEO 인사말 / 연혁)
(function () {
  const tabs = document.querySelectorAll(".biz-tabs button");
  if (!tabs.length) return;
  const panels = document.querySelectorAll(".tab-panel");
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      panels.forEach((panel) => {
        panel.hidden = panel.id !== "tab-" + target;
      });
    });
  });
})();
