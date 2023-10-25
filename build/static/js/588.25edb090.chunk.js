"use strict";(self.webpackChunkmarvel_character=self.webpackChunkmarvel_character||[]).push([[588],{227:function(e,n,a){a.r(n),a.d(n,{default:function(){return x}});var r=a(885),s=a(791),t=a(211),c=a(197),i=a(594),l=a.p+"static/media/mjolnir.61f31e1809f12183a524.png",o=a(184),u=function(e){var n=e.char,a=n.name,r=n.description,s=n.thumbnail,t=n.homepage,c=n.wiki,i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s?{objectFit:"contain"}:{objectFit:"cover"};return(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:s,alt:"Random character",className:"randomchar__img",style:i}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:a}),(0,o.jsx)("p",{className:"randomchar__descr",children:r}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:t,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:c,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,s.useState)({}),n=(0,r.Z)(e,2),a=n[0],d=n[1],m=(0,t.Z)(),h=m.loading,_=m.error,j=m.getCharacter,f=m.clearError;(0,s.useEffect)((function(){x();var e=setInterval(x,6e4);return function(){clearInterval(e)}}),[]);var v=function(e){d(e)},x=function(){f();var e=Math.floor(400*Math.random()+1011e3);j(e).then(v)},b=_?(0,o.jsx)(i.Z,{}):null,N=h?(0,o.jsx)(c.Z,{}):null,p=h||_?null:(0,o.jsx)(u,{char:a});return(0,o.jsxs)("div",{className:"randomchar",children:[b,N,p,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{className:"button button__main",onClick:x,children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=a(982),h=function(e){var n=(0,s.useState)([]),a=(0,r.Z)(n,2),l=a[0],u=a[1],d=(0,s.useState)(!1),h=(0,r.Z)(d,2),_=h[0],j=h[1],f=(0,s.useState)(210),v=(0,r.Z)(f,2),x=v[0],b=v[1],N=(0,s.useState)(!1),p=(0,r.Z)(N,2),g=p[0],k=p[1],y=(0,t.Z)(),Z=y.loading,S=y.error,C=y.getAllCharacters;(0,s.useEffect)((function(){w(x,!0)}),[]);var w=function(e,n){j(!n),C(e).then(F)},F=function(e){var n=!1;e.length<9&&(n=!0),u((function(n){return[].concat((0,m.Z)(n),(0,m.Z)(e))})),j((function(e){return!1})),b((function(e){return e+9})),k((function(e){return n}))},E=(0,s.useRef)([]),I=function(e){E.current.forEach((function(e){return e.classList.remove("char__item_selected")})),E.current[e].classList.add("char__item_selected"),E.current[e].focus()};var A=function(n){var a=n.map((function(n,a){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n.thumbnail&&(r={objectFit:"unset"}),(0,o.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return E.current[a]=e},onClick:function(){e.onCharSelected(n.id),I(a)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(n.id),I(a))},children:[(0,o.jsx)("img",{src:n.thumbnail,alt:n.name,style:r}),(0,o.jsx)("div",{className:"char__name",children:n.name})]},n.id)}));return(0,o.jsx)("ul",{className:"char__grid",children:a})}(l),R=S?(0,o.jsx)(i.Z,{}):null,L=Z&&!_?(0,o.jsx)(c.Z,{}):null;return(0,o.jsxs)("div",{className:"char__list",children:[R,L,A,(0,o.jsx)("button",{className:"button button__main button__long",disabled:_,style:{display:g?"none":"block"},onClick:function(){return w(x)},children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})},_=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]})},j=function(e){var n=e.char,a=n.name,r=n.description,s=n.thumbnail,t=n.homepage,c=n.wiki,i=n.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(l={objectFit:"contain"}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:s,alt:a,style:l}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:a}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:t,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:c,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:r}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,n){if(!(n>9))return(0,o.jsx)("li",{className:"char__comics-item",children:e.name},n)}))]})]})},f=function(e){var n=(0,s.useState)(null),a=(0,r.Z)(n,2),l=a[0],u=a[1],d=(0,t.Z)(),m=d.error,h=d.loading,f=d.getCharacter,v=d.clearError;(0,s.useEffect)((function(){x()}),[e.charId]);var x=function(){var n=e.charId;n&&(v(),f(n).then(b))},b=function(e){u(e)},N=l||h||m?null:(0,o.jsx)(_,{}),p=m?(0,o.jsx)(i.Z,{}):null,g=h?(0,o.jsx)(c.Z,{}):null,k=h||m||!l?null:(0,o.jsx)(j,{char:l});return(0,o.jsxs)("div",{className:"char__info",children:[N,p,g,k]})},v=a.p+"static/media/vision.067d4ae1936d64a577ce.png",x=function(){var e=(0,s.useState)(null),n=(0,r.Z)(e,2),a=n[0],t=n[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(h,{onCharSelected:function(e){return t(e)}}),(0,o.jsx)(f,{charId:a})]}),(0,o.jsx)("img",{className:"bg-decoration",src:v,alt:"vision"})]})}},982:function(e,n,a){a.d(n,{Z:function(){return t}});var r=a(907);var s=a(181);function t(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,s.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=588.25edb090.chunk.js.map