(this["webpackJsonpthe-shoppies-movie-nomination-app"]=this["webpackJsonpthe-shoppies-movie-nomination-app"]||[]).push([[0],{17:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(9),c=n.n(s),o=(n(17),n(12)),r=n(7),m=n.n(r),l=n(10),d=n(5),u=n(11),j=n(0),h=function(e){var t=e.nominationComponent;if(e)return Object(j.jsx)(j.Fragment,{children:e.movies&&e.movies.map((function(n,a){return Object(j.jsx)("div",{className:"movie-container d-flex flex-column justify-content-start m-3",children:Object(j.jsxs)("div",{className:"image-container",children:[Object(j.jsx)("div",{onClick:function(){return e.handleNominationsClick(n)},className:"overlay d-flex align-items-center justify-content-center",children:Object(j.jsx)(t,{})}),Object(j.jsx)("img",{src:n.Poster,onerror:"this.onerror=null; this.src='No-Image-Placeholder.png'"}),Object(j.jsxs)("div",{className:"text-container",children:[Object(j.jsx)("h3",{className:"title-header",children:n.Title}),Object(j.jsx)("h4",{className:"year-text",children:n.Year})]})]})})}))})},f=function(e){return Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("h1",{children:e.heading})})},p=function(e){return Object(j.jsx)("div",{className:"col col-sm-4",children:Object(j.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to Search..."})})},b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:"mr-2",children:"Nominate"})})},O=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:"mr-2",children:"Remove Nomination"})})},x=(n(20),n(2)),v=n.n(x),g=(n(37),n(38),n(39),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)([]),c=Object(d.a)(s,2),r=c[0],g=c[1],N=Object(a.useState)(""),_=Object(d.a)(N,2),y=_[0],S=_[1],I=function(){var e=Object(l.a)(m.a.mark((function e(t){var n,a,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.omdbapi.com/?s=".concat(t,"&apikey=395f83a4"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:(s=e.sent).Search&&i(s.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){I(y)}),[y]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("the-shoppies-app-nominations"));g(e)}),[]);var w=function(e){localStorage.setItem("the-shoppies-app-nominations",JSON.stringify(e))};return Object(j.jsxs)("div",{className:"container-fluid the-shoppies-app",children:[Object(j.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(j.jsx)(f,{heading:"Movies"}),Object(j.jsx)(p,{searchValue:y,setSearchValue:S})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(h,{movies:n,handleNominationsClick:function(e){if(r||Object(u.a)("nominations"),r&&r.includes(e))x.store.addNotification({title:"Already Nominated",message:"Sorry, you already nominated this movie. ",type:"warning",container:"top-right",insert:"top",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:2500}});else if(r&&r.length>=5)x.store.addNotification({title:"Limit Reached!",message:"Please remove a movie from your nominations list first. ",type:"danger",container:"top-right",insert:"top",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:2500}});else{var t=[].concat(Object(o.a)(r),[e]);g(t),w(t),x.store.addNotification({title:"Successfully added!",message:"This movie has been added to your Nominations list. ",type:"success",container:"top-right",insert:"top",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:2500}})}},nominationComponent:b}),Object(j.jsx)(v.a,{})]}),Object(j.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(j.jsx)(f,{heading:"Nominations"})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(h,{movies:r,handleNominationsClick:function(e){var t=r.filter((function(t){return t.imdbID!==e.imdbID}));g(t),w(t)},nominationComponent:O})})]})}),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()}},[[40,1,2]]]);
//# sourceMappingURL=main.937f7c2a.chunk.js.map