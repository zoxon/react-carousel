(this["webpackJsonpreact-carousel"]=this["webpackJsonpreact-carousel"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(46)},,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/image1.66321c50.jpg"},function(e,t,a){e.exports=a.p+"static/media/image2.072a19c4.jpg"},function(e,t,a){e.exports=a.p+"static/media/image3.1251366f.jpg"},function(e,t,a){e.exports=a.p+"static/media/image4.d63c6397.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r),s=(a(21),a(22),a(10)),c=a(11),i=a(14),u=a(12),m=a(4),d=a(15),h=a(13),p=a.n(h),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={slideWidth:0,currentSlide:0,slidesCount:0,trackWidth:0,offset:0,isUserInteract:!1},a.onArrowClick=function(e){a.goTo("prev"===e?a.prevIndex:a.nextIndex),a.setState({isUserInteract:!0}),a.stopAutoPlay()},a.onBulletClick=function(e){a.goTo(e),a.setState({isUserInteract:!0}),a.stopAutoPlay()},a.onResize=function(){a.updateSizes(),a.goTo(a.state.currentSlide)},a.onMouseOver=function(){a.stopAutoPlay()},a.onMouseLeave=function(){a.state.isUserInteract||a.autoPlay()},a.throttledOnResize=p()(a.onResize.bind(Object(m.a)(a)),300),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"goTo",value:function(e){var t=this,a=this.state.slideWidth*e;this.setState({offset:a,currentSlide:e},(function(){return t.updateSlidesStyle()}))}},{key:"updateSizes",value:function(){var e=this,t=this.trackEl.clientWidth,a=l.a.Children.count(this.props.children),n=a*t;this.setState({slideWidth:t,trackWidth:n,slidesCount:a},(function(){return e.updateSlidesStyle()}))}},{key:"autoPlay",value:function(){var e=this;this.timer=setInterval((function(){e.goTo(e.nextIndex)}),this.props.autoplay)}},{key:"stopAutoPlay",value:function(){clearInterval(this.timer)}},{key:"componentDidMount",value:function(){this.updateSizes(),this.props.autoplay&&this.autoPlay(),window.addEventListener("resize",this.throttledOnResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttledOnResize)}},{key:"updateSlidesStyle",value:function(){var e=this.state,t=e.offset,a=e.trackWidth;this.setState({slidesStyles:{transition:"transform 700ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s",width:"".concat(a,"px"),transform:"translate3d(".concat(-1*t,"px, 0px, 0px)")}})}},{key:"renderBullets",value:function(){for(var e=this,t=this.state.slidesCount,a=[],n=function(t){a.push(l.a.createElement("button",{key:t,className:t===e.state.currentSlide?"carousel__bullet carousel__bullet_active":"carousel__bullet",onClick:function(){return e.onBulletClick(t)}},l.a.createElement("span",{className:"visually-hidden"},t+1)))},r=0;r<t;r++)n(r);return a}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.arrows,r=t.bullets;return l.a.createElement("div",{className:"carousel carousel_ltr"},l.a.createElement("div",{className:"carousel__track",ref:function(t){return e.trackEl=t},onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseLeave},l.a.createElement("ul",{className:"carousel__slides",style:this.state.slidesStyles},a&&l.a.Children.map(a,(function(t,a){return l.a.createElement("li",{style:{width:e.state.slideWidth+"px"},className:a===e.state.currentSlide?"carousel__slide carousel__slide_active":"carousel__slide"},t)})))),n&&l.a.createElement("div",{className:"carousel__arrows"},l.a.createElement("button",{className:"carousel__arrow carousel__arrow_left",onClick:function(){return e.onArrowClick("prev")}},l.a.createElement("span",{className:"visually-hidden"},"Previous")),l.a.createElement("button",{className:"carousel__arrow carousel__arrow_right",onClick:function(){return e.onArrowClick("next")}},l.a.createElement("span",{className:"visually-hidden"},"Next"))),r&&l.a.createElement("div",{className:"carousel__bullets"},this.renderBullets()))}},{key:"nextIndex",get:function(){var e=this.state,t=e.slidesCount,a=e.currentSlide;return a+1>t-1?0:a+1}},{key:"prevIndex",get:function(){var e=this.state,t=e.slidesCount,a=e.currentSlide;return a-1<0?t-1:a-1}}]),t}(l.a.PureComponent);f.defaultProps={bullets:!1,arrows:!1,autoplay:0};var E=function(e){var t=e.className,a=void 0===t?"":t;return l.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",className:"icon ".concat(a||""),xmlnsXlink:"http://www.w3.org/1999/xlink"},l.a.createElement("path",{d:"M16.7926 4.7026C15.9878 3.32367 14.8961 2.23197 13.5173 1.42725C12.1383 0.622491 10.6328 0.220215 8.99986 0.220215C7.36707 0.220215 5.8611 0.622615 4.48238 1.42725C3.10345 2.23193 2.01183 3.32367 1.20703 4.7026C0.402359 6.08148 0 7.58724 0 9.21982C0 11.1809 0.57216 12.9444 1.71677 14.5107C2.86125 16.0771 4.33975 17.161 6.15215 17.7625C6.36312 17.8017 6.51929 17.7741 6.62084 17.6806C6.72242 17.5869 6.77315 17.4696 6.77315 17.3292C6.77315 17.3057 6.77114 17.0949 6.76724 16.6964C6.76322 16.2979 6.76133 15.9503 6.76133 15.6536L6.49179 15.7002C6.31994 15.7317 6.10314 15.7451 5.8414 15.7413C5.57979 15.7376 5.3082 15.7102 5.027 15.6592C4.74568 15.6087 4.48402 15.4915 4.24182 15.3079C3.99974 15.1244 3.82789 14.884 3.7263 14.5874L3.60912 14.3177C3.53101 14.1382 3.40804 13.9387 3.24005 13.7201C3.07205 13.5013 2.90217 13.353 2.73032 13.2749L2.64827 13.2162C2.5936 13.1771 2.54287 13.13 2.49595 13.0754C2.44908 13.0208 2.41399 12.9661 2.39055 12.9114C2.36707 12.8566 2.38653 12.8116 2.44912 12.7764C2.51171 12.7411 2.62483 12.724 2.78897 12.724L3.02325 12.759C3.17951 12.7903 3.37279 12.8839 3.60333 13.0402C3.83376 13.1964 4.02318 13.3995 4.17163 13.6494C4.35141 13.9698 4.568 14.2139 4.82202 14.3819C5.07584 14.5499 5.33176 14.6337 5.58951 14.6337C5.84727 14.6337 6.0699 14.6142 6.25747 14.5753C6.44484 14.5363 6.62063 14.4775 6.78477 14.3995C6.85508 13.8758 7.04651 13.4735 7.3589 13.1924C6.91365 13.1456 6.51334 13.0751 6.15777 12.9814C5.80241 12.8876 5.43519 12.7353 5.05635 12.5241C4.6773 12.3133 4.36286 12.0515 4.11294 11.7391C3.86298 11.4266 3.65784 11.0163 3.49781 10.5087C3.33769 10.0008 3.25761 9.41491 3.25761 8.75089C3.25761 7.80543 3.56627 7.00088 4.18345 6.33678C3.89434 5.62597 3.92163 4.82914 4.26542 3.94635C4.49199 3.87596 4.82798 3.92879 5.27323 4.1045C5.71856 4.28029 6.04461 4.43088 6.25172 4.55574C6.45884 4.68056 6.62478 4.78633 6.7498 4.87211C7.47649 4.66906 8.22641 4.56752 8.99977 4.56752C9.77313 4.56752 10.5232 4.66906 11.25 4.87211L11.6952 4.591C11.9998 4.40342 12.3593 4.23153 12.7732 4.07527C13.1872 3.9191 13.5038 3.87608 13.7227 3.94648C14.0741 4.8293 14.1054 5.6261 13.8162 6.3369C14.4334 7.001 14.7421 7.80576 14.7421 8.75101C14.7421 9.41503 14.6618 10.0027 14.5019 10.5145C14.3418 11.0264 14.1349 11.4363 13.8811 11.745C13.627 12.0537 13.3105 12.3135 12.9317 12.5243C12.5528 12.7352 12.1854 12.8875 11.8301 12.9813C11.4745 13.0752 11.0742 13.1457 10.629 13.1926C11.0351 13.544 11.2382 14.0987 11.2382 14.8565V17.3289C11.2382 17.4693 11.287 17.5866 11.3848 17.6803C11.4824 17.7738 11.6366 17.8014 11.8476 17.7622C13.6602 17.1607 15.1387 16.0768 16.2832 14.5104C17.4275 12.9441 17.9999 11.1806 17.9999 9.21949C17.9995 7.58712 17.5969 6.08148 16.7926 4.7026Z"}))};a(33);var v=function(e){switch(e.name){case"octocat":return l.a.createElement(E,e);default:return}},C=a(3),g=a(2),_=a(1),b=a.n(_),y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return e.trim().split(t).map((function(e){return e.trim()})).filter((function(e){return""!==e}))},N=(a(34),function(e){var t,a=e.theme,n=e.size,r=e.className,o=e.type,s=e.children,c=e.color,i=e.baseClassName,u=e.block,m=e.icon,d=e.to,h=Object(g.a)(e,["theme","size","className","type","children","color","baseClassName","block","icon","to"]),p=d&&d.length>0,f=p?"a":"button",E=b()(i,(t={},Object(C.a)(t,"".concat(i,"_color_").concat(c),c),Object(C.a)(t,"".concat(i,"_size_").concat(n),n),Object(C.a)(t,"".concat(i,"_block"),u),Object(C.a)(t,"".concat(i,"_icon"),m),Object(C.a)(t,"".concat(i,"_disabled"),h.disabled),t),function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"theme",n=Array.isArray(t)?t:y(t);return n.map((function(t){return"".concat(e,"_").concat(a,"_").concat(t)}))}(i,a),r);return l.a.createElement(f,Object.assign({},h,{href:d,type:p?void 0:o,className:E}),s)});N.defaultProps={theme:"default",type:"button",size:"medium",baseClassName:"button",disabled:!1,block:!1,to:void 0};var w=N;a(35);function k(e){var t=e.children,a=e.fluid,n=e.className,r=Object(g.a)(e,["children","fluid","className"]);return l.a.createElement("div",Object.assign({className:b()("container",n,{container_fluid:a})},r),t)}k.defaultProps={fluid:!1};var x=k;a(36);var O=function(e){return l.a.createElement("header",Object.assign({className:"header"},e),l.a.createElement(x,{className:"header__container"},l.a.createElement("h1",{className:"header__title"},"React Carousel"),l.a.createElement("div",{className:"header__description"},"A lightweight, slider and carousel, for React.js"),l.a.createElement("div",{className:"header__buttons"},l.a.createElement(w,{to:"#get-started",theme:"solid rounded",color:"indigo"},"Get started"),l.a.createElement(w,{to:"https://github.com/zoxon/react-carousel",target:"_blank",rel:"nofollow noopener",theme:"outlined rounded",color:"black",icon:!0},l.a.createElement(v,{name:"octocat"}),l.a.createElement("span",null,"Visit Github")))))};a(37);var S=function(e){return l.a.createElement("footer",{className:"footer"},l.a.createElement(x,null,l.a.createElement("div",{className:"footer__copyright"},"\xa9\xa0",(new Date).getFullYear()," Velichko Konstantin")))};a(38);var j=function(e){var t=e.className,a=e.author,n=e.title,r=e.image,o=Object(g.a)(e,["className","author","title","image"]);return l.a.createElement("div",Object.assign({className:b()("carousel-slide",t)},o),l.a.createElement("img",{className:"carousel-slide__image",src:r,alt:"".concat(n," (Author ").concat(a,")")}),l.a.createElement("div",{className:"carousel-slide__overlay"},l.a.createElement("div",{className:"carousel-slide__author"},a),l.a.createElement("div",{className:"carousel-slide__title"},n)))},z=(a(39),a(40),a(41),{arrows:!0,bullets:!0,autoplay:3e3}),A=[{image:a(42),title:"North shore",author:"\u7fd4\u97f3"},{image:a(43),title:"Orange clouds over mountains",author:"Nitish Meena"},{image:a(44),title:"Icy blue mountain range",author:"Elena Prokofyeva"},{image:a(45),title:"Blue lake and green shore",author:"Andreas G\xfccklhorn"}];var I=function(e){return l.a.createElement("div",{className:"home-page"},l.a.createElement(O,{className:"home-page__header"}),l.a.createElement("main",{className:"home-page__body"},l.a.createElement(f,z,A.map((function(e){return l.a.createElement(j,e)}))),l.a.createElement(x,{className:"home-page__text"},l.a.createElement("section",null,l.a.createElement("h2",{id:"get-started"},"Installation"),l.a.createElement("h3",null,"Download"),l.a.createElement("p",null,"Download latest files from the Github:",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/zoxon/react-carousel/archive/master.zip",target:"_blank",rel:"noopener noreferrer"},"Download latest release"))),l.a.createElement("section",null,l.a.createElement("h2",null,"Initialization"),l.a.createElement("pre",{className:"code"},l.a.createElement("code",{className:"code__container"},'import React from "react";\nimport ReactDOM from "react-dom";\nimport Carousel from "components/Carousel";\n\nimport "components/Carousel/styles/core.css";\nimport "components/Carousel/styles/theme/theme.default.css";\n\nfunction App(props) {\n  return (\n    <Carousel arrows bullets autoplay={3000}>\n      <img src="/images/slide1.jpg" alt="Slide 1" />\n      <img src="/images/slide2.jpg" alt="Slide 2" />\n      <img src="/images/slide3.jpg" alt="Slide 3" />\n    </Carousel>\n  );\n}\n\nReactDOM.render(<App />, appElement);'))),l.a.createElement("section",null,l.a.createElement("h2",null,"Props"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Prop"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"children"),l.a.createElement("td",null,"Node"),l.a.createElement("td",null,"Required"),l.a.createElement("td",null,"Slides, is required prop")),l.a.createElement("tr",null,l.a.createElement("td",null,"arrows"),l.a.createElement("td",null,"Boolean"),l.a.createElement("td",null,"false"),l.a.createElement("td",null,"Toggle arrows visibility")),l.a.createElement("tr",null,l.a.createElement("td",null,"bullets"),l.a.createElement("td",null,"Boolean"),l.a.createElement("td",null,"false"),l.a.createElement("td",null,"Toggle bullets visibility")),l.a.createElement("tr",null,l.a.createElement("td",null,"autoplay"),l.a.createElement("td",null,"Number"),l.a.createElement("td",null,"0"),l.a.createElement("td",null,"Autoplay interval in milliseconds"))))))),l.a.createElement(S,{className:"home-page__footer"}))};var P=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[16,1,2]]]);
//# sourceMappingURL=main.e64a9e58.chunk.js.map