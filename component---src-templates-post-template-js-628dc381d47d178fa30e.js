(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[946],{8705:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/cbcszoology/static/865fffb91b00c8d62030bc03ac4b5fce/e07e1/banner-about.jpg","srcSet":"/cbcszoology/static/865fffb91b00c8d62030bc03ac4b5fce/e07e1/banner-about.jpg 100w,\\n/cbcszoology/static/865fffb91b00c8d62030bc03ac4b5fce/dd515/banner-about.jpg 200w","sizes":"100px"},"sources":[{"srcSet":"/cbcszoology/static/865fffb91b00c8d62030bc03ac4b5fce/d8057/banner-about.webp 100w,\\n/cbcszoology/static/865fffb91b00c8d62030bc03ac4b5fce/2e34e/banner-about.webp 200w","type":"image/webp","sizes":"100px"}]},"width":100,"height":100}')},7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),a=r(7067);function l(t,r,o){return a()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return r&&n(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),l=r(379),o=r(8206);e.exports=function(e){return n(e)||a(e)||l(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),a=r(319),l=r(9713),o=r(7316);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),m=r(4983).mdx,u=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=o(e,["scope","children"]),c=u(t),p=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:m},c),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(l)))}),[r,t]);return s.createElement(p,i({},l))}},3076:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(7294),a=r(9),l=r(652),o=r(2347),c=a.ZP.div.withConfig({displayName:"Title__Wrapper",componentId:"sc-15oh585-0"})(["position:relative;text-align:center;margin-bottom:1.25rem;h4{color:var(--clr-grey-3);text-transform:uppercase;font-weight:500;background:var(--clr-white);display:inline-block;margin-bottom:0;padding:0 0.6rem;}.line{position:absolute;top:50%;left:0;width:100%;height:1.5px;transform:translateY(-50%);background:var(--clr-primary-5);z-index:-1;}"]),i=function(e){var t=e.title;return n.createElement(c,null,n.createElement("h4",null,t),n.createElement("div",{className:"line"}))},s=a.ZP.div.withConfig({displayName:"About__Wrapper",componentId:"sc-3yl0k4-0"})(["text-align:center;p{color:var(--clr-grey-5);}.img{border-radius:50%;margin:0 auto;margin-bottom:1rem;}"]),m=function(){return n.createElement(s,null,n.createElement(i,{title:"about me"}),n.createElement(o.S,{src:"../../assets/banner-about.jpeg",layout:"fixed",width:100,height:100,alt:"author",className:"img",__imageData:r(8705)}),n.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi."),n.createElement(l.Z,{styleClass:"banner-icons"}))},u=r(5444),p=a.ZP.div.withConfig({displayName:"Recent__Wrapper",componentId:"sc-10gxzos-0"})([".post{display:grid;grid-template-columns:75px 1fr;column-gap:1rem;margin-bottom:1rem;}.img{border-radius:var(--radius);}h5{font-size:0.7rem;margin-bottom:0.25rem;letter-spacing:0;line-height:1.2;color:var(--clr-grey-1);}p{font-size:0.6rem;margin-bottom:0;color:var(--clr-grey-5);}.post:hover{h5{color:var(--clr-primary-5);}}"]),d=function(){var e=(0,u.K2)("3361116154").allMdx.nodes;return n.createElement(p,null,n.createElement(i,{title:"recent"}),e.map((function(e){var t=e.frontmatter,r=t.title,a=t.slug,l=t.date,c=t.image;return n.createElement(u.rU,{to:"/posts/"+a,key:e.id,className:"post"},n.createElement(o.G,{image:(0,o.d)(c),alt:r,className:"img"}),n.createElement("div",null,n.createElement("h5",null,r),n.createElement("p",null,l)))})))},f=r(2812),g=a.ZP.div.withConfig({displayName:"BannerCategories__Wrapper",componentId:"sc-1z1hj8-0"})([".category{font-size:1rem;color:var(--clr-grey-5);text-transform:capitalize;display:block;padding:0.5rem 0 0.5rem 1rem;letter-spacing:var(--spacing);transition:var(--transition);border-radius:var(--radius);}.category:hover{background:var(--clr-grey-10);}"]),b=function(){return n.createElement(g,null,n.createElement(i,{title:"categories"}),n.createElement(f.Z,null))},E=a.ZP.aside.withConfig({displayName:"Banner__Wrapper",componentId:"p4cqc8-0"})(["display:grid;grid-template-columns:200px;justify-content:center;row-gap:1rem;@media (min-width:576px){&{grid-template-columns:repeat(auto-fit,200px);column-gap:3rem;}}"]),h=function(){return n.createElement(E,null,n.createElement(m,null),n.createElement(d,null),n.createElement(b,null))}},2812:function(e,t,r){"use strict";var n=r(7294),a=r(5444);t.Z=function(){var e=(0,a.K2)("3824322444").allMdx.distinct;return n.createElement("ul",{className:"categories"},e.map((function(e,t){return n.createElement("li",{key:t},n.createElement(a.rU,{to:"/"+e,className:"category"},e))})))}},3270:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){e.showPerson;return n.createElement("header",{className:"hero"},n.createElement("div",{className:"hero-person-wrapper"},n.createElement("img",{src:"https://static.wixstatic.com/media/736ab9_523a6bdffb1f4e67893af662307d304b~mv2.gif",alt:"panda",className:"hero-person",placeholder:"blurred"})),n.createElement("div",{className:"promotions"},n.createElement("p",null,"welcome to cbcs zoology .org"),n.createElement("p",null,"This website is created to help the students those who are having ZOOLOGY in graduation under this new CBCS system. This website for the first time in India is going to provide topic wise information in question - answer format under the guidance of experienced professors.")))}},5298:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(7294),a=r(5444),l=r(3201),o=function(e){var t=e.styleClass,r=e.children;return n.createElement("ul",{className:t},n.createElement("li",null,n.createElement(a.rU,{to:"/",className:"page-link"},"Home")),n.createElement("li",null,n.createElement(a.rU,{to:"/posts",className:"page-link"},"Posts"),r),n.createElement("li",null,n.createElement(a.rU,{to:"/newsletter",className:"page-link"},"Newsletter")),n.createElement("li",null,n.createElement(a.rU,{to:"/post",className:"page-link"},"Post")),n.createElement("li",null,n.createElement(a.rU,{to:"/practicals",className:"page-link"},"Practicals")))},c=r(652),i=function(e){var t=e.toggle;return n.createElement("nav",{className:"navbar"},n.createElement("div",{className:"nav-center"},n.createElement("div",{className:"nav-header"},n.createElement(a.rU,{to:"/",className:"nav-logo"},n.createElement("img",{src:"https://static.wixstatic.com/media/736ab9_bd532081d9e24a35bce6a0a0e53cbd8c~mv2.png/v1/crop/x_0,y_38,w_2000,h_424/fill/w_1000,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/736ab9_bd532081d9e24a35bce6a0a0e53cbd8c~mv2.png",alt:"cbs zoology logo"})),n.createElement("button",{className:"toggle-btn",onClick:t},n.createElement(l.Fm7,null))),n.createElement(o,{styleClass:"nav-links"}),n.createElement(c.Z,{styleClass:"nav-icons"})))},s=r(2812),m=r(1424),u=function(e){var t=e.isOpen,r=e.toggle;return n.createElement("aside",{className:"sidebar "+(t?"showSidebar":"")},n.createElement("button",{className:"close-btn",onClick:r},n.createElement(m.QAE,null)),n.createElement("div",{className:"sidebar-container"},n.createElement(o,{styleClass:"sidebar-links"},n.createElement(s.Z,null))))},p=function(){return n.createElement("footer",{className:"footer"},n.createElement("div",null,n.createElement(c.Z,{styleClass:"footer-icons"}),n.createElement("p",null,"©",(new Date).getFullYear()," MDXBlog. All rights reserved.")))},d=function(e){var t=e.children,r=n.useState(!1),a=r[0],l=r[1],o=function(){l(!a)};return n.createElement(n.Fragment,null,n.createElement(u,{isOpen:a,toggle:o}),n.createElement(i,{toggle:o}),n.createElement("main",null,t),n.createElement(p,null))}},652:function(e,t,r){"use strict";var n=r(7294),a=r(3201);t.Z=function(e){var t=e.styleClass;return n.createElement("ul",{className:t},n.createElement("li",null,n.createElement("a",{href:"https://twitter.com"},n.createElement(a.R9i,{className:"social-icon facebook-icon"}))),n.createElement("li",null,n.createElement("a",{href:"https://twitter.com"},n.createElement(a.soY,{className:"social-icon dribble-icon"}))),n.createElement("li",null,n.createElement("a",{href:"https://twitter.com"},n.createElement(a.N1v,{className:"social-icon twitter-icon"}))))}},545:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(5298),l=r(3270),o=r(9),c=r(2347),i=r(3076),s=r(6725),m=o.ZP.section.withConfig({displayName:"post-template__Wrapper",componentId:"sc-1h1d09y-0"})(["width:85vw;max-width:1100px;margin:0 auto;margin-bottom:4rem;.post-info{margin:2rem 0 4rem 0;text-align:center;span{background:var(--clr-primary-5);color:var(--clr-white);border-radius:var(--radius);padding:0.25rem 0.5rem;text-transform:uppercase;letter-spacing:var(--spacing);}h2{margin:1.25rem 0;font-weight:400;}p{color:var(--clr-grey-5);}.underline{width:5rem;height:1px;background:var(--clr-grey-9);margin:0 auto;margin-bottom:1rem;}}@media (min-width:992px){&{width:92vw;}.main-img{width:75%;display:block;margin:0 auto;}}@media (min-width:1170px){&{display:grid;grid-template-columns:1fr 200px;column-gap:4rem;}}"]);t.default=function(e){var t=e.data.mdx,r=t.frontmatter,o=r.title,u=r.category,p=r.image,d=r.date,f=r.embeddedImages,g=t.body;return n.createElement(a.Z,null,n.createElement(l.Z,null),n.createElement(m,null,n.createElement("article",null,n.createElement(c.G,{image:(0,c.d)(p),alt:o,className:"main-img"}),n.createElement("div",{className:"post-info"},n.createElement("span",null,u),n.createElement("h2",null,o),n.createElement("p",null,d),n.createElement("div",{className:"underline"})),n.createElement(s.MDXRenderer,{embeddedImages:f},g)),n.createElement("article",null,n.createElement(i.Z,null))))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-628dc381d47d178fa30e.js.map