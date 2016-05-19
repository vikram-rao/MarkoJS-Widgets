function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __browser_json = require.resolve("./browser.json"),
      __loadTag = __helpers.t,
      lasso_page = __loadTag(require("lasso/taglib/page-tag")),
      lasso_head = __loadTag(require("lasso/taglib/head-tag")),
      great_button = __loadTag(require("../../components/great-button")),
      init_widgets = __loadTag(require("marko-widgets/taglib/init-widgets-tag")),
      lasso_body = __loadTag(require("lasso/taglib/body-tag"));

  return function render(data, out) {
    lasso_page({
        name: "my-page",
        packagePath: __browser_json,
        dirname: __dirname,
        filename: __filename
      }, out);

    out.w("<html><head>");

    lasso_head({}, out);

    out.w("</head><body><h1>Hello " +
      escapeXml(data.name) +
      "</h1>");

    great_button({
        buttonName: "Click Me"
      }, out);

    init_widgets({}, out);

    lasso_body({}, out);

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
