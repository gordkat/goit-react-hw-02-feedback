(this["webpackJsonpreact-lesson-1"]=this["webpackJsonpreact-lesson-1"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),o=n.n(r),s=n(5),i=n(6),d=n(7),b=n(9),u=n(8),l=n(3),j=n.n(l),h=n(0),v=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{className:j.a.container,children:t.map((function(e){return Object(h.jsx)("button",{className:j.a.container__button,type:"button",name:e,onClick:n,children:e},e)}))})},O=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",a]}),Object(h.jsxs)("p",{children:["Total: ",c]}),Object(h.jsxs)("p",{children:["Positive feedback: ",r," %"]})]})},p=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t}),n]})},k=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},x=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleLeaveFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(d.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good/this.countTotalFeedback()*100;return Math.round(e)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage(),o=Object.keys(this.state);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:o,onLeaveFeedback:this.handleLeaveFeedback})}),Object(h.jsx)(p,{title:"Statistics",children:0!==c?Object(h.jsx)(O,{good:t,neutral:n,bad:a,total:c,positivePercentage:r}):Object(h.jsx)(k,{message:"No feedback given"})})]})}}]),n}(a.Component);n(15),n(16);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={container:"FeedbackOptions_container__3v32o",container__button:"FeedbackOptions_container__button__3SwaD"}}},[[17,1,2]]]);
//# sourceMappingURL=main.8d6e85e6.chunk.js.map