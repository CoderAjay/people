System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/+account/account.component.js",["@angular/core","@angular/router","@angular2-material/toolbar","@angular2-material/button","@angular2-material/sidenav","@angular2-material/list","@angular2-material/card","@angular2-material/input","@angular2-material/checkbox","@angular2-material/radio","@angular2-material/icon","../shared"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("@angular2-material/toolbar"),i=a("@angular2-material/button"),j=a("@angular2-material/sidenav"),k=a("@angular2-material/list"),l=a("@angular2-material/card"),m=a("@angular2-material/input"),n=a("@angular2-material/checkbox"),o=a("@angular2-material/radio"),p=a("@angular2-material/icon"),q=a("../shared"),r=function(){function a(a,b,c){return this.router=a,this.authService=b,this.commentService=c,this.isEditFormShowing=!1,this.accountInfo=new q.Person("","","","","","",!1),this.authService.isAuthenticated?void(this.accountInfo=this.authService.currentUser):(this.router.navigate(["/"]),this)}return a.prototype.ngOnInit=function(){this.comments=this.commentService.getUserComments(this.accountInfo.uid)},a.prototype.submitUserInfo=function(a){var b=this;this.isEditFormShowing=!1;var c=a.value;c.isFullStack&&(c.isFullStack=c.isFullStack.checked),c.uid=this.accountInfo.uid,c.id=this.accountInfo.id,c.desc=c.desc?c.desc:"",c.maritalstatus=c.maritalstatus?c.maritalstatus:"",c.isFullStack=c.isFullStack?c.isFullStack:!1,this.authService.updateAccount(c).then(function(a){b.accountInfo=b.authService.currentUser})},a.prototype.submitUserComment=function(a){var b=a.value;b.timestamp=+new Date,b.owner={name:this.accountInfo.name,image:this.accountInfo.image,uid:this.accountInfo.uid},this.commentService.addUserComment(this.accountInfo.uid,b,this.accountInfo)},a=d([f.Component({moduleId:c.id,selector:"app-account",templateUrl:"account.component.html",styleUrls:["account.component.css"],providers:[p.MdIconRegistry,o.MdRadioDispatcher,q.CommentsService],directives:[j.MD_SIDENAV_DIRECTIVES,k.MD_LIST_DIRECTIVES,l.MD_CARD_DIRECTIVES,h.MdToolbar,i.MdButton,m.MdInput,n.MdCheckbox,o.MdRadioGroup,o.MdRadioButton,p.MdIcon],pipes:[q.Orderby]}),e("design:paramtypes",[g.Router,q.AuthService,q.CommentsService])],a)}();return b.AccountComponent=r,c.exports}),System.registerDynamic("app/+account/index.js",["./account.component"],!0,function(a,b,c){"use strict";var d=a("./account.component");return b.AccountComponent=d.AccountComponent,c.exports}),System.registerDynamic("app/+home/home.component.js",["@angular/core","@angular/router","@angular2-material/toolbar","@angular2-material/button","@angular2-material/sidenav","@angular2-material/list","@angular2-material/card","@angular2-material/input","@angular2-material/checkbox","@angular2-material/radio","@angular2-material/icon","../shared"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("@angular2-material/toolbar"),i=a("@angular2-material/button"),j=a("@angular2-material/sidenav"),k=a("@angular2-material/list"),l=a("@angular2-material/card"),m=a("@angular2-material/input"),n=a("@angular2-material/checkbox"),o=a("@angular2-material/radio"),p=a("@angular2-material/icon"),q=a("../shared"),r=function(){function a(a,b,c){this.ppl=a,this.router=b,this.authService=c}return a.prototype.ngOnInit=function(){this.people=this.ppl.getList()},a.prototype.toUserProfile=function(a){this.router.navigateByUrl("/person/"+a.$key)},a=d([f.Component({moduleId:c.id,selector:"app-home",templateUrl:"home.component.html",styleUrls:["home.component.css"],providers:[q.PeoplelistService,p.MdIconRegistry,o.MdRadioDispatcher],pipes:[q.Orderby,q.Kicker],directives:[j.MD_SIDENAV_DIRECTIVES,k.MD_LIST_DIRECTIVES,l.MD_CARD_DIRECTIVES,h.MdToolbar,i.MdButton,m.MdInput,n.MdCheckbox,o.MdRadioGroup,o.MdRadioButton,p.MdIcon,g.ROUTER_DIRECTIVES]}),e("design:paramtypes",[q.PeoplelistService,g.Router,q.AuthService])],a)}();return b.HomeComponent=r,c.exports}),System.registerDynamic("app/+home/index.js",["./home.component"],!0,function(a,b,c){"use strict";var d=a("./home.component");return b.HomeComponent=d.HomeComponent,c.exports}),System.registerDynamic("app/+person/person.component.js",["@angular/core","@angular/router","@angular2-material/toolbar","@angular2-material/button","@angular2-material/sidenav","@angular2-material/list","@angular2-material/card","@angular2-material/input","@angular2-material/checkbox","@angular2-material/radio","@angular2-material/icon","../shared"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("@angular2-material/toolbar"),i=a("@angular2-material/button"),j=a("@angular2-material/sidenav"),k=a("@angular2-material/list"),l=a("@angular2-material/card"),m=a("@angular2-material/input"),n=a("@angular2-material/checkbox"),o=a("@angular2-material/radio"),p=a("@angular2-material/icon"),q=a("../shared"),r=function(){function a(a,b,c,d,e){var f=this;return this.router=a,this.routeSegment=b,this.ppp=c,this.commentService=d,this.authService=e,this.uid=b.getParam("id"),this.uid?(this.user=this.ppp.get(this.uid),this.user.subscribe(function(a){f.userInfo=a}),void(this.comments=this.commentService.getUserComments(this.uid))):(a.navigateByUrl("/"),this)}return a.prototype.ngOnInit=function(){},a.prototype.submitUserComment=function(a){var b=a.value;if(b.timestamp=+new Date,this.authService.isAuthenticated){var c=this.authService.currentUser;if(!c.uid||!this.userInfo.name)return;b.owner={name:c.name,image:c.image,uid:c.uid},this.commentService.addUserComment(this.uid,b,this.userInfo)}},a=d([f.Component({moduleId:c.id,selector:"app-person",templateUrl:"person.component.html",styleUrls:["person.component.css"],providers:[q.PeoplelistService,q.CommentsService,p.MdIconRegistry,o.MdRadioDispatcher],pipes:[q.Orderby],directives:[j.MD_SIDENAV_DIRECTIVES,k.MD_LIST_DIRECTIVES,l.MD_CARD_DIRECTIVES,h.MdToolbar,i.MdButton,m.MdInput,n.MdCheckbox,o.MdRadioGroup,o.MdRadioButton,p.MdIcon]}),e("design:paramtypes",[g.Router,g.RouteSegment,q.PeoplelistService,q.CommentsService,q.AuthService])],a)}();return b.PersonComponent=r,c.exports}),System.registerDynamic("app/+person/index.js",["./person.component"],!0,function(a,b,c){"use strict";var d=a("./person.component");return b.PersonComponent=d.PersonComponent,c.exports}),System.registerDynamic("app/shared/person.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(a,b,c,d,e,f,g){this.name=a,this.image=b,this.desc=c,this.id=d,this.uid=e,this.maritalstatus=f,this.isFullStack=g}return a}();return b.Person=d,c.exports}),System.registerDynamic("app/shared/pipes/kicker.pipe.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.transform=function(a,b){return"string"!=typeof a?a:a.substr(0,b||200)},a=d([f.Pipe({name:"kicker"}),e("design:paramtypes",[])],a)}();return b.Kicker=g,c.exports}),System.registerDynamic("app/shared/pipes/orderby.pipe.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.transform=function(a,b){b=b.split(",");var c=b[0],d="desc"===b[1]?-1:1;return Array.isArray(a)&&a.length?a[0][c]?a.sort(function(a,b){return a[c]>b[c]?d:-d}):a.sort(function(a,b){return a>b?d:-d}):a},a=d([f.Pipe({name:"orderby"}),e("design:paramtypes",[])],a)}();return b.Orderby=g,c.exports}),System.registerDynamic("app/shared/auth.service.js",["@angular/core","angularfire2"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("angularfire2"),h=function(){function a(a){var b=this;this.af=a,this.isAuthenticated=!1,this.af.auth.subscribe(function(a){a&&b.createOrRetriveUserInfo(b.parseSocialInfo(a,a.auth.provider))})}return a.prototype.parseSocialInfo=function(a,b){return a[b]?{uid:a.uid,id:a[b].id,image:a[b].profileImageURL,name:a[b].displayName}:void 0},a.prototype.createOrRetriveUserInfo=function(a){var b=this;this.af.database.object("/user/"+a.uid).subscribe(function(c){return c?(b.userInfo=c,void(b.isAuthenticated=!0)):(b.af.database.object("/user/"+a.uid).set(a),void b.af.database.list("/notifications").push({type:"newuser",title:a.name,uid:a.uid,message:a.name+" has just joined."}))})},Object.defineProperty(a.prototype,"currentUser",{get:function(){return this.userInfo},enumerable:!0,configurable:!0}),a.prototype.updateAccount=function(a){var b=this;return this.isAuthenticated?this.af.database.object("/user/"+this.userInfo.uid).set(a).then(function(c){b.af.database.list("/notifications").push({type:"profileupdate",message:a.name+" updated his/her profile.",uid:a.uid,title:a.name,timestamp:+new Date})}):Promise.reject("")},a.prototype.login=function(){this.af.auth.login()},a=d([f.Injectable(),e("design:paramtypes",[g.AngularFire])],a)}();return b.AuthService=h,c.exports}),System.registerDynamic("app/shared/peoplelist.service.js",["@angular/core","angularfire2"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("angularfire2"),h=function(){function a(a){this.af=a}return a.prototype.getList=function(){return this.af.database.list("/user")},a.prototype.get=function(a){return this.af.database.object("/user/"+a)},a=d([f.Injectable(),e("design:paramtypes",[g.AngularFire])],a)}();return b.PeoplelistService=h,c.exports}),System.registerDynamic("app/shared/notification.service.js",["@angular/core","angularfire2"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("angularfire2"),h=function(){function a(a){this.af=a}return a.prototype.getNotifications=function(){return this.af.database.list("/notifications",{query:{limitToLast:20}})},a.prototype.add=function(a){this.af.database.list("/notification").push(a)},a=d([f.Injectable(),e("design:paramtypes",[g.AngularFire])],a)}();return b.NotificationService=h,c.exports}),System.registerDynamic("app/shared/comments.service.js",["@angular/core","angularfire2"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("angularfire2"),h=function(){function a(a){this.af=a}return a.prototype.getUserComments=function(a){return this.af.database.list("/comments/"+a)},a.prototype.addUserComment=function(a,b,c){this.af.database.list("/comments/"+a).push(b),this.af.database.list("/notifications").push({type:"comment",message:b.owner.name+" just commented on "+(b.owner.uid===c.uid?"Himself":c.name)+".",uid:a,title:b.owner.name,timestamp:+new Date})},a=d([f.Injectable(),e("design:paramtypes",[g.AngularFire])],a)}();return b.CommentsService=h,c.exports}),System.registerDynamic("app/shared/index.js",["./person","./pipes/kicker.pipe","./pipes/orderby.pipe","./auth.service","./peoplelist.service","./notification.service","./comments.service"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./person")),d(a("./pipes/kicker.pipe")),d(a("./pipes/orderby.pipe")),d(a("./auth.service")),d(a("./peoplelist.service")),d(a("./notification.service")),d(a("./comments.service")),c.exports}),System.registerDynamic("app/people.component.js",["@angular/core","@angular/router","@angular2-material/toolbar","@angular2-material/button","@angular2-material/sidenav","@angular2-material/list","@angular2-material/card","@angular2-material/input","@angular2-material/checkbox","@angular2-material/radio","@angular2-material/icon","./+account","./+home","./+person","./shared"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("@angular2-material/toolbar"),i=a("@angular2-material/button"),j=a("@angular2-material/sidenav"),k=a("@angular2-material/list"),l=a("@angular2-material/card"),m=a("@angular2-material/input"),n=a("@angular2-material/checkbox"),o=a("@angular2-material/radio"),p=a("@angular2-material/icon"),q=a("./+account"),r=a("./+home"),s=a("./+person"),t=a("./shared"),u=function(){function a(a,b){this.authService=a,this.notifyService=b,this.formShowing=!1,this.views=[{name:"Home",description:"",icon:"home",route:"/"},{name:"My Account",description:"Edit my account information",icon:"assignment ind",route:"/account"}],this.notifications=this.notifyService.getNotifications()}return a.prototype.login=function(){this.authService.login()},Object.defineProperty(a.prototype,"isAuthenticated",{get:function(){return this.authService.isAuthenticated},enumerable:!0,configurable:!0}),a=d([f.Component({moduleId:c.id,selector:"people-app",templateUrl:"people.component.html",styleUrls:["people.component.css"],directives:[g.ROUTER_DIRECTIVES,j.MD_SIDENAV_DIRECTIVES,k.MD_LIST_DIRECTIVES,l.MD_CARD_DIRECTIVES,h.MdToolbar,i.MdButton,m.MdInput,n.MdCheckbox,o.MdRadioGroup,o.MdRadioButton,p.MdIcon],providers:[p.MdIconRegistry,o.MdRadioDispatcher,t.NotificationService],pipes:[t.Orderby]}),g.Routes([{path:"/",component:r.HomeComponent},{path:"/person/:id",component:s.PersonComponent},{path:"/account",component:q.AccountComponent},{path:"/*",component:r.HomeComponent}]),e("design:paramtypes",[t.AuthService,t.NotificationService])],a)}();return b.PeopleAppComponent=u,c.exports}),System.registerDynamic("app/index.js",["./environment","./people.component"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./environment")),d(a("./people.component")),c.exports});