(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(2),r=n.n(c),i=(n(15),n(3)),s=n(4),u=n(7),o=n(5),m=n(8),b=n(6),d=n.n(b),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={selectedTab:0},n.handleClick=function(e,t){e.preventDefault(),n.setState({selectedTab:t})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children;return t=t.length?t:[t],l.a.createElement("div",{className:"tabs"},l.a.createElement("ul",{className:"tabs-links"},t.map(function(t,n){var a=d()({"tabs-links__item":!0,"tabs-links__item--selected":n===e.state.selectedTab});return l.a.createElement("li",{className:a},l.a.createElement("a",{href:"/",onClick:function(t){return e.handleClick(t,n)}},t.props.title))})),l.a.createElement("div",{className:"tabs-content"},t[this.state.selectedTab]))}}]),t}(l.a.Component);E.Tab=function(e){return e.children};var p=E,f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null,l.a.createElement(p.Tab,{title:"title 3"},l.a.createElement(p,null,l.a.createElement(p.Tab,{title:"TitleInside"},"Some Content"))),l.a.createElement(p.Tab,{title:"title 1"},l.a.createElement("ul",null,l.a.createElement("li",null,"1"),l.a.createElement("li",null,"2"),l.a.createElement("li",null,"3")))))};r.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.84646f63.chunk.js.map