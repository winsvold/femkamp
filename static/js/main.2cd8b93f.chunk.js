(this.webpackJsonpfemkamp=this.webpackJsonpfemkamp||[]).push([[0],{17:function(e,n,t){e.exports=t(26)},22:function(e,n,t){},23:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(12),c=t.n(l),o=(t(22),t(23),t(2)),i=t(1),u=t(4),m=t(5),s=t(3);var d,f=window.localStorage;!function(e){e[e.Historikk=0]="Historikk",e[e.Oppsett=1]="Oppsett",e[e.Pass=2]="Pass",e[e["Kl\xf8ver"]=3]="Kl\xf8ver",e[e.Kabal=4]="Kabal",e[e.Dame=5]="Dame",e[e.Grang=6]="Grang",e[e.GameOver=7]="GameOver"}(d||(d={}));var v=window.localStorage,p=v.getItem("spillere"),g={spillere:p?JSON.parse(p):[],runde:d.Oppsett,addSpiller:function(){return null},updateScore:function(){return null},setRunde:function(){return null},removeSpiller:function(){return null},"lagreOgStartP\xe5Nytt":function(){return null}},b=Object(r.createContext)(g);function O(e){var n=Object(r.useState)(g.runde),t=Object(s.a)(n,2),l=t[0],c=t[1],o=Object(r.useState)(g.spillere),i=Object(s.a)(o,2),p=i[0],O=i[1],h=function(e){return e.map((function(e){var n,t,r,a,l,c,o,i,m=(null!==(n=e.score.pass)&&void 0!==n?n:0)+(null!==(t=e.score.kl\u00f8ver)&&void 0!==t?t:0)+(null!==(r=null===(a=e.score.kabal)||void 0===a?void 0:a.pass)&&void 0!==r?r:0)+(null!==(l=null===(c=e.score.kabal)||void 0===c?void 0:c.rest)&&void 0!==l?l:0)+(null!==(o=e.score.dame)&&void 0!==o?o:0)+(null!==(i=e.score.grang)&&void 0!==i?i:0);return Object(u.a)({},e,{score:Object(u.a)({},e.score,{total:m})})}))}(p),j=h.sort((function(e,n){return e.navn>n.navn?1:-1}));v.setItem("spillere",JSON.stringify(h));return a.a.createElement(b.Provider,{value:{setRunde:c,spillere:j,runde:l,"lagreOgStartP\xe5Nytt":function(){!function(e){var n=JSON.parse(f.getItem("historikk")||"[]"),t={dato:new Date,spillere:e};f.setItem("historikk",JSON.stringify([].concat(Object(m.a)(n),[t])))}(h),O([]),c(d.Oppsett)},addSpiller:function(e){O((function(n){return[].concat(Object(m.a)(n.filter((function(n){return n.navn!==e}))),[{navn:e,score:{total:0}}])}))},updateScore:function(e,n){var t=Object(u.a)({},e,{score:Object(u.a)({},e.score,{},n)});O((function(n){return[].concat(Object(m.a)(n.filter((function(n){return n.navn!==e.navn}))),[t])}))},removeSpiller:function(e){O((function(n){return Object(m.a)(n.filter((function(n){return n.navn!==e.navn})))}))}}},e.children)}function h(){var e=Object(o.a)(["\n    background-color: #5555;\n    color: lightgoldenrodyellow;\n    font-family: inherit;\n    font-size: inherit;\n    border: 0.2rem solid #fff5;\n    padding: 0.2rem 0.5rem;\n"]);return h=function(){return e},e}var j=Object(i.b)(h()),E=i.c.button.withConfig({displayName:"Skjema__Button",componentId:"sc-32wqax-0"})(["",";"],j),y=i.c.input.withConfig({displayName:"Skjema__Input",componentId:"sc-32wqax-1"})(["",";"],j);function S(){var e=Object(o.a)(["\n    padding: 0.5rem 0;\n    > * {\n        margin: 0.3rem;\n    }\n"]);return S=function(){return e},e}function w(){var e=Object(o.a)(["\n    margin-top: 1rem;\n    font-size: 1.6rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    li {\n        margin: 0.5rem 1.5rem;\n    }\n"]);return w=function(){return e},e}function k(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: center;\n    > * {\n        margin: 0.5rem;\n    }\n    margin-bottom: 1rem;\n    "," {\n        min-width: 0;\n    }\n    "," {\n        white-space: nowrap;\n    }\n"]);return k=function(){return e},e}function x(){var e=Object(o.a)(["\n    padding: 2rem 0 3rem;\n    text-align: center;\n"]);return x=function(){return e},e}var C=i.c.div(x()),_=i.c.form(k(),y,E),I=i.c.ul(w()),N=i.c.div(S()),G=["Heidi","Jon","Ida","Daniel","Edgar","Kari","Irene","Einar","Grete","Liv Marit","Ove","Siri","H\xe5vard","\xd8yvind"].sort();var D=function(){var e=Object(r.useContext)(b),n=Object(r.useState)(""),t=Object(s.a)(n,2),a=t[0],l=t[1];return r.createElement(C,null,r.createElement("h3",null,"Usual suspects"),r.createElement(N,null,G.filter((function(n){return!e.spillere.map((function(e){return e.navn})).includes(n)})).map((function(n){return r.createElement(E,{key:n,onClick:function(){return e.addSpiller(n)}},n)}))),r.createElement(_,{onSubmit:function(n){n.preventDefault(),a&&e.addSpiller(a),l("")}},r.createElement(y,{placeholder:"Legg til spiller",value:a,onChange:function(e){return l(e.target.value)}}),r.createElement(E,null,"Legg til")),r.createElement("h3",null,"Spillere"),r.createElement(I,null,e.spillere.map((function(n){return r.createElement("li",{key:n.navn,onClick:function(){return e.removeSpiller(n)}},n.navn)}))))},z=t(7);function M(){var e=Object(o.a)([""]);return M=function(){return e},e}function R(){var e=Object(o.a)(["\n    padding: 0.5rem;\n    background-color: #0003;\n    margin: 0.5rem.1rem;\n"]);return R=function(){return e},e}function T(){var e=Object(o.a)(["\n    display: inline-flex;\n    overflow-x: auto;\n    margin-left: 0.5rem;\n"]);return T=function(){return e},e}function P(){var e=Object(o.a)(["\n            box-shadow: inset 0 0 0.75rem gold;\n        "]);return P=function(){return e},e}function J(){var e=Object(o.a)(["\n    min-width: 2.5rem;\n    margin-left: 0.2rem;\n    ","\n"]);return J=function(){return e},e}function K(){var e=Object(o.a)(["\n    width: 3rem;\n"]);return K=function(){return e},e}function B(){var e=Object(o.a)(["\n    display: flex;\n    margin-top: 0.5rem;\n"]);return B=function(){return e},e}var H=i.c.div(B()),L=Object(i.c)(y)(K()),A=Object(i.c)(E)(J(),(function(e){return e.currentScore&&Object(i.b)(P())})),F=i.c.div(T()),U=i.c.li(R()),Y=i.c.div(M());function q(e){return r.createElement(U,null,r.createElement(Y,null,e.navn),r.createElement(H,null,e.customScorer,r.createElement(L,{type:"number",value:e.score||"",onChange:function(n){return e.setScore(+n.target.value)}}),r.createElement(F,null,Object(m.a)(new Array(Math.abs(e.scoreRule.maxScore/e.scoreRule.interval)+1)).map((function(n,t){var a=t*e.scoreRule.interval;return e.scoreRule.maxScore<0&&(a=-a),r.createElement(A,{currentScore:e.score===a,key:t,onClick:function(){return e.setScore(a)}},a)})))))}var W=i.c.div.withConfig({displayName:"GenericScoreBoard__Style",componentId:"wzkjyj-0"})(["margin:2rem 0;"]),$=i.c.ul.withConfig({displayName:"GenericScoreBoard__StyledUl",componentId:"wzkjyj-1"})(["max-width:100vw;"]),Q=i.c.div.withConfig({displayName:"GenericScoreBoard__Oppsummering",componentId:"wzkjyj-2"})(["background-color:#0004;padding:1rem;margin:0.1rem;text-align:center;"]);var V=function(e){var n=Object(r.useContext)(b),t=Object(r.useMemo)((function(){var t=Math.floor(52/n.spillere.length);switch(e.runde){case"grang":return{maxScore:-t,interval:1};case"dame":return{maxScore:16,interval:4};case"kl\xf8ver":return{maxScore:13,interval:1};default:return{maxScore:t,interval:1}}}),[e.runde,n.spillere.length]);return r.createElement(W,null,r.createElement($,null,n.spillere.map((function(a){return r.createElement(q,{key:a.navn,setScore:function(t){return n.updateScore(a,Object(z.a)({},e.runde,t))},score:a.score[e.runde],navn:a.navn,antallSpillere:n.spillere.length,scoreRule:t})}))),r.createElement(Q,null,"Totalt ",n.spillere.reduce((function(n,t){var r;return n+(null!==(r=t.score[e.runde])&&void 0!==r?r:0)}),0)," poeng."))};var X=function(){return r.createElement(V,{runde:"pass"})};var Z=function(){return r.createElement(V,{runde:"kl\xf8ver"})};function ee(){var e=Object(o.a)(["\n    white-space: nowrap;\n    margin-right: 0.6rem;\n"]);return ee=function(){return e},e}function ne(){var e=Object(o.a)(["\n    background-color: #0004;\n    padding: 1rem;\n    margin: 0.1rem;\n    text-align: center;\n"]);return ne=function(){return e},e}function te(){var e=Object(o.a)(["\n    max-width: 100vw;\n"]);return te=function(){return e},e}function re(){var e=Object(o.a)(["\n    margin: 2rem 0;\n"]);return re=function(){return e},e}var ae=i.c.div(re()),le=i.c.ul(te()),ce=i.c.div(ne()),oe=Object(i.c)(E)(ee());function ie(e){var n,t=e.spiller,a=Object(r.useContext)(b),l=a.spillere.length,c={maxScore:Math.floor(52/l),interval:1},o=t.score.kabal,i=function(e){return a.updateScore(t,{kabal:Object(u.a)({},o,{pass:e})})},m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=Object(r.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)((function(){if(l){var t=setTimeout(e,n);return function(){return clearTimeout(t)}}}),[l,e]),{onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onMouseLeave:function(){return c(!1)},onTouchStart:function(){return c(!0)},onTouchEnd:function(){return c(!1)}}}((function(){var e;return i((null!==(e=null===o||void 0===o?void 0:o.pass)&&void 0!==e?e:0)-2)})),d=r.createElement(oe,Object.assign({},m,{onClick:function(){var e;return i((null!==(e=null===o||void 0===o?void 0:o.pass)&&void 0!==e?e:0)+1)}}),"Pass ",null!==(n=null===o||void 0===o?void 0:o.pass)&&void 0!==n?n:"");return r.createElement(q,{setScore:function(e){return a.updateScore(t,{kabal:Object(u.a)({},o,{rest:e})})},score:null===o||void 0===o?void 0:o.rest,navn:t.navn,antallSpillere:l,scoreRule:c,key:t.navn,customScorer:d})}var ue=function(){var e=Object(r.useContext)(b);return r.createElement(ae,null,r.createElement(le,null,e.spillere.map((function(e){return r.createElement(ie,{key:e.navn,spiller:e})}))),r.createElement(ce,null,"Totalt"," ",e.spillere.reduce((function(e,n){var t,r,a,l;return e+(null!==(t=null===(r=n.score.kabal)||void 0===r?void 0:r.pass)&&void 0!==t?t:0)+(null!==(a=null===(l=n.score.kabal)||void 0===l?void 0:l.rest)&&void 0!==a?a:0)}),0)," ","poeng."))};var me=function(){return r.createElement(V,{runde:"dame"})};var se=function(){return r.createElement(V,{runde:"grang"})};function de(){var e=Object(o.a)(["\n  from {\n    transform: translateY(-3rem);\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  60% {\n    transform: translateY(.5rem);\n  }\n"]);return de=function(){return e},e}function fe(){var e=Object(o.a)(["\n  from {\n    transform: scale(10) rotate(15deg);\n  }\n  50% {\n    transform: scale(.7);\n  }\n"]);return fe=function(){return e},e}var ve=i.c.ol.withConfig({displayName:"GameOver__StyledOl",componentId:"ge4f07-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin:1rem 0 4rem;"]),pe=Object(i.d)(fe()),ge=Object(i.d)(de()),be=i.c.li.withConfig({displayName:"GameOver__StyledLi",componentId:"ge4f07-1"})(["padding:0.2rem 0;&:first-child{animation:"," 0.5s both;font-weight:bold;font-size:5rem;}&:not(:first-child){animation:"," 0.2s ","s both;font-size:1.5rem;}"],pe,ge,(function(e){return e.delay})),Oe=Object(i.c)(E).withConfig({displayName:"GameOver__StyledButton",componentId:"ge4f07-2"})(["margin:2rem 0;padding:0.5rem 2rem;animation:"," 0.4s 3s both;"],ge);var he=function(){var e=Object(r.useContext)(b),n=e.spillere.sort((function(e,n){return e.score.total-n.score.total}));return r.createElement(ve,null,n.map((function(e,n){return r.createElement(be,{delay:.7+n/4,key:n},e.navn,": ",e.score.total)})),r.createElement(Oe,{onClick:function(){return e.lagreOgStartP\u00e5Nytt()}},"Lagre og start nytt spill"))};function je(){var e=Object(o.a)(["\n            margin-left: auto;\n        "]);return je=function(){return e},e}function Ee(){var e=Object(o.a)(["\n    padding: 0.5rem 2rem;\n    ",";\n"]);return Ee=function(){return e},e}function ye(){var e=Object(o.a)(["\n    background-color: #0003;\n    display: flex;\n    justify-content: space-between;\n    box-shadow: 0 -1rem 1rem #0006;\n"]);return ye=function(){return e},e}var Se=i.c.nav(ye()),we=Object(i.c)(E)(Ee(),(function(e){return"right"===e.align&&Object(i.b)(je())}));var ke=function(){var e=Object(r.useContext)(b),n=e.runde,t=n-1<0?void 0:d[n-1],a=n+1>Object.keys(d).length?void 0:d[n+1];return r.createElement(Se,null,t&&r.createElement(we,{align:"left",onClick:function(){return e.setRunde(n-1)}},t),a&&r.createElement(we,{align:"right",onClick:function(){return e.setRunde(n+1)}},a))};function xe(){var e=Object(o.a)(["\n            &&::before {\n                margin: 0 0.2rem 0.2rem 0.3rem;\n\n                transform: rotate(135deg);\n            }\n        "]);return xe=function(){return e},e}function Ce(){var e=Object(o.a)(["\n    &::before {\n        border-style: solid;\n        border-width: 0.2em 0.2em 0 0;\n        content: '';\n        display: inline-block;\n        height: 0.45em;\n        width: 0.45em;\n        margin: 0.2rem 0.2rem 0 0.3rem;\n        transform: rotate(-45deg);\n    }\n\n    ","\n"]);return Ce=function(){return e},e}function _e(){var e=Object(o.a)(["\n    margin: 1rem 1rem 1rem 0;\n"]);return _e=function(){return e},e}var Ie=Object(i.c)(E)(_e()),Ne=i.c.span(Ce(),(function(e){return"down"===e.direction&&Object(i.b)(xe())}));var Ge=function(e){var n=Object(r.useState)(!1),t=Object(s.a)(n,2),a=t[0],l=t[1];return r.createElement(r.Fragment,null,r.createElement(Ie,{onClick:function(){return l(!a)}},e.buttonText," ",r.createElement(Ne,{direction:a?"up":"down"})),a&&r.createElement("div",null,e.children))};function De(){var e=Object(o.a)(["\n    margin-left: 0.5rem;\n    //  border-bottom: 1px solid;\n    display: inline-block;\n    padding: 0 0.5rem 0.3rem;\n"]);return De=function(){return e},e}function ze(){var e=Object(o.a)(["\n    border-collapse: collapse;\n    border: 1px solid;\n    margin-left: 0.5rem;\n\n    th,\n    td {\n        padding: 0.5rem;\n        text-align: left;\n        border: 1px solid;\n        font-weight: normal;\n\n        // Total sum\n        &:last-child {\n            font-weight: bold;\n        }\n    }\n\n    margin-bottom: 1rem;\n"]);return ze=function(){return e},e}function Me(){var e=Object(o.a)(["\n    padding: 2rem 1rem;\n    text-align: center;\n"]);return Me=function(){return e},e}function Re(){var e=Object(o.a)(["\n    margin-left: 0.5rem;\n"]);return Re=function(){return e},e}function Te(){var e=Object(o.a)([""]);return Te=function(){return e},e}var Pe=i.c.div(Te()),Je=i.c.div(Re()),Ke=i.c.div(Me()),Be=i.c.table(ze()),He=i.c.h3(De());var Le=function(){var e=Object(r.useState)(void 0),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("historikk");if(e){var n=JSON.parse(e);a(n)}}),[]),t?r.createElement(Pe,null,t.map((function(e,n){var t=new Date(e.dato),a=t.getDate().toString().padStart(2,"0")+"."+t.getMonth().toString().padStart(2,"0")+"."+t.getFullYear(),l=e.spillere.map((function(e){return e.navn})),c=e.spillere.map((function(e){return function(e,n){var t=e.navn,a=e.score;return r.createElement("div",{key:n},r.createElement(He,null,t),r.createElement(Be,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Pass"),r.createElement("th",null,"Kl\xf8ver"),r.createElement("th",null,"Dame"),r.createElement("th",null,"Grang"),r.createElement("th",null,"Total"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,a.pass),r.createElement("td",null,a.kl\u00f8ver),r.createElement("td",null,a.dame),r.createElement("td",null,a.grang),r.createElement("td",null,a.total)))))}(e,t+"-"+e.navn)})),o=a+" ( "+l.join(", ")+" )";return r.createElement(Je,{key:o},r.createElement(Ge,{buttonText:o},r.createElement(r.Fragment,null,c)))}))):r.createElement(Ke,null,"Du har ingen historikk.",r.createElement("br",null),r.createElement("br",null),"Start et nytt spill ved \xe5 g\xe5 videre til oppsett.")};function Ae(){var e=Object(o.a)(["\n  html, body {\n    background-color: #555;\n    color: lightgoldenrodyellow;\n    height: 100vh;\n    font-size: calc(100% + 1vmin);\n    \n    *:focus {\n      filter: drop-shadow(0 0 .2rem yellow);\n      outline: none;\n    }\n    \n    input[type=number]::-webkit-inner-spin-button,\n    input[type=number]::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    * {\n      box-sizing: border-box;\n    }\n }\n"]);return Ae=function(){return e},e}var Fe=Object(i.a)(Ae()),Ue=i.c.div.withConfig({displayName:"App__Style",componentId:"sc-1lgslt3-0"})(["display:grid;height:100vh;grid-template-rows:auto auto 1fr auto;grid-template-columns:1fr;"]),Ye=i.c.h1.withConfig({displayName:"App__StyledH1",componentId:"sc-1lgslt3-1"})(["background-color:#0003;padding:0.7rem 0.5rem;text-align:center;"]),qe=i.c.h2.withConfig({displayName:"App__StyledH2",componentId:"sc-1lgslt3-2"})(["background-color:#fff1;padding:0.4rem;text-align:center;font-size:1.3rem;box-shadow:0 0.5rem 0.5rem #0006;"]),We=i.c.div.withConfig({displayName:"App__Scrollbar",componentId:"sc-1lgslt3-3"})(["overflow-x:auto;"]);function $e(){switch(Object(r.useContext)(b).runde){case d.Historikk:return a.a.createElement(Le,null);case d.Oppsett:return a.a.createElement(D,null);case d.Pass:return a.a.createElement(X,null);case d.Kl\u00f8ver:return a.a.createElement(Z,null);case d.Dame:return a.a.createElement(me,null);case d.Kabal:return a.a.createElement(ue,null);case d.Grang:return a.a.createElement(se,null);case d.GameOver:return a.a.createElement(he,null)}}var Qe=function(){var e=Object(r.useContext)(b).runde;return a.a.createElement(Ue,null,a.a.createElement(Fe,null),a.a.createElement(Ye,null,"Femkamp"),a.a.createElement(qe,null,d[e]),a.a.createElement(We,null,a.a.createElement($e,null)),a.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null,a.a.createElement(Qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2cd8b93f.chunk.js.map