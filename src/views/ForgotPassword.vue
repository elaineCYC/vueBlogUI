<template>
<div class="reset-password">
  <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
  <Loading v-if="loading"/>
  <div class="form-wrap">
    <div class="background"></div>
    <form  class="reset">
      <p class="login-register">
        Back to 
        <router-link class="router-link" :to="{ name:'Login'}" >Login</router-link>
        </p>
      <h2>Reset Password</h2>
      <p>Forgot your passowrd? Enter your email to reset it</p>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email">
          <email class="icon"/>
        </div>
      </div>
      <button @click.prevent="resetPassword">Reset</button>
      <div class="angle"></div>
    </form>
  </div>
</div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Modal from '../components/Modal.vue';
import Loading from '../components/Loadpage.vue';
import firebase from "firebase/app";
import "firebase/auth";
export default {
    name:"ForgotPassword",
    data(){
      return{
        email:"",
        modalActive:false,
        modelMessage:"",
        loading:null,
      };
    },
    components:{
      email,
      Modal,
      Loading,
    },
    methods:{
      resetPassword(){
        this.loading = true;
        firebase.auth().sendPasswordResetEmail(this.email).then(() =>{
          this.modelMessage = "If your account exists,you will receive a email";
          this.loading = false;
          this.modalActive = true;
        }).catch(err =>{
          this.modelMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        })

      },
      closeModal(){
        this.modalActive = !this.modalActive;
        this.email = "";
      }
    }
}
</script>

<style lang="scss" scoped>
.reset-password{
  position: relative;
  .form-wrap{
    .reset{
      h2{
        margin-bottom: 8px;
      }
      p{
        margin-bottom: 32px;
      }
    }
  }
}

</style>