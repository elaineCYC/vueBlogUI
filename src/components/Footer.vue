<template>
  <footer>
      <div class="container">
           <div class="left">
              <div class="col-1">
                  <router-link class="header" :to="{ name:'Home' }"><h4>Elaine's Blog</h4></router-link>
                    <ul>
                        <li>
                            <a href="#"><instagram class="svg-icon" /></a>
                        </li>
                        <li>
                            <a href="#"><linkedin class="svg-icon" /></a>
                        </li>
                    </ul>
               </div>
                <div class="col-2">
                    <ul>
                        <router-link class="link" :to="{ name: 'Home'}">Home</router-link>
                        <router-link class="link" :to="{ name: 'Blogs'}">Blogs</router-link>
                        <a target="_blank" class="link" href="https://elainecyc.github.io/ccytest/" >About</a>
                        <router-link v-if="admin" class="link" to="#">Creat Post</router-link>
                        <router-link v-if="!user" class="link" :to="{ name: 'Login'}">Login/Register</router-link>
                    </ul>
                </div>
            </div>
            <div class="right">
                <p>&#169; CHIH-YU CHEN<br> 2021 All Rights Reserve</p>
            </div>
      </div>
  </footer>
</template>

<script>
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
    name:"footer-vue",
    components:{
        instagram,
        linkedin,
    },
    computed:{
        user() {
            return this.$store.state.user;
        },
        admin() {
            return this.$store.state.profileAdmin;
        },
    },
};
</script>

<style  lang="scss" scoped>
footer{
    margin-top: auto;
    padding: 100px 25px;
    background-color: #303030;
    .container{
        display: flex;
        flex-direction: column;
        gap: 32px;
        @media(min-width:800px){
            flex-direction: row;
            gap:0;
        }

        >div{
            display: flex;
            flex: 1;
        }

        .left{
            gap: 32px;
            color: azure;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media(min-width:800px) {
                flex-direction: row;
                align-items: initial;
                gap: 0;
            }
        }
        .header{
            text-align: left;
            font-size: 24px;
            color: lavender;
            text-decoration: none;
            font-weight: 600;
            @media(min-width:800px){
                text-align: initial;
            }
        }
        ul{
            gap: 16px;
            list-style: none;
            display: flex;
        }
        .col-1,
        .col-2{
            gap: 32px;
            display: flex;
            flex: 1;
             @media(min-width:800px){
                 gap: 0;
             }
        }
        .col-1{
            flex-direction: column;
            h4{
                text-align: center;
                @media(min-width:800px){
                    text-align:initial;
                }
            }
            ul{
                margin-top: auto;
                li{
                    display: flex;
                    align-items: center;
                    .svg-icon{
                        width: 24px;
                        height: auto;
                        color: ivory;
                    }
                }
            }
        }
        .col-2{
            ul{
                height: 100%;
                justify-content: center;
                flex-direction: row;
                flex-wrap: wrap;
                @media(min-width:800px){
                    flex-direction: column;
                }
                .link{
                    font-size: 16px;
                    font-weight: 500;
                    color: ivory;
                    text-decoration: none;
                    &:hover{
                        color: rgb(60, 155, 233);
                    }
                }
            }
        }
        .right{
            gap: 32px;
            color: ivory;
            align-items: center;
            flex-direction: column;
            @media(min-width:800px){
                align-items: flex-end;
                gap: 0;
            }
        }
        p{
            margin-top: auto;
        }

    }
}
</style>