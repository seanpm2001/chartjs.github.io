(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{483:function(n,t,e){"use strict";e.r(t);var o=e(3),s=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"point-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#point-style"}},[this._v("#")]),this._v(" Point Style")]),this._v(" "),t("p",[this._v("This sample show how to use the dataset point style in the legend instead of a rectangle to identify each dataset..")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Toggle Point Style',\n    handler(chart) {\n      chart.options.plugins.legend.labels.usePointStyle = !chart.options.plugins.legend.labels.usePointStyle;\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      borderWidth: 1,\n      pointStyle: 'rectRot',\n      pointRadius: 5,\n      pointBorderColor: 'rgb(0, 0, 0)'\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      legend: {\n        labels: {\n          usePointStyle: true,\n        },\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);