(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{472:function(n,t,a){"use strict";a.r(t);var e=a(3),r=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"line-chart-drawtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#line-chart-drawtime"}},[this._v("#")]),this._v(" Line Chart drawTime")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:2>\nconst inputs = {\n  min: -100,\n  max: 100,\n  count: 8,\n  decimals: 2,\n  continuity: 1\n};\n\nconst generateLabels = () => {\n  return Utils.months({count: inputs.count});\n};\n\nUtils.srand(3);\nconst generateData = () => (Utils.numbers(inputs));\n// </block:setup>\n\n// <block:data:0>\nconst data = {\n  labels: generateLabels(),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.CHART_COLORS.red,\n      fill: true\n    },\n    {\n      label: 'Dataset 2',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue),\n      fill: true\n    }\n  ]\n};\n// </block:data>\n\n// <block:actions:3>\nlet smooth = false;\n\nconst actions = [\n  {\n    name: 'drawTime: beforeDatasetDraw (default)',\n    handler: (chart) => {\n      chart.options.plugins.filler.drawTime = 'beforeDatasetDraw';\n      chart.update();\n    }\n  },\n  {\n    name: 'drawTime: beforeDatasetsDraw',\n    handler: (chart) => {\n      chart.options.plugins.filler.drawTime = 'beforeDatasetsDraw';\n      chart.update();\n    }\n  },\n  {\n    name: 'drawTime: beforeDraw',\n    handler: (chart) => {\n      chart.options.plugins.filler.drawTime = 'beforeDraw';\n      chart.update();\n    }\n  },\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Smooth',\n    handler(chart) {\n      smooth = !smooth;\n      chart.options.elements.line.tension = smooth ? 0.4 : 0;\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:config:1>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      filler: {\n        propagate: false,\n      },\n      title: {\n        display: true,\n        text: (ctx) => 'drawTime: ' + ctx.chart.options.plugins.filler.drawTime\n      }\n    },\n    pointBackgroundColor: '#fff',\n    radius: 10,\n    interaction: {\n      intersect: false,\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);