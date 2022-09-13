<template>
    <div class="container-fluid">
    <div class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">DRG Solutions</a>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Solutions
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                 <router-link class="dropdown-item nav-link text-blue" to="/email-signature">Email Signature</router-link>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item" v-if="!user.loggedIn">
                <router-link class="nav-link text-white" to="/login">Login</router-link>
            </li>
            <div class="topbar-divider d-none d-sm-block"></div>

                            <ul class="nav navbar-nav" v-if="user.loggedIn">
        <li class="dropdown">
            <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false"> 
                Welcome, {{user.data.displayName}} <b class="caret"></b>  
            </a>
            <div class="dropdown-menu dropdown-menu-right position-absolute" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/employees">Employees</router-link>
                <router-link class="dropdown-item" to="/customers">Customrs</router-link>
                <router-link class="dropdown-item" to="/Tasks">Tasks</router-link>
                
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" @click.prevent="signOut">Sign out</a>
            </div>
        </li>
    </ul>
        </ul>
    </div>
</div>
    <div class="container py-4">
        <router-view />
    </div>
</template>

<script  >
    import { mapGetters } from "vuex";
    import {auth} from "../../FireBase/config.js";
    
    export default {
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        },
        methods: {
            signOut() {
                
                    auth
                    .signOut()
                    .then(() => {
                       window.location.href= "/";
                    });
            }
        }
    };
    
    </script>
