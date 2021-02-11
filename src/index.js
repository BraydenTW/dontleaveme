const dontLeaveMe = {
  init: (awayTitle, defaultTitle) => {
    window.addEventListener("load", () => {
      document.title = defaultTitle;
    });
    window.addEventListener("visibilitychange", () => {
      document.title = document.hidden ? awayTitle : defaultTitle;
    });
  },
};

module.exports = dontLeaveMe;
