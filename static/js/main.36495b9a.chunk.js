(this["webpackJsonpsorting-machine"]=this["webpackJsonpsorting-machine"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),i=(n(11),n(4)),u=n.n(i),j=n(6),o=n(2),l=n(0);function b(e){var t=e.language,n=new Date,r=(new Date).getTime(),s=Object(c.useState)(r),a=Object(o.a)(s,2),i=a[0],u=a[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),f=b[0],d=b[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),m=O[0],g=O[1],v=new Intl.DateTimeFormat(t,{dateStyle:"full"}).format(n),x=new Intl.DateTimeFormat(t,{timeStyle:"medium"}).format(i);return Object(c.useEffect)((function(){var e=setInterval((function(){return u((function(e){return e+1e3}))}),1e3);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){return g(x)}),[x]),Object(c.useEffect)((function(){return d(v)}),[v]),Object(l.jsxs)("div",{className:"timer section",children:[Object(l.jsx)("div",{children:f}),Object(l.jsx)("div",{children:m})]})}var f="\uc815\ub82c\ud558\uace0 \uc2f6\uc740 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694 :)",d="\u26a0 \uc785\ub825\ud558\uc9c0 \uc54a\uc558\ub124\uc694? \uac12\uc744 \uc785\ub825\ud574\uc57c\ud569\ub2c8\ub2e4 : ]",h="\u274c \uc22b\uc790\ub97c \uc368\uc8fc\uc2dc\uaca0\uc5b4\uc694? :(";var O=function(e){var t=e.message,n=e.setMessage,r=e.setDataToRender,s=f,a=d,i=h,u=Object(c.useRef)("");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"number-input section",children:[Object(l.jsx)("span",{children:t}),Object(l.jsx)("textarea",{ref:u,placeholder:"\uc22b\uc790\ub97c \ucf64\ub9c8(,)\ub85c \uad6c\ubd84\ud574\uc8fc\uc138\uc694.\r\n\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uac12\uc740 \uc81c\uc678\ub429\ub2c8\ub2e4.\r\nex) 3,12,7,89,100"})]}),Object(l.jsx)("button",{className:"start-button section",onClick:function(){n(s);var e=u.current.value;if(e){var t=function(e){return e.trim().split(",").filter((function(e){return e.trim()})).filter((function(e){return!isNaN(e)}))}(e);0===t.length&&n(i),r(t)}else n(a)},children:"\uc815\ub82c \uc2dc\uc791\ud558\uae30"})]})};var m=function(e){var t=e.ascendingResult;return Object(l.jsxs)("div",{className:"output-asc section",children:[Object(l.jsx)("span",{children:"\uc624\ub984\ucc28\uc21c \uacb0\uacfc"}),Object(l.jsx)("div",{className:"number-output",children:Object(l.jsx)("div",{children:t.join(", ")})})]})},g=function(e){var t=e.setStart,n=Object(c.useState)(3),r=Object(o.a)(n,2),s=r[0],a=r[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){1===s&&(clearTimeout(e),t(!1)),s>0&&a(s-1)}),1e3);return function(){return clearTimeout(e)}}),[s]),Object(l.jsx)("div",{className:"countdown-number",children:s})};var v=function(e){var t=e.descendingResult,n=e.start,c=e.setStart;return Object(l.jsxs)("div",{className:"output-desc section",children:[Object(l.jsx)("span",{children:"\ub0b4\ub9bc\ucc28\uc21c \uacb0\uacfc"}),Object(l.jsx)("div",{className:"number-output",children:Object(l.jsx)("div",{children:n?Object(l.jsx)(g,{setStart:c}):t.join(", ")})})]})},x=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ascending",c=[];if((t=t.map((function(e){return Number(e)}))).length<2)return t;for(var r=Math.floor(t.length/2),s=e(t.slice(0,r),n),a=e(t.slice(r),n);s.length>0&&a.length>0;)"ascending"===n?s[0]<a[0]?c.push(s.shift()):c.push(a.shift()):s[0]<a[0]?c.push(a.shift()):c.push(s.shift());for(;0===s.length&&a.length>0;)c.push(a.shift());for(;s.length>0&&0===a.length;)c.push(s.shift());return c},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(n){return setTimeout((function(){return n(t)}),e)}))};n(14);var S=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),a=Object(o.a)(s,2),i=a[0],d=a[1],h=Object(c.useState)([]),g=Object(o.a)(h,2),S=g[0],N=g[1],w=Object(c.useState)([]),k=Object(o.a)(w,2),T=k[0],R=k[1],D=Object(c.useState)(f),E=Object(o.a)(D,2),y=E[0],I=E[1];return Object(c.useEffect)(Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==i.length){e.next=2;break}return e.abrupt("return");case 2:return r(!0),e.next=5,p(0,x(i,"ascending"));case 5:return t=e.sent,N(t),e.next=9,p(3e3,x(i,"descending"));case 9:n=e.sent,R(n);case 11:case"end":return e.stop()}}),e)}))),[i]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"sorting-machine section",children:[Object(l.jsx)("h1",{children:"\ud83e\udd16 Sorting Machine \ud83e\udd16"}),Object(l.jsx)(b,{language:"kr-KO"}),Object(l.jsx)(O,{message:y,setMessage:I,setDataToRender:d}),Object(l.jsx)(m,{ascendingResult:S}),Object(l.jsx)(v,{descendingResult:T,start:n,setStart:r}),Object(l.jsx)(b,{language:"en-US"}),Object(l.jsx)("span",{className:"copyright",children:"@bohyunkang & @skawnkk"})]})})};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.36495b9a.chunk.js.map