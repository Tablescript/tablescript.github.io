(this["webpackJsonptablescript-fiddle"]=this["webpackJsonptablescript-fiddle"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=(a(42),a(36)),i=a(10),u=a(33),s=a.n(u),m=(a(50),a(52),function(e){var t=e.script,a=e.onChange;return r.a.createElement(s.a,{className:"w-100 h5 mb1",width:"",height:"",mode:"javascript",theme:"kuroir",name:"blah2",onChange:a,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:t,setOptions:{showLineNumbers:!0,tabSize:2},editorProps:{$blockScrolling:1/0}})}),h=function(e){var t=e.onRun,a=e.script,n=e.onChange;return r.a.createElement("div",{className:"w-50 ph2"},r.a.createElement("h2",null,"Script"),r.a.createElement(m,{script:a,onChange:n}),r.a.createElement("button",{onClick:function(){return t(!1)}},"Run"),r.a.createElement("button",{onClick:function(){return t(!0)}},"Clear & Run"))},p=function(e){var t=e.result;return r.a.createElement("div",null,r.a.createElement("h2",null,"Result"),r.a.createElement("p",null,t))},f=function(e){var t=e.onClear;return r.a.createElement("button",{onClick:t},"Clear")},v=function(e){var t=e.output,a=e.onClear,n=t.join("\n");return r.a.createElement("div",null,r.a.createElement("h2",null,"Output"),r.a.createElement("textarea",{className:"w-100 h5 code",value:n}),r.a.createElement(f,{onClear:a}))},E=function(e){var t=e.result,a=e.output,n=e.onClear;return r.a.createElement("div",{className:"w-50 ph2 flex flex-column"},r.a.createElement(v,{output:a,onClear:n}),r.a.createElement(p,{result:t}))},d=a(34),b=function(){var e=Object(n.useState)("print('I have a ham radio');\n"),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),u=Object(i.a)(c,2),s=u[0],m=u[1],p=Object(n.useState)(""),f=Object(i.a)(p,2),v=f[0],b=f[1],w=function(){m([])},g=Object(d.initializeTablescript)({output:function(e){m([].concat(Object(o.a)(s),[e]))}});return r.a.createElement("div",{className:"flex flex-row helvetica"},r.a.createElement(h,{script:a,onChange:function(e){l(e)},onRun:function(e){e&&w();try{var t=g.runScript(a,"fiddle");b(t.asNativeString())}catch(n){b(n.toString())}}}),r.a.createElement(E,{result:v,output:s,onClear:w}))},w=a(35),g=function(){return r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("header",{className:"pa2 helvetica"},r.a.createElement("h1",{className:""},"Tablescript Fiddle"),r.a.createElement("p",null,"Use this tool to play with the Tablescript language."),r.a.createElement("p",null,"Eventually, you will be able to save your scripts, but for now just copy/paste into a file on your computer.")),r.a.createElement(b,null),r.a.createElement("footer",null,r.a.createElement("p",{className:"pa2 f7 helvetica"},"Tablescript.js Fiddle version v",w.a)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},37:function(e,t,a){e.exports=a(106)}},[[37,1,2]]]);
//# sourceMappingURL=main.7b690317.chunk.js.map