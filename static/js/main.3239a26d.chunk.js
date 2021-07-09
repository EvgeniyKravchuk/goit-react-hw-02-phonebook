(this["webpackJsonpcreate-react-app-webpack-bundle"]=this["webpackJsonpcreate-react-app-webpack-bundle"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var a,r,i,c,s,l,o,d,b,u,j,x,m=n(1),p=n.n(m),h=n(5),f=n.n(h),g=n(9),O=n(6),v=n(7),w=n(11),C=n(10),y=n(2),k=n(3),F=k.a.h2(a||(a=Object(y.a)(["\n  font-size: 26px;\n  font-weight: 500;\n\n  margin: 0px;\n  margin-bottom: 10px;\n\n  color: white;\n"]))),z=k.a.div(r||(r=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  flex-direction: column;\n\n  border: 1px solid white;\n\n  padding: 10px;\n  margin: 0px;\n  margin-bottom: 10px;\n\n  width: 500px;\n"]))),N=k.a.input(i||(i=Object(y.a)(["\n  width: 200px;\n\n  margin-bottom: 10px;\n"]))),S=k.a.ul(c||(c=Object(y.a)(["\n  list-style: none;\n\n  margin: 0px;\n  padding: 0px;\n"]))),A=k.a.li(s||(s=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 30px;\n  font-weight: 600;\n\n  margin: 0px;\n  padding: 0px;\n\n  color: white;\n"]))),V=k.a.button(l||(l=Object(y.a)(["\n  width: 25px;\n  height: 25px;\n\n  border-radius: 50%;\n\n  margin-left: 10px;\n"]))),T=n(0);function J(e){var t=e.setFilter;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(F,{children:"\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438: "}),Object(T.jsx)(N,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:t})]})}function Z(e){var t=e.del,n=e.filteredContacts;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(F,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0412\u0430\u0448\u0438\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432:"}),Object(T.jsx)(S,{children:n.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(T.jsxs)(A,{children:[a+": "+r,Object(T.jsx)(V,{id:n,onClick:t,children:"X"})]},n)}))}),";"]})}function q(e){var t=e.filter,n=e.setFilter,a=e.del,r=e.filteredContacts;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(F,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432:"}),Object(T.jsxs)(z,{children:[Object(T.jsx)(J,{filter:t,setFilter:n}),Object(T.jsx)(Z,{del:a,filteredContacts:r})]})]})}var B=k.a.div(o||(o=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: baseline;\n\n  flex-direction: column;\n\n  background-color: #040836;\n\n  padding: 20px;\n"]))),L=k.a.h1(d||(d=Object(y.a)(["\n  font-size: 50px;\n  font-weight: 700;\n\n  margin: 0px;\n  margin-bottom: 20px;\n\n  -webkit-text-stroke: 2px white;\n\n  color: #040836;\n"]))),M=k.a.h2(b||(b=Object(y.a)(["\n  font-size: 26px;\n  font-weight: 500;\n\n  margin: 0px;\n  margin-bottom: 10px;\n\n  color: white;\n"]))),E=k.a.input(u||(u=Object(y.a)(["\n  width: 200px;\n\n  margin-bottom: 10px;\n"]))),I=k.a.button(j||(j=Object(y.a)(["\n  width: 100px;\n  height: 25px;\n"]))),X=k.a.div(x||(x=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  flex-wrap: wrap;\n\n  border: 1px solid white;\n\n  padding: 10px;\n  margin: 0px;\n  margin-bottom: 10px;\n\n  width: 500px;\n"])));function $(e){var t=e.getName,n=e.getNumber,a=e.add,r=e.name,i=e.number;return Object(T.jsxs)(X,{children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{children:"\u0418\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430:"}),Object(T.jsx)(E,{type:"text",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:t})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430:"}),Object(T.jsx)(E,{type:"tel",name:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:n})]}),Object(T.jsx)(I,{onClick:a,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}var D=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",name:"",number:""},e.setNameValue=function(t){var n=t.currentTarget;e.setState({name:n.value})},e.setNumberValue=function(t){var n=t.currentTarget;e.setState({number:n.value})},e.setFilterValue=function(t){var n=t.currentTarget;e.setState({filter:n.value})},e.deleteContact=function(t){var n=t.currentTarget,a=e.state.contacts.filter((function(e){return e.id!==n.id}));e.setState({contacts:a})},e.clear=function(){e.setState({name:"",number:""})},e.addContact=function(){""!==e.state.name&&""!==e.state.number&&(e.setState((function(t){return{contacts:[].concat(Object(g.a)(t.contacts),[{id:e.state.number,name:e.state.name,number:e.state.number}])}})),e.clear())},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this,t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())}));return Object(T.jsxs)(B,{children:[Object(T.jsx)(L,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430:"}),Object(T.jsx)($,{getName:this.setNameValue,getNumber:this.setNumberValue,add:this.addContact,name:this.state.name,number:this.state.number}),Object(T.jsx)(q,{filter:this.state.filter,setFilter:this.setFilterValue,del:this.deleteContact,filteredContacts:t})]})}}]),n}(m.Component);f.a.render(Object(T.jsx)(p.a.StrictMode,{children:Object(T.jsx)(D,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3239a26d.chunk.js.map