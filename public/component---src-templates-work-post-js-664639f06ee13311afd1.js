(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{227:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return p}));a(154),a(155);var n=a(0),r=a.n(n),s=a(17),o=a(224),l=a.n(o),i=a(226),c=a(225);var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).workScroll=a.workScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){window.addEventListener("scroll",this.workScroll,!0)},o.componentWillUnmount=function(){window.removeEventListener("scroll",this.workScroll)},o.workScroll=function(e){var t=window.pageYOffset,a=document.querySelector(".section:nth-child(2)");document.body.contains(a)&&t>a.offsetTop-200&&a.classList.add("display")},o.render=function(){var e=this.props.data.markdownRemark,t=null!==this.props.pageContext.previous&&this.props.pageContext.previous.fields.slug.includes("/work/")?r.a.createElement(s.Link,{to:this.props.pageContext.previous.fields.slug,className:"is-size-5",id:"last"},"Last"):"",a=null!==this.props.pageContext.next&&this.props.pageContext.next.fields.slug.includes("/work/")?r.a.createElement(s.Link,{to:this.props.pageContext.next.fields.slug,className:"is-size-5",id:"next"},"Next"):"";return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:e.frontmatter.title,description:e.excerpt,keywords:e.frontmatter.keywords,url:e.fields.slug,image:e.frontmatter.thumbOne.childImageSharp.sizes.src}),r.a.createElement("div",{className:"container",id:"portfolioPage",onScroll:this.handleScroll},r.a.createElement("section",{className:"section has-text-centered"},r.a.createElement("h1",{className:"is-size-2 post-header"},e.frontmatter.title),r.a.createElement("span",{className:"line"}),r.a.createElement("p",{className:"is-size-5 post-tags"},e.frontmatter.tags),r.a.createElement("div",{id:"portContent",dangerouslySetInnerHTML:{__html:e.html}}),t,a),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"mouse",id:"mouse"},r.a.createElement("span",{className:"divide"}),r.a.createElement("span",{className:"wheel"})),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column",id:"img1"},r.a.createElement(l.a,{sizes:e.frontmatter.fullPage.childImageSharp.sizes,alt:e.frontmatter.title+" frontpage"})),r.a.createElement("div",{className:"column",id:"img2"},r.a.createElement(l.a,{sizes:e.frontmatter.thumbOne.childImageSharp.sizes,alt:e.frontmatter.title+" mockup one"}),r.a.createElement(l.a,{sizes:e.frontmatter.thumbTwo.childImageSharp.sizes,alt:e.frontmatter.title+" mockup two"}))),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("a",{href:e.frontmatter.url,className:"column button is-large is-one-third",target:"_blank",rel:"noopener noreferrer"},"Visit Site")))))},n}(n.Component);t.default=m;var p="1748367666"}}]);
//# sourceMappingURL=component---src-templates-work-post-js-664639f06ee13311afd1.js.map