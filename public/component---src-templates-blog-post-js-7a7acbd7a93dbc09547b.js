(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{234:function(e,t,A){"use strict";A.r(t);var a=A(0),n=A.n(a),r=A(224),i=A.n(r),o=A(226),s=A(113);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,A;function a(t){var A;return(A=e.call(this,t)||this).state={shareLinks:[{url:"https://www.facebook.com/sharer/sharer.php?u="+A.props.url,type:"fab",website:"facebook-f"},{url:"https://twitter.com/home?status="+A.props.url,type:"fab",website:"twitter"},{url:"https://www.linkedin.com/shareArticle?mini=true&url="+A.props.url,type:"fab",website:"linkedin"},{url:"https://pinterest.com/pin/create/button/?url="+A.props.url+"&media="+A.props.image+"&description="+A.props.title,type:"fab",website:"pinterest"},{url:"mailto:?&body=Check%20this%20article%20out!%0A%0A"+A.props.url,type:"fas",website:"envelope"}]},A.openWindow=A.openWindow.bind(c(A)),A.socialScroll=A.socialScroll.bind(c(A)),A}A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A;var r=a.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.socialScroll)},r.componentWillUnmount=function(){window.addEventListener("scroll",this.socialScroll)},r.socialScroll=function(e){var t=window.pageYOffset,A=t+window.innerHeight,a=document.querySelector("#post-content");if(document.body.contains(a)){var n=document.querySelector("#post-content").offsetTop+550,r=document.querySelector("footer.footer").offsetTop-200,i=document.querySelector("#socialShare");t>n&&A<r?i.classList.add("is-shareable"):i.classList.remove("is-shareable")}},r.openWindow=function(e){return window.open(e,"popup","width=600,height=600"),!1},r.render=function(){return n.a.createElement("div",{id:"socialShare",style:{visibility:"hidden"}},n.a.createElement("div",{className:"columns is-mobile"},this.state.shareLinks.map((function(e){return n.a.createElement("a",{key:e.website,className:"column button is-"+e.website,href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(s.a,{icon:[e.type,e.website],size:"2x"}))}))))},a}(a.Component),u=A(225),d=A(236),m=A(245);A.d(t,"query",(function(){return f}));var p=function(e){var t,A;function a(){return e.apply(this,arguments)||this}return A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,a.prototype.render=function(){var e=this.props.data.markdownRemark;return n.a.createElement(o.a,{location:"blog",slug:e.fields.slug},n.a.createElement(u.a,{title:e.frontmatter.title,description:e.frontmatter.description,keywords:e.frontmatter.keywords,url:e.fields.slug,image:e.frontmatter.featured_image.childImageSharp.sizes.src}),n.a.createElement("div",{id:"blog-post",itemScope:!0,itemType:"http://schema.org/TechArticle"},n.a.createElement("section",{className:"hero is-large"},n.a.createElement(i.a,{sizes:e.frontmatter.featured_image.childImageSharp.sizes,alt:e.frontmatter.title})),n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"is-size-1",itemProp:"title"},e.frontmatter.title),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-narrow"},n.a.createElement("p",{className:"is-size-5"},e.frontmatter.date))),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("div",{id:"post-content",dangerouslySetInnerHTML:{__html:e.html}})),n.a.createElement(l,{url:"https://www.iamtimsmith.com/"+e.fields.slug,image:"https://www.iamtimsmith.com/"+e.frontmatter.featured_image.childImageSharp.sizes.src,title:e.frontmatter.title})),n.a.createElement(m.a,{currentPost:e.fields.slug})),n.a.createElement(d.a,null),n.a.createElement(d.b,null))},a}(a.Component),f=(t.default=p,"2557417760")},235:function(e,t,A){"use strict";var a=A(0),n=A.n(a),r=A(17),i=A(224),o=A.n(i);t.a=function(e){var t=e.description,A=void 0===t?"":t,a=e.path,i=e.thumb,s=e.title,c=e.tags,l=e.className,u=void 0===l?"post-card":l;return n.a.createElement(r.Link,{to:a,className:u},n.a.createElement("article",{className:u+"__container"},n.a.createElement("div",{className:u+"__image"},n.a.createElement(o.a,{sizes:i})),n.a.createElement("div",{className:u+"__content"},n.a.createElement("h4",{className:u+"__title"},s),n.a.createElement("div",{className:u+"__description"},A),c.map((function(e){return n.a.createElement("span",{className:u+"__tag",key:e},e)})))))}},236:function(e,t,A){"use strict";A.d(t,"b",(function(){return l})),A.d(t,"a",(function(){return u}));A(154),A(155),A(14),A(10),A(5),A(237),A(44);var a=A(0),n=A.n(a),r=A(239),i=A.n(r),o=A(113);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l=function(e){function t(t){var A;return(A=e.call(this,t)||this).state={email:"",response:{}},A.onSubmit=A.onSubmit.bind(s(A)),A.onChange=A.onChange.bind(s(A)),A}c(t,e);var A=t.prototype;return A.onChange=function(e){var t;this.setState(((t={})[e.target.name]=e.target.value,t))},A.onSubmit=function(e){var t=this;e.preventDefault(),i()(this.state.email).then((function(e){t.setState({response:e}),document.querySelector(".is-mailchimp form").reset()})).catch((function(){}))},A.render=function(){var e=this;return n.a.createElement("section",{className:"mailchimp"},n.a.createElement("div",{className:"mailchimp__container"},n.a.createElement("p",{className:"mailchimp__title"},"Sign up to get the newest blog posts delivered to you!"),n.a.createElement("form",{className:"mailchimp__form-"+(0===Object.entries(this.state.response).length&&this.state.response.constructor===Object?"unsubmitted":"submitted")},n.a.createElement("div",{className:"mailchimp__fields"},n.a.createElement("p",{className:"mailchimp__message"},this.state.response.msg),n.a.createElement("input",{className:"mailchimp__input",type:"text",name:"email",placeholder:"kevin.malone@dundermifflin.com",onChange:this.onChange}),n.a.createElement("button",{className:"mailchimp__button",onClick:function(t){return e.onSubmit(t)}},"Submit")))))},t}(a.Component),u=function(e){function t(t){var A;return(A=e.call(this,t)||this).state={email:"",response:{},showing:!1},A.onSubmit=A.onSubmit.bind(s(A)),A.onChange=A.onChange.bind(s(A)),A.closeModal=A.closeModal.bind(s(A)),A}c(t,e);var A=t.prototype;return A.componentDidMount=function(){var e=this;setTimeout((function(){document.cookie.includes("signedup")||e.setState({showing:!0})}),5e3)},A.onChange=function(e){var t;this.setState(((t={})[e.target.name]=e.target.value,t))},A.closeModal=function(e,t){if(void 0===t&&(t=!1),e.preventDefault(),document.querySelector("html").classList.remove("is-clipped"),t){var A=new Date,a=new Date;a.setDate(A.getDate()+30),document.cookie="signedup=yep; expires="+a+"; path=/"}this.setState({showing:!1})},A.onSubmit=function(e){var t=this;e.preventDefault(),i()(this.state.email).then((function(e){if(t.setState({response:e}),document.querySelector(".is-mailchimp form").reset(),"error"!==e.result){var A=new Date,a=new Date;a.setDate(A.getDate()+1e3),document.cookie="signedup=yep; expires="+a+"; path=/",document.querySelector("html").classList.remove("is-clipped"),setTimeout((function(){t.setState({showing:!1})}),2e3)}})).catch((function(){}))},A.render=function(){var e=this,t=this.state.showing;return n.a.createElement("div",{className:"mailchimp-popup"+(t?"-active":"")},n.a.createElement("button",{className:"mailchimp-popup__close",onClick:function(t){return e.closeModal(t,!0)}},n.a.createElement(o.a,{icon:["fas","slash"]}),n.a.createElement(o.a,{icon:["fas","slash"]})),n.a.createElement("div",{className:"mailchimp-popup__container"},n.a.createElement("p",{className:"mailchimp-popup__title"},"Sign up to get the newest blog posts delivered to you!"),n.a.createElement("form",{className:"mailchimp-popup__form"},n.a.createElement("input",{type:"email",className:"mailchimp-popup__email",name:"email",placeholder:"kevin.malone@dundermifflin.com",onChange:this.onChange}),n.a.createElement("button",{className:"mailchimp-popup__button",onClick:function(t){return e.onSubmit(t)}},"Submit"),n.a.createElement("p",{className:"mailchimp-popup__cancel",onClick:function(t){return e.closeModal(t,!0)}},"No thanks, I'll keep checking back."))))},t}(a.Component)},237:function(e,t,A){var a=A(2),n=A(238)(!0);a(a.S,"Object",{entries:function(e){return n(e)}})},238:function(e,t,A){var a=A(13),n=A(45),r=A(46),i=A(66).f;e.exports=function(e){return function(t){for(var A,o=r(t),s=n(o),c=s.length,l=0,u=[];c>l;)A=s[l++],a&&!i.call(o,A)||u.push(e?[A,o[A]]:o[A]);return u}}},239:function(e,t,A){"use strict";A(12),A(47),A(5),Object.defineProperty(t,"__esModule",{value:!0});var a,n=A(240),r=(a=n)&&a.__esModule?a:{default:a},i=A(244);var o=function(e){return new Promise((function(t,A){return(0,r.default)(e,{param:"c",timeout:3500},(function(e,a){e&&A(e),a&&t(a)}))}))},s=function(e){var t="";for(var A in e)if(Object.prototype.hasOwnProperty.call(e,A)){var a=A.substring(0,6)?A:A.toUpperCase();t=t.concat("&"+a+"="+e[A])}return t};t.default=function(e,t,A){var a=(0,i.validate)(e),n=encodeURIComponent(e);if(!a)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var r="https://iamtimsmith.us16.list-manage.com/subscribe/post?u=a07cf4738b9ea78d4718b8f8a&amp;id=845beac7c2";arguments.length<3&&"string"==typeof t?r=t:"string"==typeof A&&(r=A),r=r.replace(/\/post/g,"/post-json");var c="&EMAIL="+n+s(t),l=""+r+c;return o(l)}},240:function(e,t,A){A(12),A(18),A(44);var a=A(241)("jsonp");e.exports=function(e,t,A){"function"==typeof t&&(A=t,t={});t||(t={});var i,o,s=t.prefix||"__jp",c=t.name||s+n++,l=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head;u&&(o=setTimeout((function(){p(),A&&A(new Error("Timeout"))}),u));function p(){i.parentNode&&i.parentNode.removeChild(i),window[c]=r,o&&clearTimeout(o)}return window[c]=function(e){a("jsonp got",e),p(),A&&A(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+d(c)).replace("?&","?"),a('jsonp req "%s"',e),(i=document.createElement("script")).src=e,m.parentNode.insertBefore(i,m),function(){window[c]&&p()}};var n=0;function r(){}},241:function(e,t,A){(function(a){function n(){var e;try{e=t.storage.debug}catch(A){}return!e&&void 0!==a&&"env"in a&&(e={}.DEBUG),e}A(12),A(85),A(86),(t=e.exports=A(242)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var A=this.useColors;if(e[0]=(A?"%c":"")+this.namespace+(A?" %c":" ")+e[0]+(A?"%c ":" ")+"+"+t.humanize(this.diff),!A)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var n=0,r=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(n++,"%c"===e&&(r=n))})),e.splice(r,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(A){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(n())}).call(this,A(156))},242:function(e,t,A){var a;function n(e){function A(){if(A.enabled){var e=A,n=+new Date,r=n-(a||n);e.diff=r,e.prev=a,e.curr=n,a=n;for(var i=new Array(arguments.length),o=0;o<i.length;o++)i[o]=arguments[o];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(A,a){if("%%"===A)return A;s++;var n=t.formatters[a];if("function"==typeof n){var r=i[s];A=n.call(e,r),i.splice(s,1),s--}return A})),t.formatArgs.call(e,i),(A.log||t.log||console.log.bind(console)).apply(e,i)}}return A.namespace=e,A.enabled=t.enabled(e),A.useColors=t.useColors(),A.color=function(e){var A,a=0;for(A in e)a=(a<<5)-a+e.charCodeAt(A),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(A),A}A(85),A(28),A(54),A(12),(t=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var A=("string"==typeof e?e:"").split(/[\s,]+/),a=A.length,n=0;n<a;n++)A[n]&&("-"===(e=A[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var A,a;for(A=0,a=t.skips.length;A<a;A++)if(t.skips[A].test(e))return!1;for(A=0,a=t.names.length;A<a;A++)if(t.names[A].test(e))return!0;return!1},t.humanize=A(243),t.names=[],t.skips=[],t.formatters={}},243:function(e,t){var A=1e3,a=60*A,n=60*a,r=24*n,i=365.25*r;function o(e,t,A){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+A:Math.ceil(e/t)+" "+A+"s"}e.exports=function(e,t){t=t||{};var s,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var o=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return o*i;case"days":case"day":case"d":return o*r;case"hours":case"hour":case"hrs":case"hr":case"h":return o*n;case"minutes":case"minute":case"mins":case"min":case"m":return o*a;case"seconds":case"second":case"secs":case"sec":case"s":return o*A;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?o(s=e,r,"day")||o(s,n,"hour")||o(s,a,"minute")||o(s,A,"second")||s+" ms":function(e){if(e>=r)return Math.round(e/r)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=a)return Math.round(e/a)+"m";if(e>=A)return Math.round(e/A)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},244:function(e,t,A){"use strict";A(87),A(28);var a=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!a.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},245:function(e,t,A){"use strict";A(28);var a=A(246),n=A(0),r=A.n(n),i=A(17),o=A(235);t.a=function(e){var t=e.currentPost,A=void 0===t?"":t;return r.a.createElement(i.StaticQuery,{query:"2702931158",render:function(e){var t=e.allMarkdownRemark.edges.filter((function(e){return e.node.fields.slug!==A}));return t.length>3&&t.pop(),r.a.createElement("div",{className:"container recent-posts"},r.a.createElement("p",{className:"recent-posts__title"},"More Posts"),r.a.createElement("div",{className:"recent-posts__posts"},t.map((function(e){var t=e.node;return r.a.createElement(o.a,{path:t.fields.slug,thumb:t.frontmatter.featured_image.childImageSharp.sizes,title:t.frontmatter.title,description:t.frontmatter.description,tags:t.frontmatter.tags.split(" "),key:t.fields.slug})}))))},data:a})}},246:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"Using the Pug Templating Engine  Part 2 - Logic","featured_image":{"childImageSharp":{"sizes":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAED/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIE/9oADAMBAAIQAxAAAAHXOy8ZSf/EABcQAQEBAQAAAAAAAAAAAAAAABEBEAD/2gAIAQEAAQUCOY5Y5//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8BE3s3/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAgMBAAAAAAAAAAAAAAAAECEAASJR/9oACAEBAAY/AppV0sf/xAAaEAACAwEBAAAAAAAAAAAAAAABEQAQIXGh/9oACAEBAAE/Ie4jTwQFvDQAQMV//9oADAMBAAIAAwAAABBvH//EABcRAQADAAAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8QLYWRC4ZP/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAhMf/aAAgBAgEBPxBFMY5t/8QAHBABAQACAgMAAAAAAAAAAAAAAREAITFRQZHB/9oACAEBAAE/EHXjxd6+5WIxtFrrKIAHSkp4cr2+8hhyRwAACBoM/9k=","aspectRatio":1.5,"src":"/static/d45696bb97cea13eebedc4ae9c963d1b/8539d/featured_image.jpg","srcSet":"/static/d45696bb97cea13eebedc4ae9c963d1b/954df/featured_image.jpg 100w,\\n/static/d45696bb97cea13eebedc4ae9c963d1b/d278e/featured_image.jpg 200w,\\n/static/d45696bb97cea13eebedc4ae9c963d1b/8539d/featured_image.jpg 400w,\\n/static/d45696bb97cea13eebedc4ae9c963d1b/775d9/featured_image.jpg 600w,\\n/static/d45696bb97cea13eebedc4ae9c963d1b/bc3a8/featured_image.jpg 800w,\\n/static/d45696bb97cea13eebedc4ae9c963d1b/14dee/featured_image.jpg 1920w","sizes":"(max-width: 400px) 100vw, 400px"}}},"description":"Today I\'m going to show you how you can use variables and logic in your templates to make them dynamic and flexible to allow you to display data however you need.","tags":"#misc"},"fields":{"slug":"/blog/using-the-pug-templating-engine-part-2-logic/"}}},{"node":{"frontmatter":{"title":"Using the Pug Templating Engine  Part 1 - Markup","featured_image":{"childImageSharp":{"sizes":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwAB/9oADAMBAAIQAxAAAAE6ETqNb//EABcQAQEBAQAAAAAAAAAAAAAAAAERABD/2gAIAQEAAQUCJguSad//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAABBQAAAAAAAAAAAAAAAAABESAhUWH/2gAIAQEABj8CkpWu/8QAGhAAAwEAAwAAAAAAAAAAAAAAAAERMRAhQf/aAAgBAQABPyHo0eIJLhRo0bTazin/2gAMAwEAAgADAAAAEOwv/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Qp//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQADAQEBAQAAAAAAAAAAAAEAETEhgUFx/9oACAEBAAE/ELVe6it8exr3NdHRlIKbLyBgXC/IKYvYp1X9Z//Z","aspectRatio":1.5,"src":"/static/b6795a6b5a51bea06da29d612fe43148/8539d/featured_image.jpg","srcSet":"/static/b6795a6b5a51bea06da29d612fe43148/954df/featured_image.jpg 100w,\\n/static/b6795a6b5a51bea06da29d612fe43148/d278e/featured_image.jpg 200w,\\n/static/b6795a6b5a51bea06da29d612fe43148/8539d/featured_image.jpg 400w,\\n/static/b6795a6b5a51bea06da29d612fe43148/775d9/featured_image.jpg 600w,\\n/static/b6795a6b5a51bea06da29d612fe43148/bc3a8/featured_image.jpg 800w,\\n/static/b6795a6b5a51bea06da29d612fe43148/14dee/featured_image.jpg 1920w","sizes":"(max-width: 400px) 100vw, 400px"}}},"description":"If you’re about to launch a web-based project, whether it’s for a small or large business, the following are the team members you simply can’t do without.","tags":"#misc"},"fields":{"slug":"/blog/using-the-pug-templating-engine-part-1-markup/"}}},{"node":{"frontmatter":{"title":"How to Keep and Even Grow Your Client Base Despite the Pandemic","featured_image":{"childImageSharp":{"sizes":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABvrWWViI3/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAECEQMx/9oACAEBAAEFAuqqZ15oxeH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAACAwEAAAAAAAAAAAAAAAAAMREgIaH/2gAIAQEABj8CzghRT//EABwQAQACAQUAAAAAAAAAAAAAAAEAETEQIVFxof/aAAgBAQABPyEPye0Mj1G+RBGrL0l3n//aAAwDAQACAAMAAAAQr8//xAAWEQEBAQAAAAAAAAAAAAAAAAABECH/2gAIAQMBAT8QTJ//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxAn/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFBUWH/2gAIAQEAAT8Qc04hXptb5iEWRDuzWvkR2p4NypEL0lzBVijkTpn/2Q==","aspectRatio":2.101997896950578,"src":"/static/e404b825f623cb66de048b1af0df8d0c/8539d/featured_image.jpg","srcSet":"/static/e404b825f623cb66de048b1af0df8d0c/954df/featured_image.jpg 100w,\\n/static/e404b825f623cb66de048b1af0df8d0c/d278e/featured_image.jpg 200w,\\n/static/e404b825f623cb66de048b1af0df8d0c/8539d/featured_image.jpg 400w,\\n/static/e404b825f623cb66de048b1af0df8d0c/775d9/featured_image.jpg 600w,\\n/static/e404b825f623cb66de048b1af0df8d0c/bc3a8/featured_image.jpg 800w,\\n/static/e404b825f623cb66de048b1af0df8d0c/61000/featured_image.jpg 1999w","sizes":"(max-width: 400px) 100vw, 400px"}}},"description":"If you’re about to launch a web-based project, whether it’s for a small or large business, the following are the team members you simply can’t do without.","tags":"#misc"},"fields":{"slug":"/blog/keep-and-grow-client-base-during-pandemic/"}}},{"node":{"frontmatter":{"title":"Using MongoDB with an Express.js Application","featured_image":{"childImageSharp":{"sizes":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHrRuqVD//EABoQAAICAwAAAAAAAAAAAAAAAAECABAREhP/2gAIAQEAAQUCLYbqIp2F/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAABBQAAAAAAAAAAAAAAAAARAAEgMUH/2gAIAQEABj8CAxU8f//EABkQAQACAwAAAAAAAAAAAAAAAAEQIREgMf/aAAgBAQABPyHoS2qAHIaf/9oADAMBAAIAAwAAABCQz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEAAgMBAAAAAAAAAAAAAAERACEQcaHR/9oACAEBAAE/EBGgR6MmDvrD7jI0Bm8m7z//2Q==","aspectRatio":1.5,"src":"/static/6e8f4d19d781f30255986aad701a6970/8539d/featured_image.jpg","srcSet":"/static/6e8f4d19d781f30255986aad701a6970/954df/featured_image.jpg 100w,\\n/static/6e8f4d19d781f30255986aad701a6970/d278e/featured_image.jpg 200w,\\n/static/6e8f4d19d781f30255986aad701a6970/8539d/featured_image.jpg 400w,\\n/static/6e8f4d19d781f30255986aad701a6970/775d9/featured_image.jpg 600w,\\n/static/6e8f4d19d781f30255986aad701a6970/bc3a8/featured_image.jpg 800w,\\n/static/6e8f4d19d781f30255986aad701a6970/14dee/featured_image.jpg 1920w","sizes":"(max-width: 400px) 100vw, 400px"}}},"description":"MongoDB is a nosql database that is growing in popularity. In this post, I\'ll show you how you can use it in your next Express application.","tags":"#express #mongodb"},"fields":{"slug":"/blog/using-mongodb-with-express-js/"}}}]}}}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7a7acbd7a93dbc09547b.js.map