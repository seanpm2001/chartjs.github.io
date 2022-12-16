(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{503:function(t,e,a){"use strict";a.r(e);var r=a(7),o=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bubble-chart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bubble-chart"}},[t._v("#")]),t._v(" Bubble Chart")]),t._v(" "),e("p",[t._v("A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles.")]),t._v(" "),e("chart-editor",{attrs:{code:"// <block:setup:1>\nconst data = {\n  datasets: [{\n    label: 'First Dataset',\n    data: [{\n      x: 20,\n      y: 30,\n      r: 15\n    }, {\n      x: 40,\n      y: 10,\n      r: 10\n    }],\n    backgroundColor: 'rgb(255, 99, 132)'\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bubble',\n  data: data,\n  options: {}\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),e("h2",{attrs:{id:"dataset-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dataset-properties"}},[t._v("#")]),t._v(" Dataset Properties")]),t._v(" "),e("p",[t._v("Namespaces:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data.datasets[index]")]),t._v(" - options for this dataset only")]),t._v(" "),e("li",[e("code",[t._v("options.datasets.bubble")]),t._v(" - options for all bubble datasets")]),t._v(" "),e("li",[e("code",[t._v("options.elements.point")]),t._v(" - options for all "),e("RouterLink",{attrs:{to:"/configuration/elements.html#point-configuration"}},[t._v("point elements")])],1),t._v(" "),e("li",[e("code",[t._v("options")]),t._v(" - options for the whole chart")])]),t._v(" "),e("p",[t._v("The bubble chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of the bubbles is generally set this way.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/general/options.html#indexable-options"}},[t._v("Indexable")])],1),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("backgroundColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("3")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("clip")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("object")]),t._v("|"),e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#data-structure"}},[e("code",[t._v("data")])])]),t._v(" "),e("td",[e("code",[t._v("object[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("strong",[t._v("required")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("drawActiveElementsOnTop")])])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBackgroundColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverRadius")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("4")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hitRadius")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("label")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("order")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("pointStyle")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/configuration/elements.html#types"}},[e("code",[t._v("pointStyle")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'circle'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("rotation")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("radius")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("3")])])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the scopes described in "),e("a",{attrs:{href:"../general/options"}},[t._v("option resolution")])]),t._v(" "),e("h3",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("clip")])]),t._v(" "),e("td",[t._v("How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. "),e("code",[t._v("0")]),t._v(" = clip at chartArea. Clipping can also be configured per side: "),e("code",[t._v("clip: {left: 5, top: false, right: -2, bottom: 0}")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("drawActiveElementsOnTop")])]),t._v(" "),e("td",[t._v("Draw the active bubbles of a dataset over the other bubbles of the dataset")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("label")])]),t._v(" "),e("td",[t._v("The label for the dataset which appears in the legend and tooltips.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("order")])]),t._v(" "),e("td",[t._v("The drawing order of dataset. Also affects order for tooltip and legend. "),e("RouterLink",{attrs:{to:"/charts/mixed.html#drawing-order"}},[t._v("more")])],1)])])]),t._v(" "),e("h3",{attrs:{id:"styling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),e("p",[t._v("The style of each bubble can be controlled with the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("backgroundColor")])]),t._v(" "),e("td",[t._v("bubble background color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderColor")])]),t._v(" "),e("td",[t._v("bubble border color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderWidth")])]),t._v(" "),e("td",[t._v("bubble border width (in pixels).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointStyle")])]),t._v(" "),e("td",[t._v("bubble "),e("RouterLink",{attrs:{to:"/configuration/elements.html#point-styles"}},[t._v("shape style")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("rotation")])]),t._v(" "),e("td",[t._v("bubble rotation (in degrees).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("radius")])]),t._v(" "),e("td",[t._v("bubble radius (in pixels).")])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the associated "),e("RouterLink",{attrs:{to:"/configuration/elements.html#point-configuration"}},[e("code",[t._v("elements.point.*")])]),t._v(" options.")],1),t._v(" "),e("h3",{attrs:{id:"interactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interactions"}},[t._v("#")]),t._v(" Interactions")]),t._v(" "),e("p",[t._v("The interaction with each bubble can be controlled with the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("hitRadius")])]),t._v(" "),e("td",[t._v("bubble "),e("strong",[t._v("additional")]),t._v(" radius for hit detection (in pixels).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBackgroundColor")])]),t._v(" "),e("td",[t._v("bubble background color when hovered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderColor")])]),t._v(" "),e("td",[t._v("bubble border color when hovered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderWidth")])]),t._v(" "),e("td",[t._v("bubble border width when hovered (in pixels).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverRadius")])]),t._v(" "),e("td",[t._v("bubble "),e("strong",[t._v("additional")]),t._v(" radius when hovered (in pixels).")])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the associated "),e("RouterLink",{attrs:{to:"/configuration/elements.html#point-configuration"}},[e("code",[t._v("elements.point.*")])]),t._v(" options.")],1),t._v(" "),e("h2",{attrs:{id:"default-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-options"}},[t._v("#")]),t._v(" Default Options")]),t._v(" "),e("p",[t._v("We can also change the default values for the Bubble chart type. Doing so will give all bubble charts created after this point the new defaults. The default configuration for the bubble chart can be accessed at "),e("code",[t._v("Chart.overrides.bubble")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"data-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),e("p",[t._v("Bubble chart datasets need to contain a "),e("code",[t._v("data")]),t._v(" array of points, each point represented by an object containing the following properties:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// X Value")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Y Value")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bubble radius in pixels (not scaled).")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("r")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Important:")]),t._v(" the radius property, "),e("code",[t._v("r")]),t._v(" is "),e("strong",[t._v("not")]),t._v(" scaled by the chart, it is the raw radius in pixels of the bubble that is drawn on the canvas.")]),t._v(" "),e("h2",{attrs:{id:"internal-data-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-data-format"}},[t._v("#")]),t._v(" Internal data format")]),t._v(" "),e("p",[e("code",[t._v("{x, y, _custom}")]),t._v(" where "),e("code",[t._v("_custom")]),t._v(" is the radius.")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);