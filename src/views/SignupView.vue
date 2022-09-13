<template>


    <section class="vh-100" style="background-color: #2a5f98;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign Up</h3>
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
            <div class="form-outline mb-4">
              <input type="text"   v-model="name" autocomplete="name"
                     placeholder="FullName" id="typname" class="form-control form-control-lg" />
            </div>
            <div class="form-outline mb-4">
              <input type="email"   v-model="email" autocomplete="email"
                     placeholder="example@email.com" id="typeEmailX-2" class="form-control form-control-lg" />
            </div>

            <div class="form-outline mb-4">
              <input type="password"  v-model="password"
                     lass="form-group"
                     autocomplete="current-password"
                     placeholder="Password" id="typePasswordX-2" class="form-control form-control-lg" />
            </div>
            <div class="form-outline mb-4">
              <input type="password"  v-model="passwordRepeat"
                     lass="form-group"
                     autocomplete="current-password"
                     placeholder="Password" id="passwordRepeat" class="form-control form-control-lg" />
            </div>
            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button @click.prevent="validate()"  class="btn btn-primary btn-lg btn-block" type="submit">Sign Up</button>

            <hr class="my-4">
            Already have an account? 
             <router-link to="/login">Login</router-link>
                                      

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>
<script>
  import {auth} from "../FireBase/config.js";

    export default {
      data() {
        return {
            name: null,
          email: null,
          password: null,
          passwordRepeat: null,
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
          if (!(this.password === this.passwordRepeat)) {
            this.validationErrors.push("<strong>Passwords</strong> did not match");
          }
          // when valid then sign in
          if (this.validationErrors.length <= 0) {
            this.signUp();
          }
        },
        signUp() {
          // @TODO signUn logic will come here
          console.log("sign up", this.email, this.password);
          auth
          .createUserWithEmailAndPassword(this.email, this.password)
                .then(data => {
                    data.user
                        .updateProfile({
                            displayName: this.name
                        })
                        .then(() => { });
                })
                .catch(err => {
                    this.error = err.message;
                });
        }
      }
    };
    </script>