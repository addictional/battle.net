<template>
    <main class="login-wrapper">
        <div class="content">
            <icon id="bn-tag-with-title" class="content__logo"/>
            <form action="sign-in">
                <input type="text" placeholder="Email or Phone">
                <input type="password" placeholder="Password">
                <button class="button button--rounded button--disable-border" type="submit">Log In</button>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    layout: 'login'
}
</script>

<style lang="scss" >
@use './assets/styles/variables' as a;

.login-wrapper {
    width: 416px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    &::before {
            display: block;
            width: 100%;
            content: '';
            flex-grow: 1;
            min-height: 24px;
        }
    &::after {
        display: block;
        width: 100%;
        content: '';
        flex-grow: 2;
        min-height: 24px;
    }
    .content {
       &__logo {
            width: 180px;
            height: 112px;
            margin: 0 auto;
            display: block;
            margin-bottom: 38px;
       }
       & > form {
            & >input {
                font-family: "Noto Sans","Georgia","Times New Roman","Times","Segoe UI Symbol","Segoe MDL2 Assets",serif;
                font-weight: 400;
                width: 100%;
                display: inline-block;
                vertical-align: middle;
                height: 40px;
                padding: 0 12px;
                margin-top: 3px;
                margin-bottom: 3px;
                font-size: 16px;
                line-height: 24px;
                border: 1px solid rgba(255,255,255,0.36);
                background-color: #171920;
                box-sizing: border-box;
                border-radius: 4px;
                outline: 0;
                margin-bottom: 11px;
            }
            & > button {
                font-size: 16px;
                line-height: 20px;
                min-height: 40px;
                padding: 0;
                width: 100%;
                margin-top: 35px;
            }
       }
    }
}



</style>

