<template>
    <main class="w-screen py-24 px-80">
        <div class=" min-w-full items-center">
            <p class="text-4xl font-bold my-8">
                Criar novo usuário
            </p>
            <p class="text-3xl font-bold my-2">
                Informações:
            </p>
            <input class=" my-2 w-full p-4 rounded-md outline outline-1 outline-gray-200" placeholder="Nome*" type="text">
            <input class=" my-2 w-full p-4 rounded-md outline outline-1 outline-gray-200" placeholder="Sobrenome*" type="text">
            <input class=" my-2 w-full p-4 rounded-md outline outline-1 outline-gray-200" placeholder="Telefone*" type="tel">
            <input class=" my-2 w-full p-4 rounded-md outline outline-1 outline-gray-200" placeholder="Email*" type="email">
            <input class=" my-2 w-full p-4 rounded-md outline outline-1 outline-gray-200" placeholder="Senha*" type="password">
            <button class="bg-blue-500 my-4 font-medium text-gray-100 w-full p-4 rounded-xl hover:bg-gray-100 hover:text-blue-500 ease-in-out duration-200">
                CADASTRAR
            </button>
        </div>
    </main>
</template>