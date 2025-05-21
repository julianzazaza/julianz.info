(this["webpackJsonpcodejulen.github.io"]=this["webpackJsonpcodejulen.github.io"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo.2927903d.png"},24:function(e,t,n){e.exports=n.p+"static/media/logo-BW.e2c508f3.png"},25:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEXu7u4AAAAobYyIAAAAFUlEQVR4nGJgGAWjgHwAAAAA//8DAAJAAAH4s8QaAAAAAElFTkSuQmCC"},26:function(e,t,n){e.exports=n.p+"static/media/sysfont.a360a379.otf"},27:function(e,t,n){e.exports=n.p+"static/media/AmericanTypewriter.2ddcad8c.otf"},31:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(16),r=n(28),o=n(4),c=n(17),p=n(21),s=n.n(p);var d=()=>l.a.createElement(c.a,null,l.a.createElement("title",null,"Julian Zabala"),l.a.createElement("meta",{name:"description",content:"A software engineer worth telling your friends about"}),l.a.createElement("link",{rel:"icon",type:"image/png",href:s.a,sizes:"16x16"})),m=n(2);const u=m.b.span`
  a {
    color: black;
    margin: 0 5px 0 5px;

    text-decoration: none;
  }
  a:hover {
    opacity: 0.2;
    text-decoration: underline;
  }
`;var f=()=>l.a.createElement(u,null,[{label:"LinkedIn",link:"https://linkedin.com/in/jzabala"},{label:"Source Code",link:"https://github.com/codejulen/julianz.info"}].map(e=>l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.label)));const h=m.b.div`
  display: flex;
  justify-content: space-between;
  algin-items: center;
  align-content: center;
  height: 24px;
  border: 2px solid #cecefb;
  outline: 2px solid black;
  background-color: #ffffff;
  padding-left: 5px;

  span {
    line-height: 28px;
    font-size: 16px;
    padding: 0 8px 0 8px;
  }
`,b=m.b.span`
  float: right;
`;var g=()=>{const e=new Date,[t,n]=Object(a.useState)(e);return Object(a.useEffect)(()=>{const e=setInterval(()=>{n(new Date)},1e3);return()=>clearInterval(e)},[]),l.a.createElement(h,null,l.a.createElement("div",null,l.a.createElement("span",{role:"img","aria-label":"apple emoji"},"\ud83c\udf4e"),l.a.createElement(f,null)),l.a.createElement(b,null,t.toLocaleTimeString("en-US")))};const x=m.b.div`
    background-color: #cecefb;
    border-top: 1px solid black;
    border-left: 1px solid black;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 10px;
`,v=m.b.div`
    background-color: ${e=>e.minimized?"#FFFFFF":"#AAAAAA"};
    border: 1px solid #cecefb;
    // outline: 1px solid #c0c0c0;
    width: 13px;
    height: 13px;
    position: relative;
`,E=m.b.div`
    width: 13px;
    height: 13px;
    box-shadow: 1px 1px;
    `;var A=e=>{let{onClick:t,minimized:n}=e;return l.a.createElement(x,null,l.a.createElement(v,{onClick:()=>{t()},minimized:n},l.a.createElement(E,null)))};const w=m.b.div`
  text-align: center;
  background-color: #eeeeee;
  background: repeating-linear-gradient(0deg, #aaaaaa, #c0c0c0 2px, #c0c0c0 1px, #c0c0c0 4px);
  text-align: center;
  border: 1px solid #cecefb;
  height: 18px;
`,k=m.b.span`
  background-color: #c0c0c0;
  display: inline-block;
  font-style: bold;
  font-size: 18px;
  padding: 0 4px 0 4px;
  line-height: 18px;
`;var y=e=>{let{text:t,rainbow:n,onClick:i,minimized:r}=e;const[o,c]=Object(a.useState)(0);return Object(a.useEffect)(()=>{if(n){const e=setInterval(()=>{c(e=>(e+10)%360)},100);return()=>clearInterval(e)}},[n]),l.a.createElement(w,null,l.a.createElement(A,{onClick:i,minimized:r}),l.a.createElement(k,null,n&&t.split("").map((e,t)=>l.a.createElement("span",{key:t,style:{color:`hsl(${o+20*t}, 100%, 50%)`}},e)),!n&&l.a.createElement("span",null,t)))};const z=m.b.div`
  display: flex;
  visibility: ${e=>e.minimized?"hidden":"inherit"};
  height: ${e=>e.minimized?"0px":"inherit"};
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 24px 0 24px;
  border-top: 1px solid black;
`;var j=e=>{let{minimized:t,children:n}=e;return l.a.createElement(z,{minimized:t},n)};var I=m.b.div`
  width: fit-content;
  height: fit-content;
  background-color: #ffffff;
  outline: 1px solid black;
  box-shadow: 3px 3px;
  position: absolute;
  top: ${e=>{var t;return null!==(t=null===e||void 0===e?void 0:e.top)&&void 0!==t?t:"inherit"}};
  left: ${e=>{var t;return null!==(t=null===e||void 0===e?void 0:e.left)&&void 0!==t?t:"inherit"}};
  bottom: ${e=>{var t;return null!==(t=null===e||void 0===e?void 0:e.bottom)&&void 0!==t?t:"inherit"}};
  right: ${e=>{var t;return null!==(t=null===e||void 0===e?void 0:e.right)&&void 0!==t?t:"inherit"}};
  z-index: ${e=>{var t;return null!==(t=null===e||void 0===e?void 0:e.zIndex)&&void 0!==t?t:"inherit"}};
`;var $=e=>{let{titleText:t,children:n,rainbow:i=!1,position:r,collapsed:o=!1}=e;const[c,p]=Object(a.useState)(o);return l.a.createElement(I,r,l.a.createElement(y,{text:t,rainbow:i,onClick:()=>{p(!c)},minimized:c}),l.a.createElement(j,{children:n,minimized:c}))},S=n(24),B=n.n(S);const F=m.b.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  div {
    margin: 12px;
  }
  p {
    max-width: 330px;
    height: 100%;
  }
`,C=l.a.createElement(F,null,l.a.createElement("div",null,l.a.createElement("img",{src:B.a,alt:"logo",width:128,height:128})),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"I'm Julian - a software engineer based in the San Francisco Bay Area. I make cool B2B enterprise app things at ",l.a.createElement("a",{href:"https://splunk.com"},"Splunk"),". Before that I was at ",l.a.createElement("a",{href:"https://www.splunk.com/en_us/about-splunk/acquisitions/phantom.html"},"Phantom"),", and ",l.a.createElement("a",{href:"https://www.intel.com/content/www/us/en/research/overview.html"},"Intel Labs"),"."))),T={top:"5em",left:"0.25em",zIndex:"1"};var O=()=>l.a.createElement($,{titleText:"Welcome to my web site",children:C,position:T,rainbow:!0});const J=m.b.div`
    margin: 4px;
`,Q=l.a.createElement(J,null,l.a.createElement("s",null,"1. Time above doesn't update")," ",l.a.createElement("br",null),"2. Dynamic UI nonexistent");var U=()=>l.a.createElement($,{titleText:"Known issues",children:Q,position:{top:"2.5em",right:"0.25em"},collapsed:!0}),D=n(25),G=n.n(D);const L=m.b.div`
  background-image: url(${G.a});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
`;var M=()=>l.a.createElement(L,null,l.a.createElement(g,null),l.a.createElement(O,null),l.a.createElement(U,null));const R=m.b.div`
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  display: flex;
  font-family: 'sysfont';
`;var V=()=>l.a.createElement(R,null,l.a.createElement(d,null),l.a.createElement(M,null)),W=n(26),H=n.n(W),K=n(27),N=n.n(K),_=m.a`
@font-face {
    font-family: 'sysfont';
    src: local('sysfont'),
    url(${H.a}) format("opentype");
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'AmericanTypewriter';
    src: local('AmericanTypewriter'),
    url(${N.a}) format("opentype");
    font-weight: normal;
    font-style: normal;
}
`;var q=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(_,null),l.a.createElement(r.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:V}))))};const P=document.getElementById("root");Object(i.createRoot)(P).render(l.a.createElement(a.StrictMode,null,l.a.createElement(q,null)))}},[[31,1,2]]]);
//# sourceMappingURL=main.dea8dd6c.chunk.js.map