(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{540:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[t._v("#")]),t._v(" Integration")]),t._v(" "),a("p",[t._v("Chart.js can be integrated with plain JavaScript or with different module loaders. The examples below show how to load Chart.js in different systems.")]),t._v(" "),a("p",[t._v("If you're using a front-end framework (e.g., React, Angular, or Vue), please see "),a("a",{attrs:{href:"https://github.com/chartjs/awesome#integrations",target:"_blank",rel:"noopener noreferrer"}},[t._v("available integrations"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"script-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-tag"}},[t._v("#")]),t._v(" Script Tag")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path/to/chartjs/dist/chart.umd.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myChart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"bundlers-webpack-rollup-etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundlers-webpack-rollup-etc"}},[t._v("#")]),t._v(" Bundlers (Webpack, Rollup, etc.)")]),t._v(" "),a("p",[t._v("Chart.js is tree-shakeable, so it is necessary to import and register the controllers, elements, scales and plugins you are going to use.")]),t._v(" "),a("h3",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick start")]),t._v(" "),a("p",[t._v("If you don't care about the bundle size, you can use the "),a("code",[t._v("auto")]),t._v(" package ensuring all features are available:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Chart "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chart.js/auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"bundle-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundle-optimization"}},[t._v("#")]),t._v(" Bundle optimization")]),t._v(" "),a("p",[t._v("When optimizing the bundle, you need to import and register the components that are needed in your application.")]),t._v(" "),a("p",[t._v("The options are categorized into controllers, elements, plugins, scales. You can pick and choose many of these, e.g. if you are not going to use tooltips, don't import and register the "),a("code",[t._v("Tooltip")]),t._v(" plugin. But each type of chart has its own bare-minimum requirements (typically the type's controller, element(s) used by that controller and scale(s)):")]),t._v(" "),a("ul",[a("li",[t._v("Bar chart\n"),a("ul",[a("li",[a("code",[t._v("BarController")])]),t._v(" "),a("li",[a("code",[t._v("BarElement")])]),t._v(" "),a("li",[t._v("Default scales: "),a("code",[t._v("CategoryScale")]),t._v(" (x), "),a("code",[t._v("LinearScale")]),t._v(" (y)")])])]),t._v(" "),a("li",[t._v("Bubble chart\n"),a("ul",[a("li",[a("code",[t._v("BubbleController")])]),t._v(" "),a("li",[a("code",[t._v("PointElement")])]),t._v(" "),a("li",[t._v("Default scales: "),a("code",[t._v("LinearScale")]),t._v(" (x/y)")])])]),t._v(" "),a("li",[t._v("Doughnut chart\n"),a("ul",[a("li",[a("code",[t._v("DoughnutController")])]),t._v(" "),a("li",[a("code",[t._v("ArcElement")])]),t._v(" "),a("li",[t._v("Not using scales")])])]),t._v(" "),a("li",[t._v("Line chart\n"),a("ul",[a("li",[a("code",[t._v("LineController")])]),t._v(" "),a("li",[a("code",[t._v("LineElement")])]),t._v(" "),a("li",[a("code",[t._v("PointElement")])]),t._v(" "),a("li",[t._v("Default scales: "),a("code",[t._v("CategoryScale")]),t._v(" (x), "),a("code",[t._v("LinearScale")]),t._v(" (y)")])])]),t._v(" "),a("li",[t._v("Pie chart\n"),a("ul",[a("li",[a("code",[t._v("PieController")])]),t._v(" "),a("li",[a("code",[t._v("ArcElement")])]),t._v(" "),a("li",[t._v("Not using scales")])])]),t._v(" "),a("li",[t._v("PolarArea chart\n"),a("ul",[a("li",[a("code",[t._v("PolarAreaController")])]),t._v(" "),a("li",[a("code",[t._v("ArcElement")])]),t._v(" "),a("li",[t._v("Default scale: "),a("code",[t._v("RadialLinearScale")]),t._v(" (r)")])])]),t._v(" "),a("li",[t._v("Radar chart\n"),a("ul",[a("li",[a("code",[t._v("RadarController")])]),t._v(" "),a("li",[a("code",[t._v("LineElement")])]),t._v(" "),a("li",[a("code",[t._v("PointElement")])]),t._v(" "),a("li",[t._v("Default scale: "),a("code",[t._v("RadialLinearScale")]),t._v(" (r)")])])]),t._v(" "),a("li",[t._v("Scatter chart\n"),a("ul",[a("li",[a("code",[t._v("ScatterController")])]),t._v(" "),a("li",[a("code",[t._v("PointElement")])]),t._v(" "),a("li",[t._v("Default scales: "),a("code",[t._v("LinearScale")]),t._v(" (x/y)")])])])]),t._v(" "),a("p",[t._v("Available plugins:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/configuration/decimation.html"}},[a("code",[t._v("Decimation")])])],1),t._v(" "),a("li",[a("code",[t._v("Filler")]),t._v(" - used to fill area described by "),a("code",[t._v("LineElement")]),t._v(", see "),a("RouterLink",{attrs:{to:"/charts/area.html"}},[t._v("Area charts")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/legend.html"}},[a("code",[t._v("Legend")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/subtitle.html"}},[a("code",[t._v("SubTitle")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/title.html"}},[a("code",[t._v("Title")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/tooltip.html"}},[a("code",[t._v("Tooltip")])])],1)]),t._v(" "),a("p",[t._v("Available scales:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Cartesian scales (x/y)")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/category.html"}},[a("code",[t._v("CategoryScale")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/linear.html"}},[a("code",[t._v("LinearScale")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/logarithmic.html"}},[a("code",[t._v("LogarithmicScale")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/time.html"}},[a("code",[t._v("TimeScale")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/timeseries.html"}},[a("code",[t._v("TimeSeriesScale")])])],1)])]),t._v(" "),a("li",[a("p",[t._v("Radial scales (r)")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/axes/radial/linear.html"}},[a("code",[t._v("RadialLinearScale")])])],1)])])]),t._v(" "),a("h3",{attrs:{id:"helper-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helper-functions"}},[t._v("#")]),t._v(" Helper functions")]),t._v(" "),a("p",[t._v("If you want to use the helper functions, you will need to import these separately from the helpers package and use them as stand-alone functions.")]),t._v(" "),a("p",[t._v("Example of "),a("RouterLink",{attrs:{to:"/configuration/interactions.html#converting-events-to-data-values"}},[t._v("Converting Events to Data Values")]),t._v(" using bundlers.")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Chart "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chart.js/auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getRelativePosition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chart.js/helpers'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" canvasPosition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRelativePosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Substitute the appropriate scale IDs")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dataX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValueForPixel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvasPosition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dataY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValueForPixel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvasPosition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[t._v("#")]),t._v(" CommonJS")]),t._v(" "),a("p",[t._v("Because Chart.js is an ESM library, in CommonJS modules you should use a dynamic "),a("code",[t._v("import")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Chart "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chart.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"requirejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirejs"}},[t._v("#")]),t._v(" RequireJS")]),t._v(" "),a("p",[a("strong",[t._v("Important:")]),t._v(" RequireJS can load only "),a("a",{attrs:{href:"https://requirejs.org/docs/whyamd.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AMD modules"),a("OutboundLink")],1),t._v(", so be sure to require one of the UMD builds instead (i.e. "),a("code",[t._v("dist/chart.umd.js")]),t._v(").")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/chartjs/dist/chart.umd.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myChart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("In order to use the time scale, you need to make sure "),a("a",{attrs:{href:"https://github.com/chartjs/awesome#adapters",target:"_blank",rel:"noopener noreferrer"}},[t._v("one of the available date adapters"),a("OutboundLink")],1),t._v(" and corresponding date library are fully loaded "),a("strong",[t._v("after")]),t._v(" requiring Chart.js. For this you can use nested requires:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chartjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chartjs-adapter-moment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);