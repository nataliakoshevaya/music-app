"use strict";(self.webpackChunkmusic_app=self.webpackChunkmusic_app||[]).push([[700],{6700:(K,E,n)=>{n.r(E),n.d(E,{AuthModule:()=>X});var p=n(9808),U=n(520),t=n(5e3),h=n(9832),d=n(9291),f=n(4894);let S=(()=>{class e{constructor(){this.title="AuthComponent"}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-auth"]],decls:8,vars:8,consts:[[3,"routerLink"]],template:function(r,s){1&r&&(t.TgZ(0,"mat-button-toggle-group"),t.TgZ(1,"mat-button-toggle",0),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-button-toggle",0),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.qZA(),t._UZ(7,"router-outlet")),2&r&&(t.xp6(1),t.Q6J("routerLink","./login"),t.xp6(1),t.Oqu(t.lcZ(3,4,"AUTH.LOGIN")),t.xp6(2),t.Q6J("routerLink","./register"),t.xp6(1),t.Oqu(t.lcZ(6,6,"AUTH.SIGNUP")))},directives:[h.A9,h.Yi,d.rH,d.lC],pipes:[f.X$],styles:[".mat-button-toggle-group[_ngcontent-%COMP%]{margin-bottom:10px}  .mat-form-field-label{color:#000!important}  .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:#000}"]}),e})();var a=n(3075),R=n(1928),g=n(7423),i=n(4106),u=n(5620),l=(()=>{return(e=l||(l={})).auth="[Auth] Get auth",e.authSuccess="[Auth] Get auth success",e.authFailure="[Auth] Get auth failure",l;var e})();const A=(0,u.PH)(l.auth,(0,u.Ky)()),q=(0,u.PH)(l.authSuccess),N=(0,u.PH)(l.authFailure,(0,u.Ky)()),L=(0,u.P1)(e=>e.auth,e=>e.errorMessage);var Z=n(7531);function C(e,o){if(1&e&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&e){const r=o.ngIf;t.xp6(1),t.hij(" ",r,"\n")}}let M=(()=>{class e{constructor(r,s){this.fb=r,this.store=s,this.requestUrl="/users/signin"}ngOnInit(){this.loginForm=this.fb.group({email:["",[a.kI.required,a.kI.email]],password:["",[a.kI.required]]})}onSubmit(){this.loginForm.valid&&(this.store.dispatch(A({url:this.requestUrl,credentials:this.loginForm.value})),this.serverErrorMessage$=this.store.pipe((0,u.Ys)(L)))}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(a.qu),t.Y36(u.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:22,vars:20,consts:[["class","error-message",4,"ngIf"],[1,"form","login-form",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","formControlName","email","placeholder","pat@example.com","type","email","name","email","required",""],["matInput","","formControlName","password","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f","type","password","name","password","required",""],["mat-raised-button","","type","submit",3,"disabled"],[1,"error-message"]],template:function(r,s){1&r&&(t.YNc(0,C,2,1,"div",0),t.ALo(1,"async"),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t.TgZ(3,"mat-form-field",2),t.TgZ(4,"mat-label"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t._UZ(7,"input",3),t.TgZ(8,"mat-error"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.qZA(),t.TgZ(11,"mat-form-field",2),t.TgZ(12,"mat-label"),t._uU(13),t.ALo(14,"translate"),t.qZA(),t._UZ(15,"input",4),t.TgZ(16,"mat-error"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.qZA(),t.TgZ(19,"button",5),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.qZA()),2&r&&(t.Q6J("ngIf",t.lcZ(1,8,s.serverErrorMessage$)),t.xp6(2),t.Q6J("formGroup",s.loginForm),t.xp6(3),t.Oqu(t.lcZ(6,10,"AUTH.ENTER_EMAIL")),t.xp6(4),t.Oqu(t.lcZ(10,12,"ERROR_MESSAGES.EMAIL")),t.xp6(4),t.Oqu(t.lcZ(14,14,"AUTH.ENTER_PASSWORD")),t.xp6(4),t.Oqu(t.lcZ(18,16,"AUTH.ENTER_PASSWORD")),t.xp6(2),t.Q6J("disabled",!s.loginForm.valid),t.xp6(1),t.hij(" ",t.lcZ(21,18,"AUTH.LOGIN")," "))},directives:[p.O5,a._Y,a.JL,a.sg,i.KE,i.hX,Z.Nt,a.Fj,a.JJ,a.u,a.Q7,i.TO,g.lW],pipes:[p.Ov,f.X$],styles:[""]}),e})();const I=e=>{var o,r;return(null===(o=e.get("password"))||void 0===o?void 0:o.value)===(null===(r=e.get("confirmPassword"))||void 0===r?void 0:r.value)?null:{notSame:!0}};class x{isErrorState(o){return o.parent.invalid&&o.touched}}const b_password=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}/,F={fullName:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",email:"\u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b (username@domain)",password:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c \u0438\u0437 8 \u0437\u043d\u0430\u043a\u043e\u0432 \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u0447\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443, \u043e\u0434\u043d\u0443 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443, \u043e\u0434\u0438\u043d \u0441\u0438\u043c\u0432\u043e\u043b \u0438 \u0446\u0438\u0444\u0440\u0443.",confirmPassword:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442",phoneNumber:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"};function G(e,o){if(1&e&&(t.TgZ(0,"div",11),t._uU(1),t.ALo(2,"async"),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,r.serverErrorMessage$),"\n")}}const P=[{path:"",component:S,children:[{path:"login",component:M},{path:"register",component:(()=>{class e{constructor(r,s){this.fb=r,this.store=s,this.confirmValidParentMatcher=new x,this.customErrorMessages=F,this.requestUrl="/users/register"}ngOnInit(){this.registrationForm=this.fb.group({email:["",[a.kI.required,a.kI.email]],firstName:["",a.kI.required],secondName:["",a.kI.required],phoneNumber:["",[a.kI.required]]}),this.passwordsGroup=this.fb.group({password:["",[a.kI.required,a.kI.pattern(b_password)]],confirmPassword:["",a.kI.required]},{validators:I})}onSubmit(){const r=Object.assign(Object.assign({},this.registrationForm.value),{password:this.passwordsGroup.value.password});this.store.dispatch(A({url:this.requestUrl,credentials:r})),this.serverErrorMessage$=this.store.pipe((0,u.Ys)(L))}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(a.qu),t.Y36(u.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-registration"]],decls:55,vars:46,consts:[["class","error-message",4,"ngIf"],[1,"form","registration-form",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","formControlName","email","placeholder","pat@example.com","type","email","name","email","required",""],["matInput","","formControlName","firstName","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f","type","text","name","firstName","required",""],["matInput","","formControlName","secondName","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e","type","text","name","secondName","required",""],[1,"passwords-container",3,"formGroup"],["matInput","","formControlName","password","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c","type","password","name","password","required",""],["matInput","","formControlName","confirmPassword","placeholder","\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c","type","password","name","confirmPassword","required","",3,"errorStateMatcher"],["matInput","","formControlName","phoneNumber","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440","type","text","name","phoneNumber","required",""],["mat-raised-button","","type","submit",3,"disabled"],[1,"error-message"]],template:function(r,s){1&r&&(t.YNc(0,G,3,3,"div",0),t.ALo(1,"async"),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t.TgZ(3,"mat-form-field",2),t.TgZ(4,"mat-label"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t._UZ(7,"input",3),t.TgZ(8,"mat-error"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.qZA(),t.TgZ(11,"mat-form-field",2),t.TgZ(12,"mat-label"),t._uU(13),t.ALo(14,"translate"),t.qZA(),t._UZ(15,"input",4),t.TgZ(16,"mat-error"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.qZA(),t.TgZ(19,"mat-form-field",2),t.TgZ(20,"mat-label"),t._uU(21),t.ALo(22,"translate"),t.qZA(),t._UZ(23,"input",5),t.TgZ(24,"mat-error"),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.qZA(),t.TgZ(27,"div",6),t.TgZ(28,"mat-form-field",2),t.TgZ(29,"mat-label"),t._uU(30),t.ALo(31,"translate"),t.qZA(),t._UZ(32,"input",7),t.TgZ(33,"mat-error"),t._uU(34),t.ALo(35,"translate"),t.qZA(),t.qZA(),t.TgZ(36,"mat-form-field",2),t.TgZ(37,"mat-label"),t._uU(38),t.ALo(39,"translate"),t.qZA(),t._UZ(40,"input",8),t.TgZ(41,"mat-error"),t._uU(42),t.ALo(43,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"mat-form-field",2),t.TgZ(45,"mat-label"),t._uU(46),t.ALo(47,"translate"),t.qZA(),t._UZ(48,"input",9),t.TgZ(49,"mat-error"),t._uU(50),t.ALo(51,"translate"),t.qZA(),t.qZA(),t.TgZ(52,"button",10),t._uU(53),t.ALo(54,"translate"),t.qZA(),t.qZA()),2&r&&(t.Q6J("ngIf",t.lcZ(1,18,s.serverErrorMessage$)),t.xp6(2),t.Q6J("formGroup",s.registrationForm),t.xp6(3),t.Oqu(t.lcZ(6,20,"AUTH.ENTER_EMAIL")),t.xp6(4),t.Oqu(t.lcZ(10,22,"ERROR_MESSAGES.EMAIL")),t.xp6(4),t.Oqu(t.lcZ(14,24,"AUTH.ENTER_NAME")),t.xp6(4),t.Oqu(t.lcZ(18,26,"AUTH.ENTER_NAME")),t.xp6(4),t.Oqu(t.lcZ(22,28,"AUTH.ENTER_SURNAME")),t.xp6(4),t.Oqu(t.lcZ(26,30,"AUTH.ENTER_SURNAME")),t.xp6(2),t.Q6J("formGroup",s.passwordsGroup),t.xp6(3),t.Oqu(t.lcZ(31,32,"AUTH.ENTER_PASSWORD")),t.xp6(4),t.Oqu(t.lcZ(35,34,"ERROR_MESSAGES.VALID_PASSWORD")),t.xp6(4),t.Oqu(t.lcZ(39,36,"AUTH.CONFIRM_PASSWORD")),t.xp6(2),t.Q6J("errorStateMatcher",s.confirmValidParentMatcher),t.xp6(2),t.Oqu(t.lcZ(43,38,"ERROR_MESSAGES.CONFIRM_PASSWORD")),t.xp6(4),t.Oqu(t.lcZ(47,40,"AUTH.ENTER_NUMBER")),t.xp6(4),t.Oqu(t.lcZ(51,42,"AUTH.ENTER_NUMBER")),t.xp6(2),t.Q6J("disabled",!s.registrationForm.valid),t.xp6(1),t.hij(" ",t.lcZ(54,44,"AUTH.SIGNUP")," "))},directives:[p.O5,a._Y,a.JL,a.sg,i.KE,i.hX,Z.Nt,a.Fj,a.JJ,a.u,a.Q7,i.TO,g.lW],pipes:[p.Ov,f.X$],styles:[".passwords-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),e})()}]}];let w=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(P)],d.Bz]}),e})();const H=(0,u.Lq)({isAuthorized:!1,errorMessage:null},(0,u.on)(N,(e,{error:o})=>Object.assign(Object.assign({},e),{errorMessage:o})));function $(e,o){return H(e,o)}var m=n(6642),j=n(3900),Q=n(4004),Y=n(262),D=n(9646),z=n(8505),B=n(1652);let O=(()=>{class e{constructor(r){this.http=r}login(r,s){return this.http.post(r,s)}}return e.\u0275fac=function(r){return new(r||e)(t.LFG(U.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),W=(()=>{class e{constructor(r,s){this.actions$=r,this.authService=s,this.auth$=(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(A.type),(0,j.w)(({url:c,credentials:T})=>this.authService.login(c,T).pipe((0,Q.U)(v=>(localStorage.setItem("userAccessToken",v.accessToken),q())),(0,Y.K)(v=>(0,D.of)(N({error:v.message}))))))),this.authSuccess$=(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(q.type),(0,z.b)(()=>{this.createSpotifyAuthUrl(),location.href=this.spotifyAuthUrl})),{dispatch:!1}),this.spotifyAuthUrl=""}createSpotifyAuthUrl(){const r=B.N.CLIENT_ID,T=["user-read-private","user-read-email"].join("%20");return this.spotifyAuthUrl=`https://accounts.spotify.com/authorize?response_type=token&client_id=${r}&scope=${T}&redirect_uri=http://localhost:4200/home`}}return e.\u0275fac=function(r){return new(r||e)(t.LFG(m.eX),t.LFG(O))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),X=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e,bootstrap:[S]}),e.\u0275inj=t.cJS({providers:[O,R.n],imports:[[p.ez,a.UX,U.JF,g.ot,h.vV,i.lN,Z.c,d.Bz,w,f.aw.forChild({extend:!0}),u.Aw.forFeature("auth",$),m.sQ.forFeature([W])]]}),e})()}}]);