(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{504:function(t,e,a){"use strict";a.r(e);var n=a(7),o=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"line-chart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#line-chart"}},[t._v("#")]),t._v(" Line Chart")]),t._v(" "),e("p",[t._v("A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.")]),t._v(" "),e("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [{\n    label: 'My First Dataset',\n    data: [65, 59, 80, 81, 56, 55, 40],\n    fill: false,\n    borderColor: 'rgb(75, 192, 192)',\n    tension: 0.1\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),e("h2",{attrs:{id:"dataset-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dataset-properties"}},[t._v("#")]),t._v(" Dataset Properties")]),t._v(" "),e("p",[t._v("Namespaces:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data.datasets[index]")]),t._v(" - options for this dataset only")]),t._v(" "),e("li",[e("code",[t._v("options.datasets.line")]),t._v(" - options for all line datasets")]),t._v(" "),e("li",[e("code",[t._v("options.elements.line")]),t._v(" - options for all "),e("RouterLink",{attrs:{to:"/configuration/elements.html#line-configuration"}},[t._v("line elements")])],1),t._v(" "),e("li",[e("code",[t._v("options.elements.point")]),t._v(" - options for all "),e("RouterLink",{attrs:{to:"/configuration/elements.html#point-configuration"}},[t._v("point elements")])],1),t._v(" "),e("li",[e("code",[t._v("options")]),t._v(" - options for the whole chart")])]),t._v(" "),e("p",[t._v("The line chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of a line is generally set this way.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/general/options.html#indexable-options"}},[t._v("Indexable")])],1),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("backgroundColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("borderCapStyle")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("'butt'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("borderColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("borderDash")])])]),t._v(" "),e("td",[e("code",[t._v("number[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("[]")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("borderDashOffset")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("0.0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("borderJoinStyle")])])]),t._v(" "),e("td",[e("code",[t._v("'round'")]),t._v("|"),e("code",[t._v("'bevel'")]),t._v("|"),e("code",[t._v("'miter'")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("'miter'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("borderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("3")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("clip")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("object")]),t._v("|"),e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#cubicinterpolationmode"}},[e("code",[t._v("cubicInterpolationMode")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("'default'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#data-structure"}},[e("code",[t._v("data")])])]),t._v(" "),e("td",[e("code",[t._v("object")]),t._v("|"),e("code",[t._v("object[]")]),t._v("| "),e("code",[t._v("number[]")]),t._v("|"),e("code",[t._v("string[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("strong",[t._v("required")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("drawActiveElementsOnTop")])])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("fill")])])]),t._v(" "),e("td",[e("code",[t._v("boolean")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("hoverBackgroundColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("hoverBorderCapStyle")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("hoverBorderColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("hoverBorderDash")])])]),t._v(" "),e("td",[e("code",[t._v("number[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("hoverBorderDashOffset")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("hoverBorderJoinStyle")])])]),t._v(" "),e("td",[e("code",[t._v("'round'")]),t._v("|"),e("code",[t._v("'bevel'")]),t._v("|"),e("code",[t._v("'miter'")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("hoverBorderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("indexAxis")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("'x'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("label")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("''")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("order")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#point-styling"}},[e("code",[t._v("pointBackgroundColor")])])]),t._v(" "),e("td",[e("code",[t._v("Color")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#point-styling"}},[e("code",[t._v("pointBorderColor")])])]),t._v(" "),e("td",[e("code",[t._v("Color")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#point-styling"}},[e("code",[t._v("pointBorderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#point-styling"}},[e("code",[t._v("pointHitRadius")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("pointHoverBackgroundColor")])])]),t._v(" "),e("td",[e("code",[t._v("Color")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("pointHoverBorderColor")])])]),t._v(" "),e("td",[e("code",[t._v("Color")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("pointHoverBorderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("pointHoverRadius")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("4")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#point-styling"}},[e("code",[t._v("pointRadius")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("3")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#point-styling"}},[e("code",[t._v("pointRotation")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#point-styling"}},[e("code",[t._v("pointStyle")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/configuration/elements.html#types"}},[e("code",[t._v("pointStyle")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'circle'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#segment"}},[e("code",[t._v("segment")])])]),t._v(" "),e("td",[e("code",[t._v("object")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("showLine")])])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("spanGaps")])])]),t._v(" "),e("td",[e("code",[t._v("boolean")]),t._v("|"),e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("stack")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("'line'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#stepped"}},[e("code",[t._v("stepped")])])]),t._v(" "),e("td",[e("code",[t._v("boolean")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("tension")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("xAxisID")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[t._v("first x axis")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("yAxisID")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[t._v("first y axis")])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the scopes described in "),e("a",{attrs:{href:"../general/options"}},[t._v("option resolution")])]),t._v(" "),e("h3",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("clip")])]),t._v(" "),e("td",[t._v("How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. "),e("code",[t._v("0")]),t._v(" = clip at chartArea. Clipping can also be configured per side: "),e("code",[t._v("clip: {left: 5, top: false, right: -2, bottom: 0}")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("drawActiveElementsOnTop")])]),t._v(" "),e("td",[t._v("Draw the active points of a dataset over the other points of the dataset")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("indexAxis")])]),t._v(" "),e("td",[t._v("The base axis of the dataset. "),e("code",[t._v("'x'")]),t._v(" for horizontal lines and "),e("code",[t._v("'y'")]),t._v(" for vertical lines.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("label")])]),t._v(" "),e("td",[t._v("The label for the dataset which appears in the legend and tooltips.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("order")])]),t._v(" "),e("td",[t._v("The drawing order of dataset. Also affects order for stacking, tooltip and legend. "),e("RouterLink",{attrs:{to:"/charts/mixed.html#drawing-order"}},[t._v("more")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("stack")])]),t._v(" "),e("td",[t._v("The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack). "),e("a",{attrs:{href:"#stacked-area-chart"}},[t._v("more")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("xAxisID")])]),t._v(" "),e("td",[t._v("The ID of the x-axis to plot this dataset on.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("yAxisID")])]),t._v(" "),e("td",[t._v("The ID of the y-axis to plot this dataset on.")])])])]),t._v(" "),e("h3",{attrs:{id:"point-styling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#point-styling"}},[t._v("#")]),t._v(" Point Styling")]),t._v(" "),e("p",[t._v("The style of each point can be controlled with the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("pointBackgroundColor")])]),t._v(" "),e("td",[t._v("The fill color for points.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointBorderColor")])]),t._v(" "),e("td",[t._v("The border color for points.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointBorderWidth")])]),t._v(" "),e("td",[t._v("The width of the point border in pixels.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointHitRadius")])]),t._v(" "),e("td",[t._v("The pixel size of the non-displayed point that reacts to mouse events.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointRadius")])]),t._v(" "),e("td",[t._v("The radius of the point shape. If set to 0, the point is not rendered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointRotation")])]),t._v(" "),e("td",[t._v("The rotation of the point in degrees.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointStyle")])]),t._v(" "),e("td",[t._v("Style of the point. "),e("RouterLink",{attrs:{to:"/configuration/elements.html#point-styles"}},[t._v("more...")])],1)])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback first to the dataset options then to the associated "),e("RouterLink",{attrs:{to:"/configuration/elements.html#point-configuration"}},[e("code",[t._v("elements.point.*")])]),t._v(" options.")],1),t._v(" "),e("h3",{attrs:{id:"line-styling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#line-styling"}},[t._v("#")]),t._v(" Line Styling")]),t._v(" "),e("p",[t._v("The style of the line can be controlled with the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("backgroundColor")])]),t._v(" "),e("td",[t._v("The line fill color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderCapStyle")])]),t._v(" "),e("td",[t._v("Cap style of the line. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderColor")])]),t._v(" "),e("td",[t._v("The line color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderDash")])]),t._v(" "),e("td",[t._v("Length and spacing of dashes. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderDashOffset")])]),t._v(" "),e("td",[t._v("Offset for line dashes. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderJoinStyle")])]),t._v(" "),e("td",[t._v("Line joint style. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderWidth")])]),t._v(" "),e("td",[t._v("The line width (in pixels).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("fill")])]),t._v(" "),e("td",[t._v("How to fill the area under the line. See "),e("RouterLink",{attrs:{to:"/charts/area.html"}},[t._v("area charts")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("tension")])]),t._v(" "),e("td",[t._v("Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("showLine")])]),t._v(" "),e("td",[t._v("If false, the line is not drawn for this dataset.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("spanGaps")])]),t._v(" "),e("td",[t._v("If true, lines will be drawn between points with no or null data. If false, points with "),e("code",[t._v("null")]),t._v(" data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.")])])])]),t._v(" "),e("p",[t._v("If the value is "),e("code",[t._v("undefined")]),t._v(", the values fallback to the associated "),e("RouterLink",{attrs:{to:"/configuration/elements.html#line-configuration"}},[e("code",[t._v("elements.line.*")])]),t._v(" options.")],1),t._v(" "),e("h3",{attrs:{id:"interactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interactions"}},[t._v("#")]),t._v(" Interactions")]),t._v(" "),e("p",[t._v("The interaction with each point can be controlled with the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("pointHoverBackgroundColor")])]),t._v(" "),e("td",[t._v("Point background color when hovered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointHoverBorderColor")])]),t._v(" "),e("td",[t._v("Point border color when hovered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointHoverBorderWidth")])]),t._v(" "),e("td",[t._v("Border width of point when hovered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointHoverRadius")])]),t._v(" "),e("td",[t._v("The radius of the point when hovered.")])])])]),t._v(" "),e("h3",{attrs:{id:"cubicinterpolationmode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cubicinterpolationmode"}},[t._v("#")]),t._v(" cubicInterpolationMode")]),t._v(" "),e("p",[t._v("The following interpolation modes are supported.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("'default'")])]),t._v(" "),e("li",[e("code",[t._v("'monotone'")])])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("'default'")]),t._v(" algorithm uses a custom weighted cubic interpolation, which produces pleasant curves for all types of datasets.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("'monotone'")]),t._v(" algorithm is more suited to "),e("code",[t._v("y = f(x)")]),t._v(" datasets: it preserves monotonicity (or piecewise monotonicity) of the dataset being interpolated, and ensures local extremums (if any) stay at input data points.")]),t._v(" "),e("p",[t._v("If left untouched ("),e("code",[t._v("undefined")]),t._v("), the global "),e("code",[t._v("options.elements.line.cubicInterpolationMode")]),t._v(" property is used.")]),t._v(" "),e("h3",{attrs:{id:"segment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#segment"}},[t._v("#")]),t._v(" Segment")]),t._v(" "),e("p",[t._v("Line segment styles can be overridden by scriptable options in the "),e("code",[t._v("segment")]),t._v(" object. Currently all of the "),e("code",[t._v("border*")]),t._v(" and "),e("code",[t._v("backgroundColor")]),t._v(" options are supported. The segment styles are resolved for each section of the line between each point. "),e("code",[t._v("undefined")]),t._v(" fallbacks to main line styles.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("To be able to style gaps, you need the "),e("a",{attrs:{href:"#line-styling"}},[e("code",[t._v("spanGaps")])]),t._v(" option enabled.")])]),t._v(" "),e("p",[t._v("Context for the scriptable segment contains the following properties:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("type")]),t._v(": "),e("code",[t._v("'segment'")])]),t._v(" "),e("li",[e("code",[t._v("p0")]),t._v(": first point element")]),t._v(" "),e("li",[e("code",[t._v("p1")]),t._v(": second point element")]),t._v(" "),e("li",[e("code",[t._v("p0DataIndex")]),t._v(": index of first point in the data array")]),t._v(" "),e("li",[e("code",[t._v("p1DataIndex")]),t._v(": index of second point in the data array")]),t._v(" "),e("li",[e("code",[t._v("datasetIndex")]),t._v(": dataset index")])]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/samples/line/segments.html"}},[t._v("Example usage")])],1),t._v(" "),e("h3",{attrs:{id:"stepped"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stepped"}},[t._v("#")]),t._v(" Stepped")]),t._v(" "),e("p",[t._v("The following values are supported for "),e("code",[t._v("stepped")]),t._v(".")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("false")]),t._v(": No Step Interpolation (default)")]),t._v(" "),e("li",[e("code",[t._v("true")]),t._v(": Step-before Interpolation (eq. "),e("code",[t._v("'before'")]),t._v(")")]),t._v(" "),e("li",[e("code",[t._v("'before'")]),t._v(": Step-before Interpolation")]),t._v(" "),e("li",[e("code",[t._v("'after'")]),t._v(": Step-after Interpolation")]),t._v(" "),e("li",[e("code",[t._v("'middle'")]),t._v(": Step-middle Interpolation")])]),t._v(" "),e("p",[t._v("If the "),e("code",[t._v("stepped")]),t._v(" value is set to anything other than false, "),e("code",[t._v("tension")]),t._v(" will be ignored.")]),t._v(" "),e("h2",{attrs:{id:"default-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-options"}},[t._v("#")]),t._v(" Default Options")]),t._v(" "),e("p",[t._v("It is common to want to apply a configuration setting to all created line charts. The global line chart settings are stored in "),e("code",[t._v("Chart.overrides.line")]),t._v(". Changing the global options only affects charts created after the change. Existing charts are not changed.")]),t._v(" "),e("p",[t._v("For example, to configure all line charts with "),e("code",[t._v("spanGaps = true")]),t._v(" you would do:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("Chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("overrides"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("line"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spanGaps "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"data-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),e("p",[t._v("All of the supported "),e("RouterLink",{attrs:{to:"/general/data-structures.html"}},[t._v("data structures")]),t._v(" can be used with line charts.")],1),t._v(" "),e("h2",{attrs:{id:"stacked-area-chart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stacked-area-chart"}},[t._v("#")]),t._v(" Stacked Area Chart")]),t._v(" "),e("p",[t._v("Line charts can be configured into stacked area charts by changing the settings on the y-axis to enable stacking. Stacked area charts can be used to show how one data trend is made up of a number of smaller pieces.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stackedLine "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stacked")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"vertical-line-chart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vertical-line-chart"}},[t._v("#")]),t._v(" Vertical Line Chart")]),t._v(" "),e("p",[t._v("A vertical line chart is a variation on the horizontal line chart.\nTo achieve this you will have to set the "),e("code",[t._v("indexAxis")]),t._v(" property in the options object to "),e("code",[t._v("'y'")]),t._v(".\nThe default for this property is "),e("code",[t._v("'x'")]),t._v(" and thus will show horizontal lines.")]),t._v(" "),e("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [{\n    axis: 'y',\n    label: 'My First Dataset',\n    data: [65, 59, 80, 81, 56, 55, 40],\n    fill: false,\n    backgroundColor: [\n      'rgba(255, 99, 132, 0.2)',\n      'rgba(255, 159, 64, 0.2)',\n      'rgba(255, 205, 86, 0.2)',\n      'rgba(75, 192, 192, 0.2)',\n      'rgba(54, 162, 235, 0.2)',\n      'rgba(153, 102, 255, 0.2)',\n      'rgba(201, 203, 207, 0.2)'\n    ],\n    borderColor: [\n      'rgb(255, 99, 132)',\n      'rgb(255, 159, 64)',\n      'rgb(255, 205, 86)',\n      'rgb(75, 192, 192)',\n      'rgb(54, 162, 235)',\n      'rgb(153, 102, 255)',\n      'rgb(201, 203, 207)'\n    ],\n    borderWidth: 1\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    indexAxis: 'y',\n    scales: {\n      x: {\n        beginAtZero: true\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),e("h3",{attrs:{id:"config-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-options"}},[t._v("#")]),t._v(" Config Options")]),t._v(" "),e("p",[t._v("The configuration options for the vertical line chart are the same as for the "),e("a",{attrs:{href:"#configuration-options"}},[t._v("line chart")]),t._v(". However, any options specified on the x-axis in a line chart, are applied to the y-axis in a vertical line chart.")]),t._v(" "),e("h2",{attrs:{id:"internal-data-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-data-format"}},[t._v("#")]),t._v(" Internal data format")]),t._v(" "),e("p",[e("code",[t._v("{x, y}")])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);