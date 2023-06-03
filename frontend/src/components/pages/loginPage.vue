<template>
    <div class="Profile">
        <section class="cont">
            <figure class="sphere sp-1">
                <span class="light"></span>
                <span class="reflection"></span>
                <span class="shadow"></span>
            </figure>
            <figure class="sphere sp-2">
                <span class="light"></span>
                <span class="reflection"></span>
                <span class="shadow"></span>
            </figure>
            <figure class="sphere sp-3">
                <span class="light"></span>
                <span class="reflection"></span>
                <span class="shadow"></span>
            </figure>
            <figure class="sphere sp-4">
                <span class="light"></span>
                <span class="reflection"></span>
                <span class="shadow"></span>
            </figure>
            <figure class="sphere sp-5">
                <span class="light"></span>
                <span class="reflection"></span>
                <span class="shadow"></span>
            </figure>
            <div class="form-reg-log">
            <form class="login-box">
                <h2>Вход</h2>

                <div class="text-box">
                    <input type="text" name="" required placeholder=" " >
                    <label>Логин</label>
                </div>
                <div class="text-box">
                    <input type="text" name="" required placeholder=" ">
                    <label>Пароль</label>
                </div>
                <ButtonRg @click="this.$router.push('/main')">Войти</ButtonRg>
                <div class="open-reg"><router-link to="/profile">Перейти к регистрации</router-link></div>
            </form>

        </div>
        </section>
    </div>
</template>
