(this["webpackJsonpcreate-react-app-webpack-bundle"]=this["webpackJsonpcreate-react-app-webpack-bundle"]||[]).push([[0],{20:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var a,r,i,c,o,s,l,d,u,b,h=e(0),p=e.n(h),f=e(11),g=e.n(f),m=e(5),x=e(13),j=e(6),O=e(7),v=e(9),C=e(8),w=(e(20),e(2)),y=e(3),k=y.a.div(a||(a=Object(w.a)(["\n  width: 1400px;\n  min-height: 100vh;\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: grey;\n"]))),z=y.a.h1(r||(r=Object(w.a)(["\n  font-size: 36px;\n  font-weight: 700;\n\n  margin: 0px;\n  margin-bottom: 10px;\n  padding: 0px;\n"]))),S=(y.a.h2(i||(i=Object(w.a)(["\n  font-size: 30px;\n  font-weight: 600px;\n\n  margin: 0px;\n  margin-bottom: 10px;\n  padding: 0px;\n"]))),e(4)),A=e(27),J=y.a.form(c||(c=Object(w.a)(["\n  text-align: center;\n\n  padding: 20px;\n\n  border-bottom: 5px solid black;\n"]))),Z=y.a.label(o||(o=Object(w.a)(["\n  font-size: 30px;\n  font-weight: 600;\n\n  display: flex;\n  justify-content: ",";\n  align-items: ",";\n\n  flex-direction: ",";\n\n  transition-duration: 500ms;\n\n  cursor: pointer;\n\n  margin-bottom: 10px;\n\n  &:hover,\n  &:focus {\n    color: orange;\n  }\n"])),(function(n){return n.filter?"center":"space-between"}),(function(n){return n.filter?"center":"baseline"}),(function(n){return n.filter?"column":"row"})),q=y.a.input(s||(s=Object(w.a)(["\n  height: 30px;\n  width: 300px;\n\n  font-size: 20px;\n  font-weight: 500;\n\n  outline: none;\n\n  border: none;\n  border-radius: 10px;\n\n  transition-duration: 500ms;\n\n  padding-left: 10px;\n  margin-left: 20px;\n\n  &:hover,\n  &:focus {\n    color: orange;\n    border: 2px solid orange;\n  }\n"]))),B=y.a.button(l||(l=Object(w.a)(["\n  font-size: 20px;\n  font-weight: 500;\n\n  width: 150px;\n  height: 30px;\n\n  border-radius: 10px;\n\n  transition-duration: 500ms;\n\n  &:hover,\n  &:focus {\n    background-color: orange;\n  }\n"]))),I=e(1),L=function(n){Object(v.a)(e,n);var t=Object(C.a)(e);function e(n){var a;return Object(j.a)(this,e),(a=t.call(this,n)).state={name:"",number:""},a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(S.a)(a)),a}return Object(O.a)(e,[{key:"handleChange",value:function(n){var t=n.target.name;this.setState(Object(m.a)({},t,n.target.value))}},{key:"handleSubmit",value:function(n){var t=this,e=this.state,a=e.name,r=e.number,i={id:Object(A.a)(),name:a,number:r},c=this.props.contacts.some((function(n){return n.name===t.state.name})),o=this.props.contacts.some((function(n){return n.number===t.state.number}));return n.preventDefault(),c?alert(this.state.name+" \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d(\u0430) \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"):o?alert("\u0423\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c: "+this.state.number):""===this.state.name||""===this.state.number?alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f \u0438 \u043d\u043e\u043c\u0435\u0440."):(this.props.addContact(i),void this.clear())}},{key:"clear",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return Object(I.jsxs)(J,{children:[Object(I.jsxs)(Z,{children:["\u0418\u043c\u044f:",Object(I.jsx)(q,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:this.handleChange,value:t})]}),Object(I.jsxs)(Z,{children:["\u041d\u043e\u043c\u0435\u0440:",Object(I.jsx)(q,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",onChange:this.handleChange,value:e})]}),Object(I.jsx)(B,{type:"submit",onClick:this.handleSubmit,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})}}]),e}(h.Component),M=e(14),D=y.a.ul(d||(d=Object(w.a)(["\n  list-style: none;\n\n  width: 1000px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  margin: 0px;\n  margin-top: 20px;\n  padding: 0px;\n"]))),E=y.a.li(u||(u=Object(w.a)(["\n  font-size: 26px;\n  font-weight: 600;\n\n  width: 400px;\n  height: 50px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  border: 1px solid black;\n\n  background-color: #4b4b4b;\n\n  margin-right: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n"]))),T=y.a.button(b||(b=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: 1px solid black;\n  border-radius: 50%;\n\n  padding: 5px;\n\n  background-color: #4b4b4b;\n\n  cursor: pointer;\n\n  transition-duration: 500ms;\n\n  &:hover,\n  &:focus {\n    border: 1px solid orange;\n    transform: rotate(360deg) scale(1.15);\n\n    svg {\n      fill: orange;\n    }\n  }\n\n  svg {\n    width: 30px;\n    height: 30px;\n\n    transition-duration: 500ms;\n  }\n"])));function $(n){var t=n.contacts,e=n.deleteContact;return Object(I.jsx)(D,{children:t().map((function(n){return Object(I.jsxs)(E,{children:[n.name,": ",n.number,Object(I.jsx)(T,{id:n.id,onClick:e,children:Object(I.jsx)(M.a,{})})]},n.id)}))})}function F(n){var t=n.filter,e=n.onChange;return Object(I.jsxs)(Z,{filter:"true",children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",Object(I.jsx)(q,{name:"filter",onChange:e,value:t})]})}var G=function(n){Object(v.a)(e,n);var t=Object(C.a)(e);function e(){var n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},n.addContact=function(t){n.setState((function(n){return{contacts:[].concat(Object(x.a)(n.contacts),[t])}}))},n.deleteContact=function(t){var e=n.state.contacts.findIndex((function(n){return n.id===t.currentTarget.id})),a=n.state.contacts;a.splice(e,1),n.setState({contacts:a})},n.handleChange=function(t){var e=t.target.name;n.setState(Object(m.a)({},e,t.target.value))},n.filter=function(){return n.state.contacts.filter((function(t){return t.name.toLowerCase().includes(n.state.filter.toLowerCase())}))},n}return Object(O.a)(e,[{key:"render",value:function(){var n=this.state,t=n.filter,e=n.contacts,a=Object(I.jsx)("h2",{children:"\u041d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 `=("});return Object(I.jsxs)(k,{children:[Object(I.jsx)(z,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430:"}),Object(I.jsx)(L,{addContact:this.addContact,contacts:e}),Object(I.jsx)(F,{filter:t,onChange:this.handleChange}),this.state.contacts.length<1?a:Object(I.jsx)($,{contacts:this.filter,deleteContact:this.deleteContact})]})}}]),e}(h.Component);g.a.render(Object(I.jsx)(p.a.StrictMode,{children:Object(I.jsx)(G,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.3d06f03e.chunk.js.map