(this["webpackJsonpexpense-controller"]=this["webpackJsonpexpense-controller"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=(n(14),n(5)),l=n(2),i=n(1),r=(n(15),n(0)),u=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__day",children:n}),Object(r.jsx)("div",{className:"expense-date__year",children:a})]})};n(17);var o=function(e){var t=" card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},j=(n(18),function(e){return Object(r.jsxs)(o,{className:"expense-item",children:[Object(r.jsx)(u,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:[e.amount,"\u20ac"]})]})]})});n(19);var d=function(e){return 0===e.expenses.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(r.jsx)("ul",{className:"expenses-list",children:e.expenses.map((function(e){return Object(r.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},b=(n(20),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onGetMyYear(t.target.value)},children:[Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"}),Object(r.jsx)("option",{value:"2018",children:"2018"})]})]})})}),x=n(9),O=(n(21),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=(n(22),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(v,{dataPoints:n})},p=(n(23),function(e){var t=Object(i.useState)("2021"),n=Object(l.a)(t,2),a=n[0],c=n[1],s=e.expenseItem.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{children:Object(r.jsxs)(o,{className:"expenses",children:[Object(r.jsx)(b,{selected:a,onGetMyYear:function(e){c(e)}}),Object(r.jsx)(h,{expenses:s}),Object(r.jsx)(d,{expenses:s})]})})}),m=n(7),f=(n(24),function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(""),u=Object(l.a)(s,2),o=u[0],j=u[1],d=Object(i.useState)(""),b=Object(l.a)(d,2),x=b[0],O=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+o,date:new Date(x)};e.onGetExpenseData(n),c(""),j(""),O("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",value:o,onChange:function(e){j(e.target.value)},min:"0.01",step:"0.01"})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",value:x,onChange:function(e){O(e.target.value)},min:"2019-01-01",max:"2022-12-31"})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add expense"})]})]})}),N=(n(25),function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Add new expense"}),a&&Object(r.jsx)(f,{onGetExpenseData:function(t){var n=new Date,a=parseInt(n.getSeconds()),s=Object(m.a)(Object(m.a)({},t),{},{id:a});console.log(a),e.onAddNewExpense(s),console.log(t),c(!1)},onCancel:function(){c(!1)}})]})}),_=(n(26),function(){return Object(r.jsx)("div",{className:"visit-me",children:Object(r.jsx)("a",{href:"https://www.alexiglesias.in/#work",target:"__blank",className:"visit-me-link",children:"Go back"})})}),g=[{id:"1",title:"Toilet Paper",amount:94.12,date:new Date(2019,7,14)},{id:"2",title:"New TV",amount:799.49,date:new Date(2020,2,12)},{id:"3",title:"Car Insurance",amount:294.67,date:new Date(2021,8,28)},{id:"4",title:"New Desk",amount:450,date:new Date(2021,5,12)},{id:"5",title:"iPhone",amount:600,date:new Date(2021,4,12)},{id:"6",title:"iPad",amount:999,date:new Date(2019,4,12)}],w=function(){var e=Object(i.useState)(g),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{onAddNewExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(p,{expenseItem:n}),Object(r.jsx)(_,{})]})};c.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.2f8cd434.chunk.js.map