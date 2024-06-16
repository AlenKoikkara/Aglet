"use strict";(self.webpackChunkshoetopia=self.webpackChunkshoetopia||[]).push([[790],{6791:(e,s,a)=>{a.d(s,{A:()=>c});var r=a(3162),i=a(9970),l=a(6545),d=a(3933),n=a(7044);const c={registerUser:async(e,s,a,c,o)=>{await(0,l.eJ)(r.j,e,s).then((async e=>{await i.A.post(n.A.addUser(e.user.uid).concat("?emailId=".concat(e.user.email))).then((e=>{o((0,d.iD)(e.data)),c.resetForm(),a()}))})).catch((e=>{alert(e.message)}))},loginUser:async(e,s,a,c,o)=>{await(0,l.x9)(r.j,e,s).then((async e=>{await i.A.get(n.A.fetchUser(e.user.uid)).then((e=>{o((0,d.iD)(e.data)),c.resetForm(),a()})),c.resetForm(),a()})).catch((e=>{alert(e.message)}))},logoutUser:async e=>{(0,l.CI)(r.j).then((()=>{e((0,d.ri)()),console.log("userSigned out")})).catch((e=>{console.log(e.message)}))}}},3177:(e,s,a)=>{a.d(s,{A:()=>m});var r=a(2483),i=a(7757),l=a(6090),d=a(3933),n=a(453),c=a(5619),o=a(9158),t=a(6723);const m=function(e){let{config:s}=e;const m=(0,r.lazy)((()=>Promise.resolve().then(a.bind(a,942)))),h=(0,i.wA)(),v=(0,i.d4)(l.VH),u=(0,i.d4)(d.mB),[x,j]=(0,r.useState)(!1);return(0,t.jsxs)("div",{className:"cartfunction",children:[(null===s||void 0===s?void 0:s.addCart)&&(0,t.jsx)(c.A,{className:"addCart",onClick:()=>function(){var e,a;u&&null!==s&&void 0!==s&&null!==(e=s.shoe)&&void 0!==e&&e.size&&n.A.addtoCart(null===u||void 0===u?void 0:u.userId,null===s||void 0===s?void 0:s.shoe,h,v),!u||null!==s&&void 0!==s&&null!==(a=s.shoe)&&void 0!==a&&a.size||alert("Please enter shoe size!!"),u||j(!0)}(),children:"Add to Cart"}),(null===s||void 0===s?void 0:s.removeCart)&&(0,t.jsx)(c.A,{className:"removeCart",onClick:()=>{n.A.removeFromCart(null===u||void 0===u?void 0:u.userId,null===s||void 0===s?void 0:s.shoe,h)},children:"Delete"}),(0,t.jsxs)("div",{style:{display:"none"},children:[(0,t.jsx)(r.Suspense,{fallback:(0,t.jsx)(o.A,{}),children:(0,t.jsx)(m,{open:x,setOpen:j})})," "]})]})}},4824:(e,s,a)=>{a.d(s,{A:()=>i});a(2483);var r=a(6723);const i=()=>(0,r.jsx)("div",{children:"Footer"})},942:(e,s,a)=>{a.r(s),a.d(s,{default:()=>v});var r=a(2483),i=a(1450),l=a(2806),d=a(6791),n=a(7757),c=a(5619),o=a(3678),t=a(2132),m=a(2878),h=a(6723);const v=function(e){let{open:s,setOpen:a}=e;const[v,u]=(0,r.useState)(!1),x=(0,n.wA)();function j(){a(!1)}const p=(0,i.Wx)({initialValues:{email:"",password:"",confirmPassword:""},validate:e=>{const s={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(s.email="Invalid email address"):s.email="Required",e.password?/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(e.password)||(s.password="Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"):s.password="Required",v&&(!e.confirmPassword&&v?s.confirmPassword="Required":e.confirmPassword!==e.password&&(s.confirmPassword="Password does not match")),s},onSubmit:e=>{p.setTouched(!0),v?d.A.registerUser(e.email,e.password,j,p,x):d.A.loginUser(e.email,e.password,j,p,x)}});return(0,h.jsx)("div",{children:(0,h.jsx)(t.A,{open:s,onClose:()=>{p.resetForm(),j()},children:(0,h.jsxs)(m.A,{className:"dWrapper",children:[(0,h.jsxs)("div",{className:"dialogTitle",children:[" ",v?"Sign Up":"Login"]}),(0,h.jsxs)("div",{className:"dialogWrapper",children:[(0,h.jsx)("div",{className:"dialogbanner",children:(0,h.jsx)("img",{loading:"lazy",className:"logo",src:l,alt:""})}),(0,h.jsx)("div",{className:"form",children:(0,h.jsxs)("form",{onSubmit:p.handleSubmit,children:[(0,h.jsx)(o.A,{margin:"dense",id:"email",name:"email",label:"Email Address",type:"email",fullWidth:!0,variant:"standard",onBlur:p.handleBlur,value:p.values.email,onChange:p.handleChange}),p.errors.email?(0,h.jsx)("div",{className:"errorText",children:p.errors.email}):null,(0,h.jsx)(o.A,{required:!0,margin:"dense",id:"password",name:"password",label:"Password",type:"password",fullWidth:!0,variant:"standard",onBlur:p.handleBlur,value:p.values.password,onChange:p.handleChange}),p.errors.password?(0,h.jsx)("div",{className:"errorText",children:p.errors.password}):null,v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.A,{required:!0,margin:"dense",id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",type:"confirmPassword",fullWidth:!0,variant:"standard",onBlur:p.handleBlur,value:p.values.confirmPassword,onChange:p.handleChange}),p.errors.confirmPassword&&v?(0,h.jsx)("div",{className:"errorText",children:p.errors.confirmPassword}):null]}),(0,h.jsx)("div",{className:"signUpdirect",children:v?"Already a user?":"Don't have an account?"}),(0,h.jsx)("div",{className:"signUp",onClick:()=>(u(!v),p.setTouched(!0),void p.resetForm()),children:v?"Login here.":"SignUp here."}),(0,h.jsx)(c.A,{disabled:!(p.isValid&&p.values),className:"submitbutton",type:"submit",children:v?"Sign Up":"Login"})]})})]})]})})})}},8464:(e,s,a)=>{a.d(s,{A:()=>w});var r=a(2483),i=a(7757),l=a(3376),d=a(3933),n=a(942),c=a(453),o=a(6723);const t=function(){(0,i.d4)(d.mB);const[e,s]=(0,r.useState)(!1),[a,t]=(0,r.useState)(!1);return(0,l.Zp)(),(0,o.jsxs)("div",{className:"hamburgerWrapper",children:[(0,o.jsxs)("div",{onClick:()=>(()=>{const a=document.getElementById("hamburger"),r=document.getElementById("navWrapper");!0===e?(a.classList.remove("open"),a.classList.add("closed"),r.classList.add("closenav"),r.classList.remove("opened"),s(!1)):(a.classList.remove("closed"),a.classList.add("open"),r.classList.add("opened"),r.classList.remove("closenav"),s(!0))})(),id:"hamburger",className:"hamburger closed",children:[(0,o.jsx)("div",{className:"burger-main",children:(0,o.jsxs)("div",{className:"burger-inner",children:[(0,o.jsx)("span",{className:"top"}),(0,o.jsx)("span",{className:"mid"}),(0,o.jsx)("span",{className:"bot"})]})}),(0,o.jsx)("div",{className:"path-burger",children:(0,o.jsx)("div",{className:"animate-path",children:(0,o.jsx)("div",{className:"path-rotation"})})})]}),(0,o.jsxs)("div",{id:"navWrapper",className:"navWrapper closenav",children:[(0,o.jsx)("div",{className:"blurfilterdiv"}),(0,o.jsxs)("div",{className:"navlink",children:[(0,o.jsx)("div",{className:"mens",children:(0,o.jsx)("a",{href:c.A.getUrlWithParams("/products?",{category:"Men"}),className:"link",children:"men"})}),(0,o.jsx)("div",{className:"womens",children:(0,o.jsx)("a",{href:c.A.getUrlWithParams("/products?",{category:"Women"}),className:"link",children:"women"})}),(0,o.jsx)("div",{className:"kids",children:(0,o.jsx)("a",{href:c.A.getUrlWithParams("/products?",{category:"Kids"}),className:"link",children:"kids"})})]}),(0,o.jsx)("div",{style:{display:"none"},children:(0,o.jsx)(n.default,{open:a,setOpen:t})})]})]})};var m=a(4429),h=a(2806),v=a(6090),u=a(2891),x=a(550),j=a(4472),p=a(8402),N=a(3177),g=a(2057),f=a(5619);const A=()=>{const[e,s]=r.useState(!1),a=(0,i.d4)(v.VH),l=(0,i.d4)(d.mB),n=e=>()=>{s(e)},t=(0,o.jsxs)(u.A,{className:"cartDrawer",role:"presentation",children:[(0,o.jsxs)("div",{className:"header",children:[(0,o.jsx)("div",{className:"title",children:"Cart"}),(0,o.jsx)(g.A,{className:"cartClose",onClick:n(!1)})]}),(0,o.jsx)(j.A,{children:null===a||void 0===a?void 0:a.map((e=>(0,o.jsxs)("div",{className:"cartItem",children:[(0,o.jsx)("img",{className:"cartImage",src:e.imageUrl,alt:""}),(0,o.jsxs)("div",{className:"cartBody",children:[(0,o.jsx)("div",{className:"productName",children:(0,o.jsx)("a",{href:"/products/".concat(e.productId),children:e.productName})}),(0,o.jsxs)("div",{className:"productSize",children:["Size: ",e.size]}),(0,o.jsxs)("div",{className:"productQty",children:["Quantity: ",e.count]}),(0,o.jsxs)("div",{className:"productprice",children:["$",e.listPrice]})]}),(0,o.jsx)("div",{className:"cartremovebutton",children:(0,o.jsx)(N.A,{config:{shoe:e,removeCart:!0}})})]})))}),(0,o.jsx)(f.A,{className:"placeOrder",onClick:()=>c.A.placeOrder(l,a),children:"Checkout"})]});return(0,o.jsxs)("div",{children:[(0,o.jsx)(p.A,{onClick:n(!0),className:"carticon",fontSize:"large"}),(null===a||void 0===a?void 0:a.length)>0&&(0,o.jsx)(x.Ay,{anchor:"right",open:e,children:t})]})};const w=function(){const e=(0,i.d4)(d.mB),s=(0,i.d4)(v.VH),[a,u]=(0,r.useState)("top"),[x,j]=(0,r.useState)(0),[p,N]=(0,r.useState)(!1),g=(0,l.Zp)(),f=()=>{window.scrollY>x?u("navfadeout"):u("navfadein"),j(window.scrollY),x<50&&u("top")};return(0,r.useEffect)((()=>(window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f))),[x]),(0,o.jsx)("div",{className:"navbarWrapper ".concat(a),children:(0,o.jsxs)("div",{className:"wrapper",children:[(0,o.jsxs)("div",{className:"menuandlogo",children:[(0,o.jsx)("div",{className:"navHamburger",children:(0,o.jsx)(t,{})}),(0,o.jsx)("img",{loading:"lazy",className:"logo",onClick:()=>g("/"),src:h,alt:""})]}),(0,o.jsxs)("div",{className:"rightsideContent",children:[(0,o.jsxs)("div",{className:"cartIcon",children:[(0,o.jsx)(A,{}),(null===s||void 0===s?void 0:s.length)>0&&(0,o.jsx)("div",{className:"cartCount",children:null===s||void 0===s?void 0:s.length})]}),null!==e&&void 0!==e&&e.emailId?(0,o.jsx)("div",{onClick:()=>g("/user/".concat(123)),className:"auth",children:(0,o.jsx)("div",{className:"profile",fontSize:"large",children:c.A.getUserInitial(null===e||void 0===e?void 0:e.emailId)})}):(0,o.jsx)("div",{onClick:()=>{N(!0)},className:"auth",children:(0,o.jsx)(m.A,{className:"login",fontSize:"large"})})]}),(0,o.jsx)("div",{style:{display:"none"},children:(0,o.jsx)(n.default,{open:p,setOpen:N})})]})})}},2404:(e,s,a)=>{a.r(s),a.d(s,{UserPage:()=>w,default:()=>b});var r=a(2483),i=a(8464),l=a(5619);const d=a.p+"static/media/banner.1493f5d51a565523c1e1.png";var n=a(923),c=a(6791),o=a(7757),t=a(6723);const m=()=>{const e=(0,o.wA)();return(0,t.jsx)("div",{className:"profileCardWrapper",children:(0,t.jsxs)("div",{className:"profileCard",children:[(0,t.jsxs)("div",{className:"displayImage",children:[(0,t.jsx)("img",{className:"profilePic",src:d,alt:""}),(0,t.jsxs)("div",{className:"profileHeader",children:[(0,t.jsx)("div",{className:"userName",children:"alen dennis"}),(0,t.jsx)("div",{className:"memberDate",children:"Member Since February 2017"})]})]}),(0,t.jsxs)("div",{className:"editProfile",children:[(0,t.jsxs)(l.A,{className:"editButton",children:["Edit Profile"," ",(0,t.jsx)(n.A,{style:{"margin-left":"10px"},fontSize:"small"})]}),(0,t.jsx)(l.A,{className:"logout",onClick:()=>{c.A.logoutUser(e)},children:"Logout"})]})]})})};var h=a(3177);const v=()=>(0,t.jsxs)("div",{className:"orderCard",children:[(0,t.jsx)("div",{className:"orderCartTitle",children:"Order History"}),(0,t.jsx)("div",{className:"orderList",children:[1,2,3,4,5,6].map((e=>(0,t.jsxs)("div",{className:"cartItem",children:[(0,t.jsx)("img",{className:"cartImage",src:d,alt:""}),(0,t.jsxs)("div",{className:"cartBody",children:[(0,t.jsx)("div",{className:"productName",children:(0,t.jsxs)("a",{href:"/products/".concat(null===e||void 0===e?void 0:e.productId),children:["Air Jordan",null===e||void 0===e?void 0:e.productName]})}),(0,t.jsxs)("div",{className:"productSize",children:["Size: 10",null===e||void 0===e?void 0:e.size]}),(0,t.jsxs)("div",{className:"productQty",children:["Quantity: 3",null===e||void 0===e?void 0:e.count]}),(0,t.jsxs)("div",{className:"productprice",children:["$223",null===e||void 0===e?void 0:e.listPrice]})]}),(0,t.jsx)("div",{className:"cartremovebutton",children:(0,t.jsx)(h.A,{config:{shoe:e,removeCart:!0}})})]})))})]});var u=a(9417),x=a(7686),j=a(5470),p=a(2891);function N(e){const{children:s,value:a,index:r,...i}=e;return(0,t.jsx)("div",{role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r),...i,children:a===r&&(0,t.jsx)(p.A,{sx:{p:3},children:(0,t.jsx)(j.A,{children:s})})})}function g(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}const f=()=>{const[e,s]=r.useState(0);return(0,t.jsx)("div",{className:"userProfileWrapper",children:(0,t.jsxs)(p.A,{sx:{width:"100%"},children:[(0,t.jsx)(p.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,t.jsxs)(u.A,{value:e,onChange:(e,a)=>{s(a)},"aria-label":"basic tabs example",children:[(0,t.jsx)(x.A,{label:"Profile",...g(0)}),(0,t.jsx)(x.A,{label:"Orders",...g(1)}),(0,t.jsx)(x.A,{label:"Favourites",...g(2)})]})}),(0,t.jsx)(N,{value:e,index:0,children:(0,t.jsx)(m,{})}),(0,t.jsx)(N,{value:e,index:1,children:(0,t.jsx)(v,{})}),(0,t.jsx)(N,{value:e,index:2,children:"Item Three"})]})})};var A=a(4824);const w=()=>(0,t.jsxs)("div",{className:"body",children:[(0,t.jsx)(i.A,{}),(0,t.jsx)(f,{}),(0,t.jsx)(A.A,{})]}),b=w},2806:(e,s,a)=>{e.exports=a.p+"static/media/logo.7613ad9fedc07a82a2b2.png"}}]);
//# sourceMappingURL=790.7e070195.chunk.js.map