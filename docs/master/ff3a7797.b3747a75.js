(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(143)),i={title:"Labeling Axes"},c={unversionedId:"axes/labelling",id:"axes/labelling",isDocsHomePage:!1,title:"Labeling Axes",description:"When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis.",source:"@site/docs/axes/labelling.md",slug:"/axes/labelling",permalink:"/docs/master/axes/labelling",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/labelling.md",version:"current",sidebar:"someSidebar",previous:{title:"Linear Radial Axis",permalink:"/docs/master/axes/radial/linear"},next:{title:"Styling",permalink:"/docs/master/axes/styling"}},b=[{value:"Scale Title Configuration",id:"scale-title-configuration",children:[]},{value:"Creating Custom Tick Formats",id:"creating-custom-tick-formats",children:[]}],o={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis."),Object(l.b)("h2",{id:"scale-title-configuration"},"Scale Title Configuration"),Object(l.b)("p",null,"Namespace: ",Object(l.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].title"),", it defines options for the scale title. Note that this only applies to cartesian axes."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"display")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, display the axis title.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"align")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'center'")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Alignment of the axis title. Possible options are ",Object(l.b)("inlineCode",{parentName:"td"},"'start'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'center'")," and ",Object(l.b)("inlineCode",{parentName:"td"},"'end'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"text")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"''")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'The text for the title. (i.e. "# of People" or "Response Choices").')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Color of label.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"font")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Font")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Chart.defaults.font")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"See ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/master/general/fonts"}),"Fonts"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"padding")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number"),"|",Object(l.b)("inlineCode",{parentName:"td"},"object")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"4")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Padding to apply around scale labels. Only ",Object(l.b)("inlineCode",{parentName:"td"},"top")," and ",Object(l.b)("inlineCode",{parentName:"td"},"bottom")," are implemented.")))),Object(l.b)("h2",{id:"creating-custom-tick-formats"},"Creating Custom Tick Formats"),Object(l.b)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to override the ",Object(l.b)("inlineCode",{parentName:"p"},"ticks.callback")," method in the axis configuration.\nIn the following example, every label of the Y-axis would be displayed with a dollar sign at the front."),Object(l.b)("p",null,"If the callback returns ",Object(l.b)("inlineCode",{parentName:"p"},"null")," or ",Object(l.b)("inlineCode",{parentName:"p"},"undefined")," the associated grid line will be hidden."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        scales: {\n            y: {\n                ticks: {\n                    // Include a dollar sign in the ticks\n                    callback: function(value, index, values) {\n                        return '$' + value;\n                    }\n                }\n            }\n        }\n    }\n});\n")),Object(l.b)("p",null,"The third parameter passed to the callback function is an array of labels, but in the time scale, it is an array of ",Object(l.b)("inlineCode",{parentName:"p"},"{label: string, major: boolean}")," objects."))}d.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,u=p["".concat(i,".").concat(m)]||p[m]||s[m]||l;return n?r.a.createElement(u,c(c({ref:t},o),{},{components:n})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);