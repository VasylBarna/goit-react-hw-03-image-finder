(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={image:"ImageGalleryItem_image__3wEzi"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__1-iTc",modal:"Modal_modal__3eSm2"}},14:function(e,t,a){e.exports={container:"Container_container__12DbF"}},16:function(e,t,a){e.exports={button:"Button_button__1HDkZ"}},17:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__fop3M",imageGalleryItem:"ImageGallery_imageGalleryItem__3p_DV"}},24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),i=a.n(o),c=(a(23),a(24),a(3)),s=a(4),l=a(6),u=a(5),m=a(14),g=a.n(m),h=a(0),d=function(e){var t=e.children;return Object(h.jsx)("div",{className:g.a.container,children:t})},b=a(7),p=a.n(b),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e\u0447\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:p.a.searchbar,children:Object(h.jsxs)("form",{className:p.a.searchForm,onSubmit:this.handleSubmit,children:[Object(h.jsx)("button",{type:"submit",className:p.a.button,children:Object(h.jsx)("span",{className:p.a.label,children:"Search"})}),Object(h.jsx)("input",{className:p.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleChange})]})})}}]),a}(n.Component);f.defaultProps={imageName:""};var j=a(13),y=a(10),v=a.n(y),O=a(15),_=function(){function e(){Object(c.a)(this,e),this.query="",this.pageNumber=1,this.perPage=12}return Object(s.a)(e,[{key:"fetchImages",value:function(){var e=Object(O.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://pixabay.com","/api/?image_type=photo&orientation=horizontal&q=").concat(this.query,"&page=").concat(this.pageNumber,"&per_page=").concat(this.perPage,"&key=").concat("21930090-2f4bfee534669e28d6350f360"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,this.incrementPage(),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"incrementPage",value:function(){this.pageNumber+=1}},{key:"resetPage",value:function(){this.pageNumber=1}}]),e}(),x=a(2),w=a.n(x),k=a(11),C=a.n(k),N=function(e){var t=e.id,a=e.url,n=e.tags,r=e.largeImage,o=e.toggleModal,i=e.handleLargeImage;return Object(h.jsx)("li",{className:C.a.imageGallery,onClick:function(){return o(),void i(r)},children:Object(h.jsx)("img",{className:C.a.image,src:a,alt:n})},t)};N.propeType={id:w.a.number.isRequired,url:w.a.string.isRequired,tags:w.a.string.isRequired,largeImage:w.a.string.isRequired,toggleModal:w.a.func.isRequired,handleLargeImage:w.a.func.isRequired};var S=N,I=a(12),F=a.n(I),M=document.querySelector("#modal-root"),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).PropTypes={onClose:w.a.func.isRequired},e.handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClickBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(h.jsx)("div",{className:F.a.overlay,onClick:this.handleClickBackdrop,children:Object(h.jsx)("div",{className:F.a.modal,children:this.props.children})}),M)}}]),a}(n.Component),q=a(16),P=a.n(q),B=function(e){var t=e.onClick;return Object(h.jsx)("button",{className:P.a.button,type:"button",onClick:t,children:"Load more..."})},G=a(17),R=a.n(G),T=a(18),D=a.n(T),E=(a(47),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)(D.a,{type:"Bars",color:"#FF8C00",height:300,width:300,timeout:2e3})}}]),a}(n.Component)),U=new _,A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],showModal:!1,largeImage:"",error:null,loading:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleLargeImage=function(t){e.setState({largeImage:t})},e.handleBtnClick=function(){e.getImages()},e.getImages=function(){e.setState({loading:!0}),U.fetchImages().then((function(t){var a=t.hits;return e.setState((function(e){return{images:[].concat(Object(j.a)(e.images),Object(j.a)(a))}}))})).catch((function(t){e.setState({error:t})})).finally(e.setState({loading:!1}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.imageName,n=this.props.imageName;a!==n&&(this.setState({images:[]}),U.query=n,U.resetPage(),this.getImages()),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.showModal,n=t.loading,r=t.images,o=t.largeImage;return Object(h.jsxs)(h.Fragment,{children:[a&&Object(h.jsx)(L,{onClose:this.toggleModal,children:Object(h.jsx)("img",{src:o,alt:"images"})}),Object(h.jsx)("ul",{className:R.a.imageGallery,children:r.map((function(t){var a=t.id,n=t.webformatURL,r=t.tags,o=t.largeImageURL;return Object(h.jsx)(S,{url:n,tags:r,largeImage:o,toggleModal:e.toggleModal,handleLargeImage:e.handleLargeImage},a)}))}),r.length>0&&!n&&Object(h.jsx)(B,{onClick:this.handleBtnClick}),n&&Object(h.jsx)(E,{type:"Bars",color:"#FF8C00",height:300,width:300,timeout:1500})]})}}]),a}(n.Component),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(d,{children:[Object(h.jsx)(f,{onSubmit:this.handleFormSubmit}),Object(h.jsx)(A,{imageName:this.state.imageName})]})}}]),a}(n.Component),K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root")),K()},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__2hSHH",searchForm:"Searchbar_searchForm__38wnK",button:"Searchbar_button__1Ul5x",label:"Searchbar_label__DXJl6",input:"Searchbar_input__2poTW"}}},[[48,1,2]]]);
//# sourceMappingURL=main.04bb9dd0.chunk.js.map