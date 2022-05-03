# `@storybook/builder-vite` and `rollup-plugin-postcss-lit` Compatibility with Vite 2.9.7

## Issue

Related: <https://github.com/umbopepato/rollup-plugin-postcss-lit/issues/49#issue-1214506816>

You are unable to use `rollup-plugin-postcss-lit` as a plugin in Storybook using the plugin's default settings as of vite@2.9.7. The `start-storybook` dev server throws the following error after upgrading vite to v2.9.7.

You can adjust `postcss-lit` default settings to `include` _only_ `.scss` and this will work with vite@2.9.7, but this excludes the ability to process `.css` files.

```shell
/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:36302
  var err = new SyntaxError(message);
            ^

SyntaxError: Unexpected token (2:2)
    at Parser.pp$4.raise (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:36302:13)
    at Parser.pp$9.unexpected (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:33596:8)
    at Parser.pp$5.parseExprAtom (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:35677:10)
    at Parser.pp$5.parseExprSubscripts (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:35469:19)
    at Parser.pp$5.parseMaybeUnary (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:35435:17)
    at Parser.pp$5.parseExprOps (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:35362:19)
    at Parser.pp$5.parseMaybeConditional (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:35345:19)
    at Parser.pp$5.parseMaybeAssign (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:35312:19)
    at Parser.pp$5.parseExpression (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:35275:19)
    at Parser.pp$8.parseStatement (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:33786:45)
    at Parser.pp$8.parseTopLevel (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:33653:21)
    at Parser.parse (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:33425:15)
    at Function.parse (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:33475:35)
    at TransformContext.parse (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:38609:27)
    at TransformContext.transform (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/rollup-plugin-postcss-lit/index.ts:45:24)
    at Object.transform (/home/troy/Projects/storybook-vite-plugin-mre/node_modules/vite/dist/node/chunks/dep-88bd5805.js:38911:53) {
  pos: 3,
  loc: Position { line: 2, column: 2 },
  raisedAt: 4,
  plugin: 'postcss-lit',
  id: '/home/troy/Projects/storybook-vite-plugin-mre/iframe.html?html-proxy&0.css',
  pluginCode: '\n' +
    '  :not(.sb-show-preparing-story) > .sb-preparing-story,\n' +
    '  :not(.sb-show-preparing-docs) > .sb-preparing-docs,\n' +
    '  :not(.sb-show-nopreview) > .sb-nopreview,\n' +
    '  :not(.sb-show-errordisplay) > .sb-errordisplay {\n' +
    '    display: none;\n' +
    '  }\n' +
    '\n' +
    '  .sb-show-main.sb-main-centered {\n' +
    '    margin: 0;\n' +
    '    display: flex;\n' +
    '    align-items: center;\n' +
    '    min-height: 100vh;\n' +
    '  }\n' +
    '\n' +
    '  .sb-show-main.sb-main-centered #root {\n' +
    '    box-sizing: border-box;\n' +
    '    margin: auto;\n' +
    '    padding: 1rem;\n' +
    '    max-height: 100%; /* Hack for centering correctly in IE11 */\n' +
    '  }\n' +
    '\n' +
    '  /* Vertical centering fix for IE11 */\n' +
    '  @media screen and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n' +
    '    .sb-show-main.sb-main-centered:after {\n' +
    "      content: '';\n" +
    '      min-height: inherit;\n' +
    '      font-size: 0;\n' +
    '    }\n' +
    '  }\n' +
    '\n' +
    '  .sb-show-main.sb-main-fullscreen {\n' +
    '    margin: 0;\n' +
    '    padding: 0;\n' +
    '    display: block;\n' +
    '  }\n' +
    '\n' +
    '  .sb-show-main.sb-main-padded {\n' +
    '    margin: 0;\n' +
    '    padding: 1rem;\n' +
    '    display: block;\n' +
    '    box-sizing: border-box;\n' +
    '  }\n' +
    '\n' +
    '  .sb-wrapper {\n' +
    '    position: fixed;\n' +
    '    top: 0;\n' +
    '    bottom: 0;\n' +
    '    left: 0;\n' +
    '    right: 0;\n' +
    '    padding: 20px;\n' +
    "    font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco',\n" +
    "      BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n" +
    '    -webkit-font-smoothing: antialiased;\n' +
    '    overflow: auto;\n' +
    '  }\n' +
    '\n' +
    '  .sb-heading {\n' +
    '    font-size: 14px;\n' +
    '    font-weight: 600;\n' +
    '    letter-spacing: 0.2px;\n' +
    '    margin: 10px 0;\n' +
    '    padding-right: 25px;\n' +
    '  }\n' +
    '\n' +
    '  .sb-nopreview {\n' +
    '    display: flex;\n' +
    '    align-content: center;\n' +
    '    justify-content: center;\n' +
    '  }\n' +
    '\n' +
    '  .sb-nopreview_main {\n' +
    '    margin: auto;\n' +
    '    padding: 30px;\n' +
    '    border-radius: 10px;\n' +
    '    background: rgba(0, 0, 0, 0.03);\n' +
    '  }\n' +
    '\n' +
    '  .sb-nopreview_heading {\n' +
    '    text-align: center;\n' +
    '  }\n' +
    '\n' +
    '  .sb-errordisplay {\n' +
    '    border: 20px solid rgb(187, 49, 49);\n' +
    '    background: #222;\n' +
    '    color: #fff;\n' +
    '    z-index: 999999;\n' +
    '  }\n' +
    '\n' +
    '  .sb-errordisplay_code {\n' +
    '    padding: 10px;\n' +
    '    background: #000;\n' +
    '    color: #eee;\n' +
    "    font-family: 'Operator Mono', 'Fira Code Retina', 'Fira Code', 'FiraCode-Retina', 'Andale Mono',\n" +
    "      'Lucida Console', Consolas, Monaco, monospace;\n" +
    '  }\n' +
    '\n' +
    '  .sb-errordisplay pre {\n' +
    '    white-space: pre-wrap;\n' +
    '  }\n' +
    '\n' +
    '  @-webkit-keyframes sb-rotate360 {\n' +
    '    from {\n' +
    '      transform: rotate(0deg);\n' +
    '    }\n' +
    '    to {\n' +
    '      transform: rotate(360deg);\n' +
    '    }\n' +
    '  }\n' +
    '  @keyframes sb-rotate360 {\n' +
    '    from {\n' +
    '      transform: rotate(0deg);\n' +
    '    }\n' +
    '    to {\n' +
    '      transform: rotate(360deg);\n' +
    '    }\n' +
    '  }\n' +
    '  @-webkit-keyframes sb-glow {\n' +
    '    0%,\n' +
    '    100% {\n' +
    '      opacity: 1;\n' +
    '    }\n' +
    '    50% {\n' +
    '      opacity: 0.4;\n' +
    '    }\n' +
    '  }\n' +
    '  @keyframes sb-glow {\n' +
    '    0%,\n' +
    '    100% {\n' +
    '      opacity: 1;\n' +
    '    }\n' +
    '    50% {\n' +
    '      opacity: 0.4;\n' +
    '    }\n' +
    '  }\n' +
    '\n' +
    '  /* We display the preparing loaders *over* the rendering story */\n' +
    '  .sb-preparing-story,\n' +
    '  .sb-preparing-docs {\n' +
    '    background-color: white;\n' +
    '  }\n' +
    '\n' +
    '  .sb-loader {\n' +
    '    -webkit-animation: sb-rotate360 0.7s linear infinite;\n' +
    '    animation: sb-rotate360 0.7s linear infinite;\n' +
    '    border-color: rgba(97, 97, 97, 0.29);\n' +
    '    border-radius: 50%;\n' +
    '    border-style: solid;\n' +
    '    border-top-color: #646464;\n' +
    '    border-width: 2px;\n' +
    '    display: inline-block;\n' +
    '    height: 32px;\n' +
    '    left: 50%;\n' +
    '    margin-left: -16px;\n' +
    '    margin-top: -16px;\n' +
    '    mix-blend-mode: difference;\n' +
    '    overflow: hidden;\n' +
    '    position: absolute;\n' +
    '    top: 50%;\n' +
    '    transition: all 200ms ease-out;\n' +
    '    vertical-align: top;\n' +
    '    width: 32px;\n' +
    '    z-index: 4;\n' +
    '  }\n' +
    '\n' +
    '  .sb-previewBlock {\n' +
    '    background: #fff;\n' +
    '    border: 1px solid rgba(0, 0, 0, 0.1);\n' +
    '    border-radius: 4px;\n' +
    '    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;\n' +
    '    margin: 25px auto 40px;\n' +
    '    max-width: 600px;\n' +
    '  }\n' +
    '\n' +
    '  .sb-previewBlock_header {\n' +
    '    align-items: center;\n' +
    '    box-shadow: rgba(0, 0, 0, 0.1) 0 -1px 0 0 inset;\n' +
    '    display: flex;\n' +
    '    gap: 14px;\n' +
    '    height: 40px;\n' +
    '    padding: 0 12px;\n' +
    '  }\n' +
    '\n' +
    '  .sb-previewBlock_icon {\n' +
    '    -webkit-animation: sb-glow 1.5s ease-in-out infinite;\n' +
    '    animation: sb-glow 1.5s ease-in-out infinite;\n' +
    '    background: #e6e6e6;\n' +
    '    height: 14px;\n' +
    '    width: 14px;\n' +
    '  }\n' +
    '  .sb-previewBlock_icon:last-child {\n' +
    '    margin-left: auto;\n' +
    '  }\n' +
    '\n' +
    '  .sb-previewBlock_body {\n' +
    '    -webkit-animation: sb-glow 1.5s ease-in-out infinite;\n' +
    '    animation: sb-glow 1.5s ease-in-out infinite;\n' +
    '    height: 182px;\n' +
    '    position: relative;\n' +
    '  }\n' +
    '\n' +
    '  .sb-argstableBlock {\n' +
    '    border-collapse: collapse;\n' +
    '    border-spacing: 0;\n' +
    '    font-size: 13px;\n' +
    '    line-height: 20px;\n' +
    '    margin: 25px auto 40px;\n' +
    '    max-width: 600px;\n' +
    '    text-align: left;\n' +
    '    width: 100%;\n' +
    '  }\n' +
    '  .sb-argstableBlock th:first-of-type,\n' +
    '  .sb-argstableBlock td:first-of-type {\n' +
    '    padding-left: 20px;\n' +
    '  }\n' +
    '  .sb-argstableBlock th:nth-of-type(2),\n' +
    '  .sb-argstableBlock td:nth-of-type(2) {\n' +
    '    width: 35%;\n' +
    '  }\n' +
    '  .sb-argstableBlock th:nth-of-type(3),\n' +
    '  .sb-argstableBlock td:nth-of-type(3) {\n' +
    '    width: 15%;\n' +
    '  }\n' +
    '  .sb-argstableBlock th:laste-of-type,\n' +
    '  .sb-argstableBlock td:laste-of-type {\n' +
    '    width: 25%;\n' +
    '    padding-right: 20px;\n' +
    '  }\n' +
    '  .sb-argstableBlock th span,\n' +
    '  .sb-argstableBlock td span {\n' +
    '    -webkit-animation: sb-glow 1.5s ease-in-out infinite;\n' +
    '    animation: sb-glow 1.5s ease-in-out infinite;\n' +
    '    background-color: rgba(0, 0, 0, 0.1);\n' +
    '    border-radius: 0;\n' +
    '    box-shadow: none;\n' +
    '    color: transparent;\n' +
    '  }\n' +
    '  .sb-argstableBlock th {\n' +
    '    padding: 10px 15px;\n' +
    '  }\n' +
    '\n' +
    '  .sb-argstableBlock-body {\n' +
    '    border-radius: 4px;\n' +
    '    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 1px, rgba(0, 0, 0, 0.065) 0 0 0 1px;\n' +
    '  }\n' +
    '  .sb-argstableBlock-body tr {\n' +
    '    background: transparent;\n' +
    '    overflow: hidden;\n' +
    '  }\n' +
    '  .sb-argstableBlock-body tr:not(:first-child) {\n' +
    '    border-top: 1px solid #e6e6e6;\n' +
    '  }\n' +
    '  .sb-argstableBlock-body tr:first-child td:first-child {\n' +
    '    border-top-left-radius: 4px;\n' +
    '  }\n' +
    '  .sb-argstableBlock-body tr:first-child td:last-child {\n' +
    '    border-top-right-radius: 4px;\n' +
    '  }\n' +
    '  .sb-argstableBlock-body tr:last-child td:first-child {\n' +
    '    border-bottom-left-radius: 4px;\n' +
    '  }\n' +
    '  .sb-argstableBlock-body tr:last-child td:last-child {\n' +
    '    border-bottom-right-radius: 4px;\n' +
    '  }\n' +
    '  .sb-argstableBlock-body td {\n' +
    '    background: #fff;\n' +
    '    padding-bottom: 10px;\n' +
    '    padding-top: 10px;\n' +
    '    vertical-align: top;\n' +
    '  }\n' +
    '  .sb-argstableBlock-body td:not(:first-of-type) {\n' +
    '    padding-left: 15px;\n' +
    '    padding-right: 15px;\n' +
    '  }\n' +
    '  .sb-argstableBlock-body button {\n' +
    '    -webkit-animation: sb-glow 1.5s ease-in-out infinite;\n' +
    '    animation: sb-glow 1.5s ease-in-out infinite;\n' +
    '    background-color: rgba(0, 0, 0, 0.1);\n' +
    '    border: 0;\n' +
    '    border-radius: 0;\n' +
    '    box-shadow: none;\n' +
    '    color: transparent;\n' +
    '    display: inline;\n' +
    '    font-size: 12px;\n' +
    '    line-height: 1;\n' +
    '    padding: 10px 16px;\n' +
    '  }\n' +
    '\n' +
    '  .sb-argstableBlock-summary {\n' +
    '    margin-top: 4px;\n' +
    '  }\n' +
    '\n' +
    '  .sb-argstableBlock-code {\n' +
    '    margin-right: 4px;\n' +
    '    margin-bottom: 4px;\n' +
    '    padding: 2px 5px;\n' +
    '  }\n',
  frame: '1  |  \n' +
    '2  |    :not(.sb-show-preparing-story) > .sb-preparing-story,\n' +
    '   |    ^\n' +
    '3  |    :not(.sb-show-preparing-docs) > .sb-preparing-docs,\n' +
    '4  |    :not(.sb-show-nopreview) > .sb-nopreview,'
}
```

## How to Reproduce

In `.storybook/main.ts`, there are 4 possible configurations for (1 being _not_ using) `postcss-lit` (comments included).

| Use Case | Actual Result | Expected Result |
| -------- | ------------- | --------------- |
| No plugin | Successful build both dev and static, but can't import SASS into Lit Component | Same as actual |
| Plugin with default settings | Broken dev server, doesn't import SASS in static build | Working dev server and static build imports SASS to Lit component ([related issue](https://github.com/umbopepato/rollup-plugin-postcss-lit/issues/49#issue-1214506816)) |
| Plugin w/ alterered `include` option for SASS and CSS | Broken dev server, will import SASS in static build | Working dev server and static build imports SASS to Lit component |
| Plugin w/ alterered `include` option for SASS _only_ | Working dev server and static build, but excludes ability to process `.css` if desired | Working dev server and static build uses plugin to process SASS imports _only_ |
