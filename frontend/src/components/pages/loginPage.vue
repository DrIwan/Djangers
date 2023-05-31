<template>
    <left-menu-bar></left-menu-bar>
    <div class="Profile">
        <div class="form-reg-log">
            <form class="login-box">
                <h2>Вход</h2>

                <div class="text-box">
                    <input type="text" name="" >
                    <label>Логин</label>
                </div>
                <div class="text-box">
                    <input type="text" name="">
                    <label>Пароль</label>
                </div>
                <ButtonRg>Войти</ButtonRg>
                <div class="open-reg"><router-link to="/registration">Перейти к регистрации</router-link></div>
            </form>

        </div>
    </div>
</template>
