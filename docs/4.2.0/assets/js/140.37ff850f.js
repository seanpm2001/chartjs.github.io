(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{496:function(t,a,e){"use strict";e.r(a);var s=e(7),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"labeling-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labeling-axes"}},[t._v("#")]),t._v(" Labeling Axes")]),t._v(" "),a("p",[t._v("When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis.")]),t._v(" "),a("h2",{attrs:{id:"scale-title-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale-title-configuration"}},[t._v("#")]),t._v(" Scale Title Configuration")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].title")]),t._v(", it defines options for the scale title. Note that this only applies to cartesian axes.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, display the axis title.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("align")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'center'")])]),t._v(" "),a("td",[t._v("Alignment of the axis title. Possible options are "),a("code",[t._v("'start'")]),t._v(", "),a("code",[t._v("'center'")]),t._v(" and "),a("code",[t._v("'end'")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("text")])]),t._v(" "),a("td",[a("code",[t._v("string")]),t._v("|"),a("code",[t._v("string[]")])]),t._v(" "),a("td",[a("code",[t._v("''")])]),t._v(" "),a("td",[t._v('The text for the title. (i.e. "# of People" or "Response Choices").')])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("color")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.color")])]),t._v(" "),a("td",[t._v("Color of label.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("font")])]),t._v(" "),a("td",[a("code",[t._v("Font")])]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.font")])]),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/padding.html"}},[a("code",[t._v("Padding")])])],1),t._v(" "),a("td",[a("code",[t._v("4")])]),t._v(" "),a("td",[t._v("Padding to apply around scale labels. Only "),a("code",[t._v("top")]),t._v(", "),a("code",[t._v("bottom")]),t._v(" and "),a("code",[t._v("y")]),t._v(" are implemented.")])])])]),t._v(" "),a("h2",{attrs:{id:"creating-custom-tick-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-custom-tick-formats"}},[t._v("#")]),t._v(" Creating Custom Tick Formats")]),t._v(" "),a("p",[t._v("It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$').\nTo do this, you need to override the "),a("code",[t._v("ticks.callback")]),t._v(" method in the axis configuration.")]),t._v(" "),a("p",[t._v("The method receives 3 arguments:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("value")]),t._v(" - the tick value in the "),a("strong",[t._v("internal data format")]),t._v(" of the associated scale. For time scale, it is a timestamp.")]),t._v(" "),a("li",[a("code",[t._v("index")]),t._v(" - the tick index in the ticks array.")]),t._v(" "),a("li",[a("code",[t._v("ticks")]),t._v(" - the array containing all of the "),a("a",{attrs:{href:"../api/interfaces/Tick"}},[t._v("tick objects")]),t._v(".")])]),t._v(" "),a("p",[t._v("The call to the method is scoped to the scale. "),a("code",[t._v("this")]),t._v(" inside the method is the scale object.")]),t._v(" "),a("p",[t._v("If the callback returns "),a("code",[t._v("null")]),t._v(" or "),a("code",[t._v("undefined")]),t._v(" the associated grid line will be hidden.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"../axes/cartesian/category"}},[t._v("category axis")]),t._v(", which is the default x-axis for line and bar charts, uses the "),a("code",[t._v("index")]),t._v(" as internal data format. For accessing the label, use "),a("code",[t._v("this.getLabelForValue(value)")]),t._v(". "),a("RouterLink",{attrs:{to:"/api/classes/Scale.html#getlabelforvalue"}},[t._v("API: getLabelForValue")])],1)]),t._v(" "),a("p",[t._v("In the following example, every label of the Y-axis would be displayed with a dollar sign at the front.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ticks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Include a dollar sign in the ticks")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ticks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Keep in mind that overriding "),a("code",[t._v("ticks.callback")]),t._v(" means that you are responsible for all formatting of the label. Depending on your use case, you may want to call the default formatter and then modify its output. In the example above, that would look like:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call the default formatter, forwarding `this`")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ticks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("formatters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("numeric")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ticks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Related samples:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"../samples/scale-options/ticks"}},[t._v("Tick configuration sample")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);