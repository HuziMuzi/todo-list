(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{101:function(t,e,a){t.exports=a(131)},106:function(t,e,a){},107:function(t,e,a){},131:function(t,e,a){"use strict";a.r(e);var r={};a.r(r),a.d(r,"selectIsLoggedIn",(function(){return gt}));var n=a(0),s=a.n(n),o=a(9),i=a.n(o);a(106),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107);var c,l,u=a(174),d=a(175),p=a(176),f=a(167),m=a(133),b=a(170),v=a(178),h=a(179),g=a(177),k=a(16),E=a(7),j=a.n(E),O=a(14),y=a(81),x=a.n(y).a.create(Object(k.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"1cdd9f77-c60e-4af5-b194-659e4ebd5d41"}})),C=function(){return x.get("todo-lists")},w=function(t){return x.post("todo-lists",{title:t})},I=function(t){return x.delete("todo-lists/".concat(t))},T=function(t,e){return x.put("todo-lists/".concat(t),{title:e})},S=function(t){return x.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return x.delete("todo-lists/".concat(t,"/tasks/").concat(e))},L=function(t,e){return x.post("todo-lists/".concat(t,"/tasks"),{title:e})},z=function(t,e,a){return x.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},P=function(t){return x.post("auth/login",t)},F=function(){return x.delete("auth/login")},N=function(){return x.get("auth/me")},W=a(13),D={setAppStatus:Object(W.b)("appActions/setAppStatus"),setAppError:Object(W.b)("appActions/setAppError")},M=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a&&e.dispatch(D.setAppError({error:t.messages.length?t.messages[0]:"Some error occurred"})),e.dispatch(D.setAppStatus({status:"failed"})),e.rejectWithValue({errors:t.messages,fieldsErrors:t.fieldsErrors})},R=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a&&e.dispatch(D.setAppError({error:t.message?t.message:"Some error occurred"})),e.dispatch(D.setAppStatus({status:"failed"})),e.rejectWithValue({errors:[t.message],fieldsErrors:void 0})},V=D.setAppStatus,q=Object(W.c)("todolists/fetchTodolists",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(V({status:"loading"})),t.prev=1,t.next=4,C();case 4:return r=t.sent,a.dispatch(V({status:"succeeded"})),t.abrupt("return",{todolists:r.data});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",R(t.t0,a));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()),B=Object(W.c)("todolists/removeTodolist",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,a.rejectWithValue,r(V({status:"loading"})),r(Y({id:e,status:"loading"})),t.next=5,I(e);case 5:return t.sent,r(V({status:"succeeded"})),t.abrupt("return",{id:e});case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),H=Object(W.c)("todolists/addTodolist",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(V({status:"loading"})),t.prev=1,t.next=4,w(e);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(V({status:"succeeded"})),t.abrupt("return",{todolist:r.data.data.item});case 10:return t.abrupt("return",M(r.data,a,!1));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",R(t.t0,a,!1));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),U=Object(W.c)("todolists/changeTodolistTitle",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e.id,e.title);case 3:if(0!==(r=t.sent).data.resultCode){t.next=9;break}return a.dispatch(V({status:"succeeded"})),t.abrupt("return",{id:e.id,title:e.title});case 9:return t.abrupt("return",M(r.data,a));case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",R(t.t0,a,!1));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}()),J={fetchTodolistsTC:q,removeTodolistTC:B,addTodolistTC:H,changeTodolistTitleTC:U},K=Object(W.d)({name:"todolists",initialState:[],reducers:{changeTodolistFilter:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatus:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status}},extraReducers:function(t){t.addCase(q.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(k.a)(Object(k.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(B.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)})).addCase(H.fulfilled,(function(t,e){t.unshift(Object(k.a)(Object(k.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(U.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title}))}}),X=K.actions,Y=(X.changeTodolistFilter,X.changeTodolistEntityStatus),$=Object(W.c)("tasks/fetchTasks",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(D.setAppStatus({status:"loading"})),t.prev=1,t.next=4,S(e);case 4:return r=t.sent,n=r.data.items,a.dispatch(D.setAppStatus({status:"succeeded"})),t.abrupt("return",{tasks:n,todolistId:e});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",R(t.t0,a));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()),_=Object(W.c)("tasks/removeTask",function(){var t=Object(O.a)(j.a.mark((function t(e,a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e.todolistId,e.taskId);case 2:return t.sent,t.abrupt("return",{taskId:e.taskId,todolistId:e.todolistId});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),G=Object(W.c)("tasks/addTask",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(D.setAppStatus({status:"loading"})),t.prev=1,t.next=4,L(e.todolistId,e.title);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(D.setAppStatus({status:"succeeded"})),t.abrupt("return",r.data.data.item);case 10:return M(r.data,a,!1),t.abrupt("return",a.rejectWithValue({errors:r.data.messages,fieldsErrors:r.data.fieldsErrors}));case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",R(t.t0,a,!1));case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,a){return t.apply(this,arguments)}}()),Q=Object(W.c)("tasks/updateTask",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r,n,s,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.getState(),n=r.tasks[e.todolistId].find((function(t){return t.id===e.taskId}))){t.next=4;break}return t.abrupt("return",a.rejectWithValue("task not found in the state"));case 4:return s=Object(k.a)({deadline:n.deadline,description:n.description,priority:n.priority,startDate:n.startDate,title:n.title,status:n.status},e.model),t.next=7,z(e.todolistId,e.taskId,s);case 7:if(o=t.sent,t.prev=8,0!==o.data.resultCode){t.next=13;break}return t.abrupt("return",e);case 13:return t.abrupt("return",M(o.data,a));case 14:t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(8),t.abrupt("return",R(t.t0,a));case 19:case"end":return t.stop()}}),t,null,[[8,16]])})));return function(e,a){return t.apply(this,arguments)}}()),Z={fetchTasks:$,removeTask:_,addTask:G,updateTask:Q},tt=Object(W.d)({name:"tasks",initialState:{},reducers:{},extraReducers:function(t){t.addCase(J.addTodolistTC.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(J.removeTodolistTC.fulfilled,(function(t,e){delete t[e.payload.id]})).addCase(J.fetchTodolistsTC.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase($.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(_.fulfilled,(function(t,e){var a=t[e.payload.todolistId],r=a.findIndex((function(t){return t.id===e.payload.taskId}));r>-1&&a.splice(r,1)})).addCase(G.fulfilled,(function(t,e){t[e.payload.todoListId].unshift(e.payload)})).addCase(Q.fulfilled,(function(t,e){var a=t[e.payload.todolistId],r=a.findIndex((function(t){return t.id===e.payload.taskId}));r>-1&&(a[r]=Object(k.a)(Object(k.a)({},a[r]),e.payload.model))}))}}),et=a(22),at=a(171),rt=a(47),nt=a(180),st=a(168),ot=s.a.memo((function(t){var e=t.addItem,a=t.disabled,r=void 0!==a&&a,o=Object(n.useState)(""),i=Object(rt.a)(o,2),c=i[0],l=i[1],u=Object(n.useState)(null),d=Object(rt.a)(u,2),p=d[0],m=d[1],b=function(){var t=Object(O.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""!==c.trim()?e(c,{setError:m,setTitle:l}):m("Title is required");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return s.a.createElement("div",null,s.a.createElement(nt.a,{variant:"outlined",disabled:r,error:!!p,value:c,onChange:function(t){l(t.currentTarget.value)},onKeyPress:function(t){null!==p&&m(null),13===t.charCode&&b()},label:"Title",helperText:p}),s.a.createElement(f.a,{color:"primary",onClick:b,disabled:r,style:{marginLeft:"5px"}},s.a.createElement(st.a,null)))})),it=a(89),ct=s.a.memo((function(t){var e=Object(n.useState)(!1),a=Object(rt.a)(e,2),r=a[0],o=a[1],i=Object(n.useState)(t.value),c=Object(rt.a)(i,2),l=c[0],u=c[1];return r?s.a.createElement(nt.a,{value:l,onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.onChange(l)}}):s.a.createElement("span",{onDoubleClick:function(){o(!0),u(t.value)}},t.value)})),lt=a(132),ut=a(169),dt=a(182);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(c||(c={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(l||(l={}));var pt=a(23),ft=function(){return Object(et.b)()};function mt(t){var e=ft();return Object(n.useMemo)((function(){return Object(pt.b)(t,e)}),[])}var bt=s.a.memo((function(t){var e=mt(jt),a=e.updateTask,r=e.removeTask,o=Object(n.useCallback)((function(){return r({taskId:t.task.id,todolistId:t.todolistId})}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){a({taskId:t.task.id,model:{status:e.currentTarget.checked?c.Completed:c.New},todolistId:t.todolistId})}),[t.task.id,t.todolistId]),l=Object(n.useCallback)((function(e){a({taskId:t.task.id,model:{title:e},todolistId:t.todolistId})}),[t.task.id,t.todolistId]);return s.a.createElement("div",{key:t.task.id,className:t.task.status===c.Completed?"is-done":"",style:{position:"relative"}},s.a.createElement(dt.a,{checked:t.task.status===c.Completed,color:"primary",onChange:i}),s.a.createElement(ct,{value:t.task.title,onChange:l}),s.a.createElement(f.a,{size:"small",onClick:o,style:{position:"absolute",top:"2px",right:"2px"}},s.a.createElement(ut.a,{fontSize:"small"})))})),vt=s.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,r=Object(it.a)(t,["demo"]),o=mt(jt).fetchTasks,i=mt(Et),l=i.changeTodolistFilter,u=i.removeTodolistTC,d=i.changeTodolistTitleTC,p=ft();Object(n.useEffect)((function(){a||r.tasks.length||o(r.todolist.id)}),[]);var m=Object(n.useCallback)(function(){var t=Object(O.a)(j.a.mark((function t(e,a){var n,s,o,i,c,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=jt.addTask({title:e,todolistId:r.todolist.id}),t.next=3,p(n);case 3:s=t.sent,jt.addTask.rejected.match(s)?(null===(o=s.payload)||void 0===o||null===(i=o.errors)||void 0===i?void 0:i.length)?(l=null===(c=s.payload)||void 0===c?void 0:c.errors[0],a.setError(l)):a.setError("Some error occured"):a.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),[r.todolist.id]),v=Object(n.useCallback)((function(t){d({id:r.todolist.id,title:t})}),[r.todolist.id]),h=Object(n.useCallback)((function(t){return l({filter:t,id:r.todolist.id})}),[r.todolist.id]),g=r.tasks;"active"===r.todolist.filter&&(g=r.tasks.filter((function(t){return t.status===c.New}))),"completed"===r.todolist.filter&&(g=r.tasks.filter((function(t){return t.status===c.Completed})));var k=function(t,e,a){return s.a.createElement(b.a,{variant:r.todolist.filter===t?"outlined":"text",onClick:function(){return h(t)},color:e},a)};return s.a.createElement(lt.a,{style:{padding:"10px",position:"relative"}},s.a.createElement(f.a,{size:"small",onClick:function(){u(r.todolist.id)},disabled:"loading"===r.todolist.entityStatus,style:{position:"absolute",right:"5px",top:"5px"}},s.a.createElement(ut.a,{fontSize:"small"})),s.a.createElement("h3",null,s.a.createElement(ct,{value:r.todolist.title,onChange:v})),s.a.createElement(ot,{addItem:m,disabled:"loading"===r.todolist.entityStatus}),s.a.createElement("div",null,g.map((function(t){return s.a.createElement(bt,{key:t.id,task:t,todolistId:r.todolist.id})})),!g.length&&s.a.createElement("div",{style:{padding:"10px",color:"grey"}},"No task")),s.a.createElement("div",{style:{paddingTop:"10px"}},k("all","default","All"),k("active","primary","Active"),k("completed","secondary","Completed")))})),ht=a(17),gt=function(t){return t.auth.isLoggedIn},kt=function(t){var e=t.demo,a=void 0!==e&&e,r=Object(et.c)((function(t){return t.todolists})),o=Object(et.c)((function(t){return t.tasks})),i=Object(et.c)(gt),c=ft(),l=mt(Et),u=l.fetchTodolistsTC,d=(l.addTodolistTC,Object(n.useCallback)(function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r,n,s,o,i,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Et.addTodolistTC(e),t.next=3,c(r);case 3:n=t.sent,Et.addTodolistTC.rejected.match(n)?(null===(s=n.payload)||void 0===s||null===(o=s.errors)||void 0===o?void 0:o.length)?(l=null===(i=n.payload)||void 0===i?void 0:i.errors[0],a.setError(l)):a.setError("Some error occured"):a.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),[]));return Object(n.useEffect)((function(){!a&&i&&(r.length||u())}),[]),i?s.a.createElement(s.a.Fragment,null,s.a.createElement(at.a,{container:!0,style:{padding:"20px"}},s.a.createElement(ot,{addItem:d})),s.a.createElement(at.a,{container:!0,spacing:3,style:{flexWrap:"nowrap",overflowX:"scroll"}},r.map((function(t){var e=o[t.id];return s.a.createElement(at.a,{item:!0,key:t.id},s.a.createElement("div",{style:{width:"300px"}},s.a.createElement(vt,{todolist:t,tasks:e,demo:a})))})))):s.a.createElement(ht.a,{to:"/login"})},Et=Object(k.a)(Object(k.a)({},J),K.actions),jt=Object(k.a)(Object(k.a)({},Z),tt.actions),Ot=K.reducer,yt=tt.reducer,xt=a(184),Ct=a(181);function wt(t){return s.a.createElement(Ct.a,Object.assign({elevation:6,variant:"filled"},t))}function It(){var t=Object(et.c)((function(t){return t.app.error})),e=mt(D).setAppError,a=function(t,a){"clickaway"!==a&&e({error:null})},r=null!==t;return s.a.createElement(xt.a,{open:r,autoHideDuration:6e3,onClose:a},s.a.createElement(wt,{onClose:a,severity:"error"},t))}var Tt=function(t){return t.app.status},St=function(t){return t.app.isInitialized},At=a(185),Lt=a(166),zt=a(172),Pt=a(173),Ft=a(88),Nt=D.setAppStatus,Wt=Object(W.c)("auth/login",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(Nt({status:"loading"})),t.prev=1,t.next=4,P(e);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(Nt({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",M(r.data,a));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",R(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),Dt=Object(W.c)("auth/logout",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(Nt({status:"loading"})),t.prev=1,t.next=4,F();case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(Nt({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",M(r.data,a));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",R(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),Mt={login:Wt,logout:Dt},Rt=Object(W.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedIn:function(t,e){t.isLoggedIn=e.payload.value}},extraReducers:function(t){t.addCase(Wt.fulfilled,(function(t){t.isLoggedIn=!0})).addCase(Dt.fulfilled,(function(t){t.isLoggedIn=!1}))}}),Vt=(Rt.reducer,Rt.actions.setIsLoggedIn,function(){var t=ft(),e=Object(et.c)(gt),a=Object(Ft.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(){var e=Object(O.a)(j.a.mark((function e(a,r){var n,s,o,i,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(qt.login(a));case 2:n=e.sent,Wt.rejected.match(n)&&(null===(s=n.payload)||void 0===s||null===(o=s.fieldsErrors)||void 0===o?void 0:o.length)&&(c=null===(i=n.payload)||void 0===i?void 0:i.fieldsErrors[0],r.setFieldError(c.field,c.error));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()});return e?s.a.createElement(ht.a,{to:"/"}):s.a.createElement(at.a,{container:!0,justify:"center"},s.a.createElement(at.a,{item:!0,xs:4},s.a.createElement("form",{onSubmit:a.handleSubmit},s.a.createElement(At.a,null,s.a.createElement(Lt.a,null,s.a.createElement("p",null,"To log in get registered ",s.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),s.a.createElement("p",null,"or use common test account credentials:"),s.a.createElement("p",null," Email: free@samuraijs.com"),s.a.createElement("p",null,"Password: free")),s.a.createElement(zt.a,null,s.a.createElement(nt.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?s.a.createElement("div",null,a.errors.email):null,s.a.createElement(nt.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?s.a.createElement("div",null,a.errors.password):null,s.a.createElement(Pt.a,{label:"Remember me",control:s.a.createElement(dt.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),s.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))}),qt=Object(k.a)(Object(k.a)({},Mt),Rt.actions),Bt=Rt.reducer,Ht=Object(W.c)("application/initializeApp",function(){var t=Object(O.a)(j.a.mark((function t(e,a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,t.next=3,N();case 3:0===t.sent.data.resultCode&&r(qt.setIsLoggedIn({value:!0}));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),Ut={initializeApp:Ht},Jt=Object(W.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{},extraReducers:function(t){t.addCase(Ht.fulfilled,(function(t,e){t.isInitialized=!0})).addCase(D.setAppStatus,(function(t,e){t.status=e.payload.status})).addCase(D.setAppError,(function(t,e){t.error=e.payload.error}))}}),Kt=Jt.reducer,Xt=Jt.actions,Yt=Object(k.a)(Object(k.a)({},Xt),Ut);var $t=function(t){var e=Object(et.c)(Tt),a=Object(et.c)(St),o=Object(et.c)(r.selectIsLoggedIn),i=mt(qt).logout,c=mt(Yt).initializeApp;Object(n.useEffect)((function(){a||c()}),[]);var l=Object(n.useCallback)((function(){i()}),[]);return a?s.a.createElement("div",{className:"App"},s.a.createElement(It,null),s.a.createElement(d.a,{position:"static"},s.a.createElement(p.a,null,s.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},s.a.createElement(g.a,null)),s.a.createElement(m.a,{variant:"h6"},"News"),o&&s.a.createElement(b.a,{color:"inherit",onClick:l},"Log out")),"loading"===e&&s.a.createElement(v.a,null)),s.a.createElement(h.a,{fixed:!0},s.a.createElement(ht.b,{exact:!0,path:"/",render:function(){return s.a.createElement(kt,{demo:!1})}}),s.a.createElement(ht.b,{path:"/login",render:function(){return s.a.createElement(Vt,null)}}))):s.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},s.a.createElement(u.a,null))},_t=a(50),Gt=Object(pt.c)({app:Kt,auth:Bt,todolists:Ot,tasks:yt}),Qt=Object(W.a)({reducer:Gt,middleware:function(t){return t().prepend(_t.a)}});window.store=Qt;var Zt=a(49);i.a.render(s.a.createElement(et.a,{store:Qt},s.a.createElement(Zt.a,null,s.a.createElement($t,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.bf2afce9.chunk.js.map