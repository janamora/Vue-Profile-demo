
<template>

<div class="container">

<!-- Outer Row -->
<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="form-outline mb-4 text-left">
            <div
               v-if="validationErrors.length"
               class="alert alert-danger"
             >
             <button type="button" @click="resetError()" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
               <div class="content">
                 Please resolve the following error(s) before proceeding.
                   <p
                     v-for="(error, index) in validationErrors"
                     :key="`error-${index}`"
                     v-html="error"
                   />
               </div>
             </div>
            </div>
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    
                                    <input type="email" v-model="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
                                </div>
                                <div class="form-group">
                                    <input type="password"  v-model="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox small">
                                        <input type="checkbox" class="custom-control-input" id="customCheck">
                                        <label class="custom-control-label" for="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <a @click.prevent="validate()" class="btn btn-primary btn-user btn-block">
                                    Login
                                </a>
                                <hr>
                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Login with Google
                                </a>
                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </a>
                            </form>
                            <hr>
                            <div class="text-center">
                                <router-link to="/ForgotPassword">Forgot Your Password?</router-link>
                            </div>
                            <div class="text-center">
                                <router-link to="/signup">Create an Account!</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
 
   </template>
   
   <script>
      import {auth} from "../FireBase/config.js";

   export default {
     data() {
       return {
         email: null,
         password: null,
         validationErrors: []
       };
     },
     methods: {
       resetError() {
         this.validationErrors = [];
       },
       validate() {
         // Clear the errors before we validate again
         this.resetError();
         // email validation
         if (!this.email) {
           this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
         }
         if (/.+@.+/.test(this.email) != true) {
           this.validationErrors.push("<strong>E-mail</strong> must be valid.");
         }
         // password validation
         if (!this.password) {
           this.validationErrors.push("<strong>Password</strong> cannot be empty");
         }
         if (/.{6,}/.test(this.password) != true) {
           this.validationErrors.push(
             "<strong>Password</strong> must be at least 6 characters long"
           );
         }
         // when valid then sign in
         if (this.validationErrors.length <= 0) {
           this.signIn();
         }
       },
       signIn() {
         // @TODO signIn logic will come here
         console.log("sign in", this.email, this.password);
         
                  auth
                  .signInWithEmailAndPassword(this.email, this.password)
                  .then(data => {
                      //this.$router.push({ path: "/" });
                      window.location.href= "/";
                  })
                  .catch(err => {
                      this.error = err.message;
                  });
       }
     }
   };
   </script>
       
       <style>
        .bg-login-image {
    background: url(https://source.unsplash.com/K4mSJ7kc0As/600x800);
    background-position: center;
    background-size: cover;
}.btn-google {
    color: #fff;
    background-color: #ea4335;
    border-color: #fff;
}.btn-block {
    display: block;
    width: 100%;
}.btn-facebook {
    color: #fff;
    background-color: #3b5998;
    border-color: #fff;
}.btn-block+.btn-block {
    margin-top: 0.5rem;
}
       </style>