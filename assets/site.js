async function sharePage() {
  const data = {
    title: document.title,
    text: "今日股票每日报告",
    url: window.location.href
  };

  if (navigator.share) {
    await navigator.share(data);
    return;
  }

  await navigator.clipboard.writeText(window.location.href);
  const button = document.querySelector("[data-share-button]");
  if (button) {
    const original = button.textContent;
    button.textContent = "已复制链接";
    setTimeout(() => {
      button.textContent = original;
    }, 1600);
  }
}
