(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(34)},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),i=a(6),s=(a(29),a(5)),m=a(16),o=a(17),u=a(22),p=a(18),E=a(23),b=a(19),d=a.n(b),v=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.children,t=this.props.match;return e=e.length?e:[e],l.a.createElement("div",{className:"tabs"},l.a.createElement("ul",{className:"tabs-links"},e.map(function(e){var a="".concat(e.props.title.replace(" ","-")),n=d()({"tabs-links__item":!0});return l.a.createElement("li",{className:n},l.a.createElement(i.b,{isActive:function(){return t.params.title===a},activeClassName:"tabs-links__item--selected",to:a},e.props.title))})),l.a.createElement("div",{className:"tabs-content"},e.find(function(e){var a=t.params.title||"";return e.props.title===a.replace("-"," ")})))}}]),t}(l.a.Component);v.Tab=function(e){return e.children};var h=v,f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement("nav",{className:"nav"},l.a.createElement(i.b,{activeClassName:"nav-link--selected",exact:!0,to:"/"},"Home"),l.a.createElement(i.b,{isActive:function(){return window.location.href.includes("/tabs")},activeClassName:"nav-link--selected",to:"/tabs/title-1"},"Tabs"))),l.a.createElement(s.a,{exact:!0,path:"/",render:function(){return l.a.createElement("h1",null,"Home")}}),l.a.createElement(s.a,{path:"/tabs/:title?",render:function(e){var t=e.match;return l.a.createElement(h,{match:t},l.a.createElement(h.Tab,{title:"title 1"},l.a.createElement("p",null,"Hello")),l.a.createElement(h.Tab,{title:"title 3"},l.a.createElement("ul",null,l.a.createElement("li",null,"1"),l.a.createElement("li",null,"2"),l.a.createElement("li",null,"3"))))}}))};c.a.render(l.a.createElement(i.a,null,l.a.createElement(f,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e6689e5f.chunk.js.map