(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{203:function(t,e,o){"use strict";o.r(e);var n={props:{title:{default:""},description:{default:"Nathan Blaylock is a creative professional who helps small businesses reach goals on a budget through stunning photography, unique graphic design, and a strong web presence."},img:{default:"/img/logo-red-nathan-blaylock-media.png"},norobots:{default:!1,type:Boolean}},data:function(){return{site:"https://nathanblaylock.com",siteName:"Nathan Blaylock Media"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"robots",name:"robots",content:this.norobots?"noindex, nofollow":""},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:url",property:"og:url",content:"".concat(this.site+this.$route.path)},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.site+this.img},{hid:"og:site_name",property:"og:site_name",content:this.siteName}],link:[{hid:"canonical",rel:"canonical",href:"".concat(this.site+this.$route.path)}]}}},r=o(31),component=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._e()}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,o){var content=o(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("96c36aca",content,!0,{sourceMap:!1})},218:function(t,e,o){"use strict";o(216)},219:function(t,e,o){(e=o(53)(!1)).push([t.i,'label.required-field:before{content:"*";color:#680909}',""]),t.exports=e},222:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{formActionLink:"https://docs.google.com/forms/spam",correctFormActionLink:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRkPhc4WCR3vDvX0l1fvCuq-_2EE1uq6mlVoivGOfdfwSmXw/formResponse",incorrectFormAcitonLink:"https://docs.google.com/forms/spam",solveAnswer:""}},watch:{solveAnswer:function(){3==this.solveAnswer?this.formActionLink=this.correctFormActionLink:this.formActionLink=this.incorrectFormAcitonLink}}},r=(o(218),o(31)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container py-5"},[o("Seo",{attrs:{title:"Contact",description:"Contact Nathan Blaylock regarding pricing, services, or to send an encouraging message."}}),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 bg-light p-3"},[o("h1",[t._v("Contact Me")]),t._v(" "),t._m(0),t._v(" "),o("iframe",{staticStyle:{display:"none"},attrs:{name:"hidden_iframe",id:"hidden_iframe",onload:"if(submitted) {\ndocument.querySelector('#submission').style.display = 'block';\n};"}}),t._v(" "),o("form",{attrs:{action:t.formActionLink,method:"post",target:"hidden_iframe",onsubmit:"submitted=true;"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"required-field",attrs:{for:"solve"}},[t._v("1+2=")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.solveAnswer,expression:"solveAnswer"}],staticClass:"form-control",attrs:{type:"text",name:"solve",id:"solve",required:""},domProps:{value:t.solveAnswer},on:{input:function(e){e.target.composing||(t.solveAnswer=e.target.value)}}}),t._v(" "),o("p",{staticClass:"small text-muted"},[t._v("Help me keep down on the spam")])]),t._v(" "),o("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("Submit")])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"none"},attrs:{id:"submission"}},[e("div",{staticClass:"alert alert-success"},[this._v("Thanks for your submission. I will get back to you as soon as I can.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"required-field",attrs:{for:"name"}},[this._v("Name")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",name:"entry.1993431129",id:"name",required:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"required-field",attrs:{for:"email"}},[this._v("Email address")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",name:"entry.1054982356",id:"email",required:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phone"}},[this._v("Phone Number")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",name:"entry.849497172",id:"phone"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"required-field",attrs:{for:"message"}},[this._v("Message")]),this._v(" "),e("textarea",{staticClass:"form-control",attrs:{rows:"5",name:"entry.2018583779",id:"message",required:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Seo:o(203).default})}}]);