(this["webpackJsonpmarvel-challenge"]=this["webpackJsonpmarvel-challenge"]||[]).push([[0],{32:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),a=n(23),c=n.n(a),o=(n(32),n(15)),s=n(3),d=s.a.div.withConfig({displayName:"GifFramestyles__Container",componentId:"wv7nbn-0"})(["display:flex;flex-flow:row wrap;justify-content:center;margin:20px auto;background-color:black;width:100%;"]),l=n(2),h=n(6),j=Object(r.createContext)(),p=Object(r.createContext)(),b=s.a.div.withConfig({displayName:"Searchstyles__Container",componentId:"sc-1pjs85q-0"})(["display:flex;justify-content:center;"]),f=s.a.form.withConfig({displayName:"Searchstyles__FormWrap",componentId:"sc-1pjs85q-1"})(["display:flex;justify-content:center;height:100%;margin-top:1.2rem;width:100%;flex-wrap:wrap;@media (max-width:100px){flex-direction:column;align-items:center;}"]),m=s.a.input.withConfig({displayName:"Searchstyles__Input",componentId:"sc-1pjs85q-2"})(["max-width:450px;width:100%;border:0;padding:.6rem;height:50px;box-sizing:border-box;@media (max-width:1000px){width:80%;}"]),u=s.a.button.withConfig({displayName:"Searchstyles__Button",componentId:"sc-1pjs85q-3"})(["display:flex;align-items:center;height:50px;background-color:#e50914;color:white;text-transform:uppercase;border:0;padding:0 2rem;font-size:1.5rem;cursor:pointer;transition:all 0.2s ease;box-sizing:border-box;&:hover{background-color:#f40612;}img{margin-left:.8rem;filter:brightness(0) invert(1);width:24px;@media (max-width:1000px){width:16px;}}@media (max-width:1000px){height:50px;font-size:1rem;margin-top:20px;font-weight:bold;}"]),x=n(14),g=n.n(x),O=n(19),w="lCKD797WW3s0iZpiiZpDAf5PpCoYwpq5",y=function(){var e=Object(O.a)(g.a.mark((function e(t){var n,i,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=".concat(w,"&q=").concat(t,"&limit=50&offset=0&rating=g&lang=en"),e.next=3,fetch(n);case 3:return i=e.sent,e.next=6,i.json();case 6:if(r=e.sent,200===i.status){e.next=9;break}throw Error(r.message);case 9:return e.abrupt("return",r.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(O.a)(g.a.mark((function e(){var t,n,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.giphy.com/v1/gifs/trending?api_key=".concat(w,"&limit=50&rating=g"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:if(i=e.sent,200===n.status){e.next=9;break}throw Error(i.message);case 9:return e.abrupt("return",i.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function I(e){var t=e.children,n=Object(h.a)(e,["children"]),a=Object(r.useState)(""),c=Object(o.a)(a,2),s=c[0],d=c[1];return Object(i.jsx)(p.Provider,{value:{searchTerm:s,setSearchTerm:d},children:Object(i.jsx)(b,Object(l.a)(Object(l.a)({},n),{},{children:t}))})}I.FormWrap=function(e){var t=e.children,n=Object(h.a)(e,["children"]),a=Object(r.useContext)(p).searchTerm,c=Object(r.useContext)(j).setGifList;return Object(i.jsx)(f,Object(l.a)(Object(l.a)({onSubmit:function(e){e.preventDefault(),y(a).then((function(e){c(e)}))}},n),{},{children:t}))},I.Input=function(e){var t=Object.assign({},e),n=Object(r.useContext)(p),a=n.searchTerm,c=n.setSearchTerm;return Object(i.jsx)(m,Object(l.a)(Object(l.a)({},t),{},{value:a,onChange:function(e){c(e.target.value)}}))},I.Button=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(u,Object(l.a)(Object(l.a)({},n),{},{children:t}))};var _=s.a.div.withConfig({displayName:"GifCardstyles__Card",componentId:"q2qlpq-0"})(["flex:auto;width:220px;height:auto;margin:5px 5px;@media (max-width:1000px){max-width:400px;width:100%;}"]),C=s.a.img.withConfig({displayName:"GifCardstyles__Image",componentId:"q2qlpq-1"})(["width:100%;height:100%;"]);function k(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(_,Object(l.a)(Object(l.a)({},n),{},{children:t}))}k.Image=function(e){var t=Object.assign({},e);return Object(i.jsx)(C,Object(l.a)({},t))};var L=n(11),N=s.a.div.withConfig({displayName:"Headerstyles__Container",componentId:"sc-5ldvdk-0"})(["display:flex;margin:0 56px;margin-top:10px;height:80px;padding:18px 0;justify-content:space-between;align-items:center;a{display:flex;}@media (max-width:1000px){margin:0 30px;}"]),B=s.a.img.withConfig({displayName:"Headerstyles__Logo",componentId:"sc-5ldvdk-1"})(["filter:brightness(0) invert(1);width:50px;height:50px;margin-right:40px;transform:rotate(0deg);transition:all 1s ease-in;&:hover{transform:rotate(360deg);}@media (min-width:1449px){width:55px;height:55px;}"]),S=s.a.a.withConfig({displayName:"Headerstyles__Anchor",componentId:"sc-5ldvdk-2"})(["font-size:1rem;font-weight:500;color:white;position:relative;text-decoration:none;&:after{position:absolute;left:50%;content:'';height:1px;background:white;transition:all 0.5s ease-in;width:0;bottom:-1px;}&:hover:after{width:100%;left:0;}"]),q=s.a.div.withConfig({displayName:"Headerstyles__ButtonsContainer",componentId:"sc-5ldvdk-3"})(["display:flex;justify-content:space-between;&>:first-child,&>:nth-child(2){margin-right:1rem;}"]),H=Object(s.a)(L.b).withConfig({displayName:"Headerstyles__ButtonLink",componentId:"sc-5ldvdk-4"})(["font-size:1rem;font-weight:500;color:white;position:relative;text-decoration:none;&:after{position:absolute;left:50%;content:'';height:1px;background:white;transition:all 0.5s ease-in;width:0;bottom:-1px;}&:hover:after{width:100%;left:0;}"]),P="/about";function z(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(N,Object(l.a)(Object(l.a)({},n),{},{children:t}))}z.Logo=function(e){var t=Object.assign({},e);return Object(i.jsx)(L.b,{to:"/",children:Object(i.jsx)(B,Object(l.a)({},t))})},z.ButtonLink=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(H,Object(l.a)(Object(l.a)({},n),{},{children:t}))},z.ButtonsContainer=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(q,Object(l.a)(Object(l.a)({},n),{},{children:t}))},z.Anchor=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(S,Object(l.a)(Object(l.a)({},n),{},{children:t}))};var A=s.a.div.withConfig({displayName:"Loaderstyles__Container",componentId:"sc-17z9ofg-0"})(["display:flex;justify-content:center;align-items:center;width:100%;height:200px;&>div{width:20px;height:20px;background:#ffffff;border-radius:50%;margin:3px;animation:hop 1s infinite alternate;}&>div:nth-child(2){animation-delay:0.2s;}&>div:nth-child(3){animation-delay:0.4s;}@keyframes hop{to{opacity:0.8;transform:translate(0,-20px);background:#f40612;}}"]);function F(){return Object(i.jsxs)(A,{children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{})]})}var T=s.a.div.withConfig({displayName:"Profilestyles__Container",componentId:"yrpbs2-0"})(["display:flex;justify-content:center;flex-direction:column;color:white;padding:2.5rem;@media (max-width:1000px){padding:2rem;}"]),E=s.a.h2.withConfig({displayName:"Profilestyles__Header",componentId:"yrpbs2-1"})(["font-size:2.5rem;font-weight:bold;text-align:left;"]),G=s.a.p.withConfig({displayName:"Profilestyles__Body",componentId:"yrpbs2-2"})(["font-size:1.2rem;line-height:1.2;font-weight:normal;text-align:left;margin-top:1rem;"]),D=s.a.ul.withConfig({displayName:"Profilestyles__List",componentId:"yrpbs2-3"})(["font-size:1.2rem;line-height:1.2;font-weight:normal;margin-top:1rem;"]),W=s.a.li.withConfig({displayName:"Profilestyles__ListItem",componentId:"yrpbs2-4"})(["&::before{color:red !important;font-weight:bold;display:inline-block;width:1em;margin-left:-1em;}"]);function R(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(T,Object(l.a)(Object(l.a)({},n),{},{children:t}))}function J(){var e=Object(r.useContext)(j).gifList;return Object(i.jsx)(d,{children:e.map((function(e){var t=e.id,n=(e.bitly_gif_url,e.bitly_url,e.slug),r=(e.title,e.url,e.rating,e.images);e.embed_url;return Object(i.jsx)(k,{children:Object(i.jsx)(k.Image,{src:r.downsized.url})},t+n)}))})}function Z(){return Object(i.jsx)(I,{children:Object(i.jsxs)(I.FormWrap,{children:[Object(i.jsx)(I.Input,{placeholder:"Search for a gif"}),Object(i.jsx)(I.Button,{children:"Search"})]})})}R.Header=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(E,Object(l.a)(Object(l.a)({},n),{},{children:t}))},R.Body=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(G,Object(l.a)(Object(l.a)({},n),{},{children:t}))},R.List=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(D,Object(l.a)(Object(l.a)({},n),{},{children:t}))},R.ListItem=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(i.jsx)(W,Object(l.a)(Object(l.a)({},n),{},{children:t}))};var K=n.p+"static/media/pawprint.b266c184.svg";function M(){return Object(i.jsxs)(z,{children:[Object(i.jsx)(z.Logo,{src:K,alt:"Pawprint"}),Object(i.jsxs)(z.ButtonsContainer,{children:[Object(i.jsx)(z.ButtonLink,{to:"/",children:"Home"}),Object(i.jsx)(z.Anchor,{href:"https://github.com/runandrerun/marvel-challenge",rel:"noopener noreferrer",children:"Github Repo"}),Object(i.jsx)(z.ButtonLink,{to:P,children:"About me"})]})]})}var Y=s.a.section.withConfig({displayName:"Homestyles__HomeSection",componentId:"sc-1iyhqfe-0"})(["background-color:black;"]);function Q(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){v().then((function(e){a(e)}))}),[]),Object(i.jsx)(j.Provider,{value:{gifList:n,setGifList:a},children:Object(i.jsxs)(Y,{id:"home",children:[Object(i.jsx)(M,{}),Object(i.jsx)(Z,{}),n.length>0?Object(i.jsx)(J,{}):Object(i.jsx)(F,{})]})})}var U=s.a.section.withConfig({displayName:"Aboutstyles__AboutSection",componentId:"axdigy-0"})([""]);function V(){return Object(i.jsxs)(U,{id:"about",children:[Object(i.jsx)(M,{}),Object(i.jsxs)(R,{children:[Object(i.jsx)(R.Header,{children:"About me"}),Object(i.jsx)(R.Body,{children:"Hi, I'm Andr\xe9! \ud83d\udc4b"}),Object(i.jsx)(R.Body,{children:"I'm a former Senior Network Engineer (6+ years of experience) turned Software Engineer (2+ years of experience)."}),Object(i.jsx)(R.Body,{children:"I decided to pivot and change careers when I felt that I wasn't satisfied \u2013 I quit, traveled, and returned to attend a coding bootcamp. I never looked back, and I've never been happier. In fact, my only regret is that I didn't make this career change sooner."}),Object(i.jsx)(R.Body,{children:"I'm currently now looking for new opportunities in which I can continue to learn and grow into a better developer. Ideally, I'd love to be in the pet tech or health space."}),Object(i.jsx)(R.Body,{children:"I built this simple application to showcase the following:"}),Object(i.jsxs)(R.List,{children:[Object(i.jsx)(R.ListItem,{children:"React"}),Object(i.jsx)(R.ListItem,{children:"Styled components"}),Object(i.jsx)(R.ListItem,{children:"React Router DOM"}),Object(i.jsx)(R.ListItem,{children:"Hooks"}),Object(i.jsx)(R.ListItem,{children:"Context"}),Object(i.jsx)(R.ListItem,{children:"API Fetching"})]})]})]})}var X=n(4);var $=function(){return Object(i.jsxs)(L.a,{children:[Object(i.jsx)(X.a,{exact:!0,path:"/",component:Q}),Object(i.jsx)(X.a,{exact:!0,path:P,component:V})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))};c.a.render(Object(i.jsx)($,{}),document.getElementById("root")),ee()}},[[44,1,2]]]);
//# sourceMappingURL=main.14c9cdf2.chunk.js.map