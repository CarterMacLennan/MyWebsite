(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{241:function(e,a,t){},242:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),o=t(56),i=t.n(o),l=t(57),c=t(58),s=t(68),m=t(67);function d(){return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark"},r.a.createElement("div",{className:"navbar-collapse collapse"},r.a.createElement("ul",{className:"navbar-nav pull-left"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/MyWebsite/#/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/MyWebsite/#/Resume"},"Resume")))),r.a.createElement("span",{className:"navbar-text pull-right"},"2020-11-15"))}function u(e){function a(e,a){return r.a.createElement("button",{key:a,type:"button",className:"tag btn btn-sm btn-outline-"+e.color,disabled:!0},e.name)}return r.a.createElement("div",null,e.lang.map(a),r.a.createElement("br",null),e.lib.map(a),r.a.createElement("br",null),e.tool.map(a),r.a.createElement("br",null))}function p(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e.redirect.map((function(e,a){return r.a.createElement("div",{key:a,className:"col link"},r.a.createElement("a",{className:"btn btn-block btn-lg "+e.style,href:e.link,role:"button"},r.a.createElement("i",{className:e.name})))}))))}function g(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:e.project.information.image,className:"card-img-top mx-auto d-block proj-image",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement("strong",null,e.project.information.title)),r.a.createElement("p",{className:"card-subtitle mb-2 text-muted"},e.project.information.desc),r.a.createElement(u,{lang:e.project.languages,lib:e.project.libraries,tool:e.project.tools}),r.a.createElement(p,{redirect:e.project.redirects})))}var b=t(59),h=t.n(b),f=t(60),v=t.n(f),y=t(61),E=t.n(y),w=t(62),k=t.n(w),N=t(63),M=t.n(N),A=[{information:{title:"MERN Notes App",desc:"A note taking web app developed using the MERN Software Stack. Developed in tandem with my research on how JavaScript evolved from client-side to server-side.",image:k.a},languages:[{name:"MongoDB",color:"primary"},{name:"Node.js",color:"primary"},{name:"ES6",color:"primary"},{name:"CSS3",color:"primary"},{name:"HTML5",color:"primary"}],libraries:[{name:"React.js",color:"danger"},{name:"Mongoose",color:"danger"},{name:"Express.js",color:"danger"},{name:"Bootstrap",color:"danger"},{name:"Axios",color:"danger"},{name:"react-textarea-autosize",color:"danger"},{name:"Font Awesome",color:"danger"}],tools:[{name:"Git",color:"success"},{name:"Chrome Dev Tools",color:"success"},{name:"VSCode",color:"success"}],redirects:[{name:"fab fa-github",link:"https://github.com/CarterMacLennan/MERN-App",style:"btn-dark"}]},{information:{title:"My Personal Website",desc:"The responsive portfolio site that you're on right now.",image:h.a},languages:[{name:"Javascript",color:"primary"},{name:"CSS3",color:"primary"},{name:"HTML5",color:"primary"}],libraries:[{name:"React.js",color:"danger"},{name:"Bootstrap",color:"danger"},{name:"GitHub Pages",color:"danger"}],tools:[{name:"Chrome Dev Tools",color:"success"},{name:"VSCode",color:"success"},{name:"Git",color:"success"}],redirects:[{name:"fab fa-github",link:"https://github.com/CarterMacLennan/MyWebsite",style:"btn-dark"}]},{information:{title:"Lil Consistent Me",desc:"A Tamagotchi inspired consistency tracker for Android.",image:E.a},languages:[{name:"Java",color:"primary"},{name:"XML",color:"primary"}],libraries:[{name:"Android.apk",color:"danger"},{name:"MPAndroidChart API",color:"danger"}],tools:[{name:"Android Studio",color:"success"},{name:"Git",color:"success"}],redirects:[{name:"fab fa-github",link:"https://github.com/CarterMacLennan/LilConsistentMe",style:"btn-dark"},{name:"fab fa-google-play",link:"https://play.google.com/store/apps/details?id=com.myappproject.lilconsistentme",style:"btn-outline-dark"}]},{information:{title:"Campus Gym Analytics",desc:"A web application that allows the user to predict how crowded a campus gym will be. The result is calculated using multiple linear regression derived from a source on Kaggle.",image:M.a},languages:[{name:"Python",color:"primary"},{name:"HTML",color:"primary"}],libraries:[{name:"pandas",color:"danger"},{name:"numpy",color:"danger"},{name:"sklearn",color:"danger"},{name:"seaborn",color:"danger"},{name:"tornado",color:"danger"},{name:"os",color:"danger"},{name:"pickle",color:"danger"},{name:"matplotlib",color:"danger"}],tools:[{name:"Juniper",color:"success"},{name:"Git",color:"success"}],redirects:[{name:"fab fa-github",link:"https://github.com/CarterMacLennan/CampusGymAnalytics",style:"btn-dark"}]},{information:{title:"RunSmart",desc:"A privacy-respecting GPS tracker for outdoor fitness, developed in a group of three.",image:v.a},languages:[{name:"Java",color:"primary"},{name:"XML",color:"primary"}],libraries:[{name:"Android.apk",color:"danger"},{name:"MapBox API",color:"danger"}],tools:[{name:"Android Studio",color:"success"},{name:"Git",color:"success"}],redirects:[{name:"fab fa-github",link:"https://github.com/btmyles/RunSmart",style:"btn-dark"},{name:"fab fa-google-play",link:"https://play.google.com/store/apps/details?id=com.cs2063.runsmart",style:"btn-outline-dark"}]}];function C(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card-columns"},A.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(g,{project:e}))}))))}var j=t(64),S=t.n(j),x=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleResize=function(e){n.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight}),console.log(n.state.windowHeight)},n.state={windowWidth:window.innerWidth,windowHeight:window.innerHeight},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{style:{position:"absolute",width:"100%",height:"100%"}},r.a.createElement(C,null)),r.a.createElement("div",{style:{width:"100%",height:"100%",mardin:"0",padding:"0"}},r.a.createElement(S.a,{id:"tsparticles",width:this.state.windowWidth,height:this.state.windowHeight,options:{background:{color:{value:"#34495e"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}})))}}]),t}(r.a.Component),R=t(65),L=t.n(R);function H(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("iframe",{src:L.a,className:"resume"}," "))}var G=t(6);function W(){return r.a.createElement("main",null,r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",component:x,exact:!0}),r.a.createElement(G.a,{path:"/Resume",component:H})))}t(241);var z=t(32);i.a.render(r.a.createElement(z.a,null,r.a.createElement(W,null)),document.getElementById("root"))},59:function(e,a,t){e.exports=t.p+"static/media/profile.5618258d.png"},60:function(e,a,t){e.exports=t.p+"static/media/RunSmart.a1023491.png"},61:function(e,a,t){e.exports=t.p+"static/media/LilConsistentMe.6c5c149c.png"},62:function(e,a,t){e.exports=t.p+"static/media/mernApp.8d5487ba.png"},63:function(e,a,t){e.exports=t.p+"static/media/CampusGymAnalytics.39e6b149.png"},65:function(e,a,t){e.exports=t.p+"static/media/Resume.d484880e.pdf"},69:function(e,a,t){e.exports=t(242)}},[[69,1,2]]]);
//# sourceMappingURL=main.167abc7e.chunk.js.map