(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),o=c.n(s),l=(c(9),c(2)),r=(c(10),c(11),c(0));function i(e){var t=function(e){document.body.style.backgroundColor=e};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),style:{backgroundColor:"".concat(e.bgCol)},children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.hero}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})})}),Object(r.jsxs)("div",{className:"colorPalette",children:[Object(r.jsx)("div",{className:"options options__light",onClick:function(){t("#ffffff")}}),Object(r.jsx)("div",{className:"options options__grey",onClick:function(){t("#636363")}}),Object(r.jsx)("div",{className:"options options__green",onClick:function(){t("#004509")}}),Object(r.jsx)("div",{className:"options options__blue",onClick:function(){t("#003599")}}),Object(r.jsx)("div",{className:"options options__dark",onClick:function(){t("#3f4650")}})]}),Object(r.jsxs)("div",{className:"form-check form-switch",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(r.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})})})}var b=function(e){var t;return e.alert&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",style:{margin:"20px"},children:[Object(r.jsx)("strong",{children:(t=e.alert.type,t.charAt(0).toUpperCase()+t.substring(1))}),": ",e.alert.msg,Object(r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})};c(13);function d(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("textarea",{className:"form-control",id:"floatingTextarea2",onChange:function(e){console.log("changed"),s(e.target.value)},value:a,style:{height:"100px"}}),Object(r.jsx)("button",{className:"btn btn-primary m-3",onClick:function(){console.log("button clicked"),console.log({text:a});var t=a.toUpperCase();s(t),e.showAlert("success","Text converted to uppercase")},children:"upper"}),Object(r.jsx)("button",{className:"btn btn-primary m-3",onClick:function(){console.log("button clicked"),console.log({text:a});var t=a.toLowerCase();s(t),e.showAlert("success","Text converted to lowercase")},children:"lower"}),Object(r.jsx)("button",{className:"btn btn-primary m-3",onClick:function(){console.log("button clicked"),console.log({text:a});for(var t=a.split(" "),c=0;c<t.length;c++)t[c]=t[c].charAt(0).toUpperCase()+t[c].substring(1);console.log(t.join(" ")),s(t.join(" ")),e.showAlert("success","first letter of word converted to uppercase")},children:"upper 1st char"}),Object(r.jsx)("button",{className:"btn btn-primary m-3",onClick:function(){s(""),e.showAlert("success","Text cleared")},children:"clear"})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Summary"}),Object(r.jsxs)("p",{children:[a.split(" ").length-1," words, ",a.length," characters"]}),Object(r.jsxs)("p",{children:["time to each read = ",.9*(a.split(" ").length-1)]})]})]})})}var j=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),o=Object(l.a)(s,2),j=o[0],u=o[1],h=function(e,t){u({type:e,msg:t}),setTimeout((function(){u(null)}),2e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{hero:"react",mode:c,toggleMode:function(){"light"===c?(a("dark"),h("success","DarkMode")):(a("light"),document.body.style.backgroundColor="white",document.body.style.color="black",h("success","LightMode"))}}),Object(r.jsx)(b,{alert:j}),Object(r.jsx)(d,{title:"Enter",showAlert:h})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),u()}],[[14,1,2]]]);
//# sourceMappingURL=main.1c641007.chunk.js.map