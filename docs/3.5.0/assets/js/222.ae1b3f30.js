(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{510:function(t,n,o){"use strict";o.r(n);var a=o(3),i=Object(a.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"quadrants"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quadrants"}},[this._v("#")]),this._v(" Quadrants")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:data:2>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.points(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.points(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    }\n  ]\n};\n// </block:data>\n\n// <block:plugin:1>\nconst quadrants = {\n  id: 'quadrants',\n  beforeDraw(chart, args, options) {\n    const {ctx, chartArea: {left, top, right, bottom}, scales: {x, y}} = chart;\n    const midX = x.getPixelForValue(0);\n    const midY = y.getPixelForValue(0);\n    ctx.save();\n    ctx.fillStyle = options.topLeft;\n    ctx.fillRect(left, top, midX - left, midY - top);\n    ctx.fillStyle = options.topRight;\n    ctx.fillRect(midX, top, right - midX, midY - top);\n    ctx.fillStyle = options.bottomRight;\n    ctx.fillRect(midX, midY, right - midX, bottom - midY);\n    ctx.fillStyle = options.bottomLeft;\n    ctx.fillRect(left, midY, midX - left, bottom - midY);\n    ctx.restore();\n  }\n};\n// </block:plugin>\n\n// <block:config:0>\nconst config = {\n  type: 'scatter',\n  data: data,\n  options: {\n    plugins: {\n      quadrants: {\n        topLeft: Utils.CHART_COLORS.red,\n        topRight: Utils.CHART_COLORS.blue,\n        bottomRight: Utils.CHART_COLORS.green,\n        bottomLeft: Utils.CHART_COLORS.yellow,\n      }\n    }\n  },\n  plugins: [quadrants]\n};\n// </block:config>\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.points(NUMBER_CFG);\n      });\n      chart.update();\n    }\n  },\n];\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}})],1)}),[],!1,null,null,null);n.default=i.exports}}]);