(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{503:function(t,n,r){"use strict";r.r(n);var e=r(3),o=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"chart-area-border"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chart-area-border"}},[this._v("#")]),this._v(" Chart Area Border")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:data:2>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    }\n  ]\n};\n// </block:data>\n\n// <block:plugin:1>\nconst chartAreaBorder = {\n  id: 'chartAreaBorder',\n  beforeDraw(chart, args, options) {\n    const {ctx, chartArea: {left, top, width, height}} = chart;\n    ctx.save();\n    ctx.strokeStyle = options.borderColor;\n    ctx.lineWidth = options.borderWidth;\n    ctx.setLineDash(options.borderDash || []);\n    ctx.lineDashOffset = options.borderDashOffset;\n    ctx.strokeRect(left, top, width, height);\n    ctx.restore();\n  }\n};\n// </block:plugin>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      chartAreaBorder: {\n        borderColor: 'red',\n        borderWidth: 2,\n        borderDash: [5, 5],\n        borderDashOffset: 2,\n      }\n    }\n  },\n  plugins: [chartAreaBorder]\n};\n// </block:config>\n\nmodule.exports = {\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);n.default=o.exports}}]);