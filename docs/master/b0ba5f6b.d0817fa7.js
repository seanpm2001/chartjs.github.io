(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(144)),b=a(156),l=a(157),c={title:"Animations"},o={unversionedId:"configuration/animations",id:"configuration/animations",isDocsHomePage:!1,title:"Animations",description:"Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes.",source:"@site/docs/configuration/animations.mdx",slug:"/configuration/animations",permalink:"/docs/master/configuration/animations",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/configuration/animations.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Canvas background",permalink:"/docs/master/configuration/canvas-background"},next:{title:"Layout",permalink:"/docs/master/configuration/layout"}},d=[{value:"Animation configuration",id:"animation-configuration",children:[]},{value:"animation",id:"animation",children:[]},{value:"animations",id:"animations",children:[{value:"Default animations",id:"default-animations",children:[]}]},{value:"transitions",id:"transitions",children:[{value:"Default transitions",id:"default-transitions",children:[]}]},{value:"Disabling animation",id:"disabling-animation",children:[]},{value:"Easing",id:"easing",children:[]},{value:"Animation Callbacks",id:"animation-callbacks",children:[]}],p={toc:d};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes."),Object(r.b)(b.a,{defaultValue:"tension",values:[{label:"Looping tension [property]",value:"tension"},{label:"Hide and show [mode]",value:"hideshow"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"tension",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function example() {\n  useEffect(() => {\n    const ctx = document.getElementById('chartjs-a0').getContext('2d');\n    const cfg = {\n      type: 'line',\n      data: {\n        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n        datasets: [{\n          label: 'Looping tension',\n          data: [65, 59, 80, 81, 26, 55, 40],\n          fill: false,\n          borderColor: 'rgb(75, 192, 192)',\n        }]\n      },\n      options: {\n        animations: {\n          tension: {\n            duration: 1000,\n            easing: 'linear',\n            from: 1,\n            to: 0,\n            loop: true\n          }\n        },\n        scales: {\n          y: { // defining min and max so hiding the dataset does not change scale range\n            min: 0,\n            max: 100\n          }\n        }\n      }\n    };\n    const chart = new Chart(ctx, cfg);\n    return () => chart.destroy();\n  });\n  return <div className=\"chartjs-wrapper\"><canvas id=\"chartjs-a0\" className=\"chartjs\"></canvas></div>;\n}\n"))),Object(r.b)(l.a,{value:"hideshow",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function example() {\n  useEffect(() => {\n    const ctx = document.getElementById('chartjs-a1').getContext('2d');\n    const cfg = {\n      type: 'line',\n      data: {\n        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n        datasets: [{\n          label: 'Try hiding me',\n          data: [65, 59, 80, 81, 26, 55, 40],\n          fill: false,\n          borderColor: 'rgb(75, 192, 192)',\n        }]\n      },\n      options: {\n        transitions: {\n          show: {\n            animations: {\n              x: {\n                  from: 0\n              },\n              y: {\n                  from: 0\n              }\n            }\n          },\n          hide: {\n            animations: {\n              x: {\n                  to: 0\n              },\n              y: {\n                  to: 0\n              }\n            }\n          }\n        }\n      }\n    };\n    const chart = new Chart(ctx, cfg);\n    return () => chart.destroy();\n  });\n  return <div className=\"chartjs-wrapper\"><canvas id=\"chartjs-a1\" className=\"chartjs\"></canvas></div>;\n}\n")))),Object(r.b)("h2",{id:"animation-configuration"},"Animation configuration"),Object(r.b)("p",null,"Animation configuration consists of 3 keys."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#animation"}),"animation"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animations"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#animations"}),"animations"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"transitions"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#transitions"}),"transitions"))))),Object(r.b)("p",null,"These keys can be configured in following paths:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"`` - chart options"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"datasets[type]")," - dataset type options"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrides[type]")," - chart type options")),Object(r.b)("p",null,"These paths are valid under ",Object(r.b)("inlineCode",{parentName:"p"},"defaults")," for global confuguration and ",Object(r.b)("inlineCode",{parentName:"p"},"options")," for instance configuration."),Object(r.b)("h2",{id:"animation"},"animation"),Object(r.b)("p",null,"The default configuration is defined here: ",Object(r.b)("a",{href:"https://github.com/chartjs/Chart.js/blob/master/src/core/core.animations.js#L9-L56",target:"_blank"},"core.animations.js")),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.animation")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"duration")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"1000")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of milliseconds an animation takes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"easing")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'easeOutQuart'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Easing function to use. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#easing"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"delay")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delay before starting the animations.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"loop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", the animations loop endlessly.")))),Object(r.b)("p",null,"These defaults can be overridden in ",Object(r.b)("inlineCode",{parentName:"p"},"options.animation")," or ",Object(r.b)("inlineCode",{parentName:"p"},"dataset.animation")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tooltip.animation"),". These keys are also ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/general/options#scriptable-options"}),"Scriptable"),"."),Object(r.b)("h2",{id:"animations"},"animations"),Object(r.b)("p",null,"Animations options configures which element properties are animated and how.\nIn addition to the main ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#animation-configuration"}),"animation configuration"),", the following options are available:"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.animations[animation]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"properties")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string[]")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"key")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The property names this configuration applies to. Defaults to the key name of this object.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"typeof property")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of property, determines the interpolator used. Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},"'number'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'color'")," and ",Object(r.b)("inlineCode",{parentName:"td"},"'boolean'"),". Only really needed for ",Object(r.b)("inlineCode",{parentName:"td"},"'color'"),", because ",Object(r.b)("inlineCode",{parentName:"td"},"typeof")," does not get that right.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"from")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number"),"|",Object(r.b)("inlineCode",{parentName:"td"},"Color"),"|",Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Start value for the animation. Current value is used when ",Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"to")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number"),"|",Object(r.b)("inlineCode",{parentName:"td"},"Color"),"|",Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"End value for the animation. Updated value is used when ",Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"fn")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("code",null,"<","T",">","(from: T, to: T, factor: number) => T;")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional custom interpolator, instead of using a predefined interpolator from ",Object(r.b)("inlineCode",{parentName:"td"},"type"))))),Object(r.b)("h3",{id:"default-animations"},"Default animations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"numbers")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"properties")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"['x', 'y', 'borderWidth', 'radius', 'tension']"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"numbers")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'number'"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"colors")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"properties")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"['color', 'borderColor', 'backgroundColor']"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"colors")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'color'"))))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"These default animations are overridden by most of the dataset controllers."))),Object(r.b)("h2",{id:"transitions"},"transitions"),Object(r.b)("p",null,"The core transitions are ",Object(r.b)("inlineCode",{parentName:"p"},"'active'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'hide'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'reset'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'resize'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'show'"),".\nA custom transition can be used by passing a custom ",Object(r.b)("inlineCode",{parentName:"p"},"mode")," to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/developers/api#updatemode"}),"update"),".\nTransition extends the main ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#animation-configuration"}),"animation configuration")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#animations-configuration"}),"animations configuration"),"."),Object(r.b)("h3",{id:"default-transitions"},"Default transitions"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.transitions[mode]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Mode"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'active'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animation.duration"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override default duration to 400ms for hover animations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'resize'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animation.duration"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override default duration to 0ms (= no animation) for resize")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'show'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animations.colors"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{ type: 'color', properties: ['borderColor', 'backgroundColor'], from: 'transparent' }")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Colors are faded in from transparent when dataset is shown using legend / ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/developers/api#showdatasetIndex"}),"api"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'show'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animations.visible"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{ type: 'boolean', duration: 0 }")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dataset visiblity is immediately changed to true so the color transition from transparent is visible.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'hide'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animations.colors"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{ type: 'color', properties: ['borderColor', 'backgroundColor'], to: 'transparent' }")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Colors are faded to transparent when dataset id hidden using legend / ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/developers/api#hidedatasetIndex"}),"api"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'hide'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animations.visible"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{ type: 'boolean', easing: 'easeInExpo' }")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Visibility is changed to false at a very late phase of animation")))),Object(r.b)("h2",{id:"disabling-animation"},"Disabling animation"),Object(r.b)("p",null,"To disable an animation configuration, the animation node must be set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", with the exception for animation modes which can be disabled by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"duration")," to ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"chart.options.animation = false; // disables all animations\nchart.options.animations.colors = false; // disables animation defined by the collection of 'colors' properties\nchart.options.animations.x = false; // disables animation defined by the 'x' property\nchart.options.transitions.active.animation.duration = 0; // disables the animation for 'active' mode\n")),Object(r.b)("h2",{id:"easing"},"Easing"),Object(r.b)("p",null,"Available options are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'linear'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInQuad'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutQuad'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutQuad'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInCubic'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutCubic'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutCubic'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInQuart'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutQuart'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutQuart'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInQuint'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutQuint'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutQuint'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInSine'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutSine'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutSine'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInExpo'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutExpo'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutExpo'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInCirc'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutCirc'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutCirc'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInElastic'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutElastic'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutElastic'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInBack'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutBack'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutBack'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInBounce'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeOutBounce'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'easeInOutBounce'"))),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://robertpenner.com/easing/"}),"Robert Penner's easing equations"),"."),Object(r.b)("h2",{id:"animation-callbacks"},"Animation Callbacks"),Object(r.b)("p",null,"The animation configuration provides callbacks which are useful for synchronizing an external draw to the chart animation.\nThe callbacks can be set only at main ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#animation-configuration"}),"animation configuration"),"."),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.animation")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"onProgress")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"null")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback called on each step of an animation.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"onComplete")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"null")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback called when all animations are completed.")))),Object(r.b)("p",null,"The callback is passed the following object:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    // Chart object\n    chart: Chart,\n\n    // Number of animations still in progress\n    currentStep: number,\n\n    // Total number of animations at the start of current animation\n    numSteps: number,\n}\n")),Object(r.b)("p",null,"The following example fills a progress bar during the chart animation."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        animation: {\n            onProgress: function(animation) {\n                progress.value = animation.currentStep / animation.numSteps;\n            }\n        }\n    }\n});\n")),Object(r.b)("p",null,"Another example usage of these callbacks can be found on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/blob/master/samples/advanced/progress-bar.html"}),"Github"),": this sample displays a progress bar showing how far along the animation is."))}m.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),d=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,s=p["".concat(b,".").concat(O)]||p[O]||m[O]||r;return a?i.a.createElement(s,l(l({ref:t},o),{},{components:a})):i.a.createElement(s,l({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<r;o++)b[o]=a[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},145:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},151:function(e,t,a){"use strict";var n=a(0),i=a(152);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},152:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},156:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(151),b=a(145),l=a(60),c=a.n(l),o=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,m=e.groupId,O=e.className,s=Object(r.a)(),j=s.tabGroupChoices,u=s.setTabGroupChoices,N=Object(n.useState)(l),g=N[0],f=N[1],h=n.Children.toArray(e.children);if(null!=m){var C=j[m];null!=C&&C!==g&&p.some((function(e){return e.value===C}))&&f(C)}var y=function(e){f(e),null!=m&&u(m,e)},v=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a},O)},p.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(b.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},157:function(e,t,a){"use strict";var n=a(3),i=a(0),r=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}}}]);