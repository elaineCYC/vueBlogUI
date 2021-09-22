<template>
  <div class="form-wrap">
    <div class="background"></div>
    <form action="" class="login">
        <p class="login-register">
        NEW HERE? Don't have account?
        <router-link class="router-link" :to="{ name:'Register'}" >Register</router-link>
        </p>
      <h2>Login to blogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email">
          <email class="icon"/>
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password">
          <password class="icon"/>
        </div>
        <div v-show="error" class="error">{{ this.errorMsg}}</div>
      </div>
      <router-link class="forgot-password" :to="{ name:'ForgotPassword'}">Forgot your Password?</router-link>
      <button @click.prevent="signIn">Sign in</button>
      <div class="angle"></div>
    </form>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import firebase from "firebase/app";
import "firebase/auth";
export default {
    name:"Login",
    components:{
      email,
      password,
    },
    data(){
      return{
        email:"",
        password:"",
        error:null,
        errorMsg:"",
      };
    },
    methods:{
      signIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
          this.$router.push({ name: "Home"});
          this.error = false;
          this.errorMsg = "";
          console.log(firebase.auth().currentUser.uid);
        }).catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        });
      },
    },
};
</script>

<style lang="scss" >
.form-wrap{
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
    @media(min-width: 900px) {
      width: 100%;
    }
  .login-register{
    margin-bottom: 16px;
    .router-link{
      color: #131212;
    }
  }
  form{
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media(min-width: 900px){
      padding: 0 50px;
    }
    h2{
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media(min-width: 900px){
        font-size: 40px;
      }
    }
    .inputs{
      width: 100%;
      max-width:330px;
      .input{
        position: relative;
        display: flex;
        background-color: rgb(250, 244, 244);
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        padding: 0 15px;
        border-radius: 55px;
        input{
          width: 100%;
          border: none;
          padding: 3px 3px 3px 35px;
          height: 50px;
          outline: none;
          background: none;
          line-height: 1;
          font-weight: 500;
          font-size: 18px;
          color:rgb(17, 17, 17);
          &:focus {
            outline: none;
            background-color: rgb(250, 244, 244)f;
          }
          &::placeholder{
            color: rgb(156, 154, 154);
            font-weight: 500;
            font-size: 20px;
          }
        }
        .icon{
          width: 24px;
          font-weight: 500;
          margin-left: 10px;
          position: absolute;
          left: 3px;
          color: rgb(196, 194, 194);
          line-height: 55px;
          text-align: center;
        }
      }
    }
    .forgot-password{
      text-decoration: none;
      color: black;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 18px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;
      &:hover{
        border-color: #303030;
      }
    }
    .angle{
      display: none;
      position: absolute;
      background-color: rgb(255, 255, 255);
      transform: rotateZ(3deg);
      width: 60px;
      left: -30px;
      height: 101%;
      @media(min-width: 900px){
        display: initial;
      }
    }
    button{
      width: 150px;
      height: 49px;
      border: none;
      outline: none;
      border-radius: 49px;
      cursor: pointer;
      background-color: rgb(17, 22, 31);
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
      margin: 10px 0;
      transition: .5s;
      &:hover{
        background-color: #383f4b;
      }
    }
  }
  .background{
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;
    @media(min-width: 900px){
      display: initial;
    }
  } 
}
</style>