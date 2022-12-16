(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{518:function(t,e,a){"use strict";a.r(e);var s=a(7),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"legend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#legend"}},[t._v("#")]),t._v(" Legend")]),t._v(" "),e("p",[t._v("The chart legend displays data about the datasets that are appearing on the chart.")]),t._v(" "),e("h2",{attrs:{id:"configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration options")]),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options.plugins.legend")]),t._v(", the global options for the chart legend is defined in "),e("code",[t._v("Chart.defaults.plugins.legend")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("The doughnut, pie, and polar area charts override the legend defaults. To change the overrides for those chart types, the options are defined in "),e("code",[t._v("Chart.overrides[type].plugins.legend")]),t._v(".")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("display")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Is the legend shown?")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("position")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("'top'")])]),t._v(" "),e("td",[t._v("Position of the legend. "),e("a",{attrs:{href:"#position"}},[t._v("more...")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("align")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("'center'")])]),t._v(" "),e("td",[t._v("Alignment of the legend. "),e("a",{attrs:{href:"#align"}},[t._v("more...")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("maxHeight")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Maximum height of the legend, in pixels")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("maxWidth")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Maximum width of the legend, in pixels")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("fullSize")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Marks that this box should take the full width/height of the canvas (moving other boxes). This is unlikely to need to be changed in day-to-day use.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("onClick")])]),t._v(" "),e("td",[e("code",[t._v("function")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("A callback that is called when a click event is registered on a label item. Arguments: "),e("code",[t._v("[event, legendItem, legend]")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("onHover")])]),t._v(" "),e("td",[e("code",[t._v("function")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("A callback that is called when a 'mousemove' event is registered on top of a label item. Arguments: "),e("code",[t._v("[event, legendItem, legend]")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("onLeave")])]),t._v(" "),e("td",[e("code",[t._v("function")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("A callback that is called when a 'mousemove' event is registered outside of a previously hovered label item. Arguments: "),e("code",[t._v("[event, legendItem, legend]")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("reverse")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Legend will show datasets in reverse order.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("labels")])]),t._v(" "),e("td",[e("code",[t._v("object")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("See the "),e("a",{attrs:{href:"#legend-label-configuration"}},[t._v("Legend Label Configuration")]),t._v(" section below.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("rtl")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",[t._v("true")]),t._v(" for rendering the legends from right to left.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textDirection")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("canvas' default")]),t._v(" "),e("td",[t._v("This will force the text direction "),e("code",[t._v("'rtl'")]),t._v(" or "),e("code",[t._v("'ltr'")]),t._v(" on the canvas for rendering the legend, regardless of the css specified on the canvas")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("title")])]),t._v(" "),e("td",[e("code",[t._v("object")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("See the "),e("a",{attrs:{href:"#legend-title-configuration"}},[t._v("Legend Title Configuration")]),t._v(" section below.")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("If you need more visual customizations, please use an "),e("RouterLink",{attrs:{to:"/samples/legend/html.html"}},[t._v("HTML legend")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"position"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" Position")]),t._v(" "),e("p",[t._v("Position of the legend. Options are:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("'top'")])]),t._v(" "),e("li",[e("code",[t._v("'left'")])]),t._v(" "),e("li",[e("code",[t._v("'bottom'")])]),t._v(" "),e("li",[e("code",[t._v("'right'")])]),t._v(" "),e("li",[e("code",[t._v("'chartArea'")])])]),t._v(" "),e("p",[t._v("When using the "),e("code",[t._v("'chartArea'")]),t._v(" option the legend position is at the moment not configurable, it will always be on the left side of the chart in the middle.")]),t._v(" "),e("h2",{attrs:{id:"align"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#align"}},[t._v("#")]),t._v(" Align")]),t._v(" "),e("p",[t._v("Alignment of the legend. Options are:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("'start'")])]),t._v(" "),e("li",[e("code",[t._v("'center'")])]),t._v(" "),e("li",[e("code",[t._v("'end'")])])]),t._v(" "),e("p",[t._v("Defaults to "),e("code",[t._v("'center'")]),t._v(" for unrecognized values.")]),t._v(" "),e("h2",{attrs:{id:"legend-label-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#legend-label-configuration"}},[t._v("#")]),t._v(" Legend Label Configuration")]),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options.plugins.legend.labels")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("boxWidth")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("40")])]),t._v(" "),e("td",[t._v("Width of coloured box.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("boxHeight")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("font.size")])]),t._v(" "),e("td",[t._v("Height of the coloured box.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("color")])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",[e("code",[t._v("Chart.defaults.color")])]),t._v(" "),e("td",[t._v("Color of label and the strikethrough.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("font")])]),t._v(" "),e("td",[e("code",[t._v("Font")])]),t._v(" "),e("td",[e("code",[t._v("Chart.defaults.font")])]),t._v(" "),e("td",[t._v("See "),e("RouterLink",{attrs:{to:"/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("padding")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("10")])]),t._v(" "),e("td",[t._v("Padding between rows of colored boxes.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("generateLabels")])]),t._v(" "),e("td",[e("code",[t._v("function")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box. See "),e("a",{attrs:{href:"#legend-item-interface"}},[t._v("Legend Item")]),t._v(" for details.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("filter")])]),t._v(" "),e("td",[e("code",[t._v("function")])]),t._v(" "),e("td",[e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Filters legend items out of the legend. Receives 2 parameters, a "),e("a",{attrs:{href:"#legend-item-interface"}},[t._v("Legend Item")]),t._v(" and the chart data.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sort")])]),t._v(" "),e("td",[e("code",[t._v("function")])]),t._v(" "),e("td",[e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Sorts legend items. Type is : "),e("code",[t._v("sort(a: LegendItem, b: LegendItem, data: ChartData): number;")]),t._v(". Receives 3 parameters, two "),e("a",{attrs:{href:"#legend-item-interface"}},[t._v("Legend Items")]),t._v(" and the chart data. The return value of the function is a number that indicates the order of the two legend item parameters. The ordering matches the "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description",target:"_blank",rel:"noopener noreferrer"}},[t._v("return value"),e("OutboundLink")],1),t._v(" of "),e("code",[t._v("Array.prototype.sort()")])])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/configuration/elements.html#point-styles"}},[e("code",[t._v("pointStyle")])])],1),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/configuration/elements.html#types"}},[e("code",[t._v("pointStyle")])])],1),t._v(" "),e("td",[e("code",[t._v("'circle'")])]),t._v(" "),e("td",[t._v("If specified, this style of point is used for the legend. Only used if "),e("code",[t._v("usePointStyle")]),t._v(" is true.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textAlign")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("'center'")])]),t._v(" "),e("td",[t._v("Horizontal alignment of the label text. Options are: "),e("code",[t._v("'left'")]),t._v(", "),e("code",[t._v("'right'")]),t._v(" or "),e("code",[t._v("'center'")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("usePointStyle")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Label style will match corresponding point style (size is based on pointStyleWidth or the minimum value between boxWidth and font.size).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pointStyleWidth")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("usePointStyle")]),t._v(" is true, the width of the point style used for the legend.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("useBorderRadius")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Label borderRadius will match corresponding borderRadius.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderRadius")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("undefined")])]),t._v(" "),e("td",[t._v("Override the borderRadius to use.")])])])]),t._v(" "),e("h2",{attrs:{id:"legend-title-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#legend-title-configuration"}},[t._v("#")]),t._v(" Legend Title Configuration")]),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options.plugins.legend.title")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("color")])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",[e("code",[t._v("Chart.defaults.color")])]),t._v(" "),e("td",[t._v("Color of text.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("display")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Is the legend title displayed.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("font")])]),t._v(" "),e("td",[e("code",[t._v("Font")])]),t._v(" "),e("td",[e("code",[t._v("Chart.defaults.font")])]),t._v(" "),e("td",[t._v("See "),e("RouterLink",{attrs:{to:"/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("padding")])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/padding.html"}},[e("code",[t._v("Padding")])])],1),t._v(" "),e("td",[e("code",[t._v("0")])]),t._v(" "),e("td",[t._v("Padding around the title.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("text")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The string title.")])])])]),t._v(" "),e("h2",{attrs:{id:"legend-item-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#legend-item-interface"}},[t._v("#")]),t._v(" Legend Item Interface")]),t._v(" "),e("p",[t._v("Items passed to the legend "),e("code",[t._v("onClick")]),t._v(" function are the ones returned from "),e("code",[t._v("labels.generateLabels")]),t._v(". These items must implement the following interface.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Label that will be displayed")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Border radius of the legend item.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Introduced in 3.1.0")]),t._v("\n    borderRadius"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" BorderRadius"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Index of the associated dataset")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasetIndex")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fill style of the legend box")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fillStyle")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Text color")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fontColor")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If true, this item represents a hidden dataset. Label will be rendered with a strike-through effect")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hidden")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For box border. See https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lineCap")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lineDash")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lineDashOffset")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lineJoin")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Width of box border")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lineWidth")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Stroke style of the legend box")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("strokeStyle")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Point style of the legend box (only used if usePointStyle is true)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pointStyle")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Image "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" HTMLCanvasElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Rotation of the point in degrees (only used if usePointStyle is true)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rotation")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("The following example will create a chart with the legend enabled and turn all of the text red in color.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("legend")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(255, 99, 132)'")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"custom-on-click-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-on-click-actions"}},[t._v("#")]),t._v(" Custom On Click Actions")]),t._v(" "),e("p",[t._v("It can be common to want to trigger different behaviour when clicking an item in the legend. This can be easily achieved using a callback in the config object.")]),t._v(" "),e("p",[t._v("The default legend click handler is:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legendItem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" index "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" legendItem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasetIndex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ci "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" legend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDatasetVisible")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        legendItem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        legendItem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Lets say we wanted instead to link the display of the first two datasets. We could change the click handler accordingly.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" defaultLegendClickHandler "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("legend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClick"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pieDoughnutLegendClickHandler "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controllers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doughnut"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("overrides"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("legend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClick"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("newLegendClickHandler")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legendItem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" index "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" legendItem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasetIndex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" legend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do the original logic")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pie'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'doughnut'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pieDoughnutLegendClickHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legendItem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultLegendClickHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legendItem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ci "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" legend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDatasetMeta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDatasetMeta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("meta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("legend")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onClick")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newLegendClickHandler\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Now when you click the legend in this chart, the visibility of the first two datasets will be linked together.")])])}),[],!1,null,null,null);e.default=n.exports}}]);