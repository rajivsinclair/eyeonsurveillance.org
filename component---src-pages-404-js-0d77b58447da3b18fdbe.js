(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(146),o=n(176),c=n(152),l=n(153),s=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{color:"backgroundDark",height:["35vh","80vh"],width:["95vw","60vw"]}),r.a.createElement(l.a,{color:"primary",height:["25vh","35vh"],width:["75vw","60vw"],invertX:!0}),r.a.createElement(l.a,{color:"secondaryLight",height:["10vh","20vh"],width:["50vw","50vw"],invertX:!0,invertY:!0}))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a.Container,{id:"404",Background:s},r.a.createElement(i.Box,{width:[320,400,600],m:"auto"},r.a.createElement(i.Heading,{color:"primaryDark",fontSize:["9rem","13rem","16rem"]},"404"),r.a.createElement(i.Heading,{color:"secondary",fontSize:["4rem","5rem","6rem"]},"There isn't anything here"))))}},150:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=(n(32),n(156),r.a.createContext({})),l=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){"use strict";n(149);var a=n(0),r=n.n(a),i=n(145),o=n(151),c=n(146),l=n(4),s=n.n(l),m=n(182),d=n.n(m),u=n(159),p=i.default.div.withConfig({displayName:"Section__SectionContainer",componentId:"sc-18uueee-0"})(["min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:center;padding:5em 1em;scroll-behavior:smooth;"]),h=function(){return r.a.createElement("div",null)},g=function(e){var t=e.id,n=e.children,a=e.Background,i=void 0===a?h:a;return r.a.createElement(o.b,{id:t,style:{position:"relative"}},r.a.createElement(i,null),r.a.createElement(p,null,n))};g.propTypes={id:s.a.string.isRequired,children:s.a.node.isRequired,Background:s.a.func};var f=function(e){var t=e.name,n=e.icon,a=void 0===n?"":n,i=e.label,o=void 0===i?"":i;return r.a.createElement(d.a,{left:!0},r.a.createElement(c.Heading,{color:"secondaryDark",mb:4},r.a.createElement(u.a,{selected:!0},t,a&&r.a.createElement("span",{role:"img","aria-label":o,style:{marginLeft:"10px"}},a))))};f.propTypes={name:s.a.string.isRequired,icon:s.a.string,label:s.a.string},t.a={Container:g,Header:f}},153:function(e,t,n){"use strict";var a=n(145).default.div.withConfig({displayName:"Triangle",componentId:"le4p17-0"})(["position:absolute;width:0;height:0;z-index:-2;"," "," @media only screen and (min-width:768px){"," ",";}"],function(e){var t=e.theme.colors[e.color]||e.color,n=e.height[0]+" solid "+t+";";return e.invertY?"border-bottom: "+n+"; bottom: 0;":"border-top: "+n+";"},function(e){var t=e.width[0]+" solid transparent;";return e.invertX?"border-left: "+t+"; right: 0;":"border-right: "+t+";"},function(e){var t=e.height[1];return e.invertY?"border-bottom-width: "+t+";":"border-top-width: "+t+";"},function(e){var t=e.width[1];return e.invertX?"border-left-width: "+t+";":"border-right-width: "+t+";"});t.a=a},156:function(e,t,n){var a;e.exports=(a=n(166))&&a.default||a},159:function(e,t,n){"use strict";var a=n(145).default.span.withConfig({displayName:"LinkAnimated",componentId:"qj14bt-0"})(["text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;",";transition:0.4s;cursor:",";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",";height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}"],function(e){return e.selected&&"border-bottom:  5px solid "+e.theme.colors.primaryLight},function(e){return e.onClick?"pointer":"default"},function(e){return e.theme.colors.secondaryLight});t.a=a},164:function(e,t){e.exports={background:"#FFFFFF",backgroundDark:"#dcdcdc",primary:"#e50000",primaryLight:"#de6868",primaryDark:"#ba2525",secondary:"#b1b1b1",secondaryLight:"#dcdcdc",secondaryDark:"#2f0101"}},165:function(e){e.exports={data:{contentfulAbout:{name:"Eye on Surveillance",description:"a group of community members and organizations working together to address surveillance in New Orleans.",profile:{favicon16:{src:"//images.ctfassets.net/lp7vq2grdldw/4ZdFHRqzSt0uB33MSsQyT3/825f800611e844583ae5d3849958b3b5/logo.jpg?w=16&fl=progressive&q=50"},favicon32:{src:"//images.ctfassets.net/lp7vq2grdldw/4ZdFHRqzSt0uB33MSsQyT3/825f800611e844583ae5d3849958b3b5/logo.jpg?w=32&fl=progressive&q=50"},bigIcon:{src:"//images.ctfassets.net/lp7vq2grdldw/4ZdFHRqzSt0uB33MSsQyT3/825f800611e844583ae5d3849958b3b5/logo.jpg?w=192&fl=progressive&q=50"},appleIcon:{src:"//images.ctfassets.net/lp7vq2grdldw/4ZdFHRqzSt0uB33MSsQyT3/825f800611e844583ae5d3849958b3b5/logo.jpg?w=180&fl=progressive&q=50"}}}}}},166:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(56),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},176:function(e,t,n){"use strict";var a=n(177),r=n.n(a),i=n(0),o=n.n(i),c=n(145),l=n(4),s=n.n(l),m=n(151),d=(n(178),n(155)),u=n.n(d),p=n(164),h=n.n(p),g=(n(149),n(165)),f=n(179),v=n.n(f),b=n(150),w=function(e){var t=e.theme,n=void 0===t?{}:t;return o.a.createElement(b.a,{query:"4063282471",render:function(e){var t=e.contentfulAbout,a=t.name,r=t.description,i=t.profile,c=""+a;return o.a.createElement(v.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,c),o.a.createElement("meta",{name:"description",content:r}),o.a.createElement("link",{rel:"shortcut icon",href:"https:"+i.favicon32.src}),o.a.createElement("meta",{name:"theme-color",content:n.background}),o.a.createElement("meta",{name:"image",content:"https:"+i.favicon32.src}),o.a.createElement("meta",{itemProp:"name",content:c}),o.a.createElement("meta",{itemProp:"description",content:r}),o.a.createElement("meta",{itemProp:"image",content:"https:"+i.favicon32.src}),o.a.createElement("meta",{name:"og:title",content:c}),o.a.createElement("meta",{name:"og:description",content:r}),o.a.createElement("meta",{name:"og:image",content:"https:"+i.bigIcon.src}),o.a.createElement("meta",{name:"og:site_name",content:c}),o.a.createElement("meta",{name:"og:locale",content:"en_US"}),o.a.createElement("meta",{name:"og:type",content:"website"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:title",content:c}),o.a.createElement("meta",{name:"twitter:description",content:r}),o.a.createElement("meta",{name:"twitter:image",content:"https:"+i.bigIcon.src}),o.a.createElement("meta",{name:"twitter:image:src",content:"https:"+i.bigIcon.src}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https:"+i.appleIcon.src}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https:"+i.favicon32.src}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https:"+i.favicon16.src}),o.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"}))},data:g})};w.propTypes={theme:s.a.object};var E=Object(c.withTheme)(w);function y(){var e=r()(["\n*,\n*::after,\n*::before { \n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n  }\n\nbody {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; \n  margin: 0;\n  font-family: Cabin;\n  overflow-x: hidden;\n}\n"]);return y=function(){return e},e}var x=Object(c.createGlobalStyle)(y());u()({ssrFadeout:!0});var k=function(e){var t=e.children;return o.a.createElement(i.Fragment,null,o.a.createElement(x,null),o.a.createElement(c.ThemeProvider,{theme:{colors:h.a}},o.a.createElement(m.a,null,o.a.createElement(E,null),t)))};k.propTypes={children:s.a.node.isRequired};t.a=k}}]);
//# sourceMappingURL=component---src-pages-404-js-0d77b58447da3b18fdbe.js.map