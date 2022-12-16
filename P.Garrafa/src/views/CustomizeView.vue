<template>
    <main class="w-screen h-screen">
        <div class="flex m-20 shadow-lg rounded-xl p-10 bg-slate-200">
            <div class="w-1/2 shadow-lg">
                <img src="@/assets/guia.png">
            </div>
            <div class="flex flex-col w-1/2  items-center justify-center">
                <div class="flex flex-row items-center p-10">
                    <input class="flex w-full h-full" type="file">
                </div>
                <div class="flex flex-row items-center">
                    <p class="font-medium text-2xl py-2">
                        Posição da imagem:
                    </p>
                </div>
                <div class="flex flex-row">
                    <div class="grid grid-cols-3  items-center">
                        <button title="Cima-Esquerda" class="p-2">
                            <iconify-icon class="hover:invert ease-in-out duration-200" inline icon="radix-icons:corner-top-left" style="color: black;" width="44" height="44"></iconify-icon>
                        </button>
                        <button title="Cima-Meio" class="p-2">
                            <iconify-icon class="hover:invert ease-in-out duration-200" inline icon="radix-icons:divider-horizontal" style="color: black;" width="44" height="44"></iconify-icon>
                        </button>
                        <button title="Cima-Direita" class="p-2">
                            <iconify-icon class="hover:invert ease-in-out duration-200" inline icon="radix-icons:corner-top-right" style="color: black;" width="44" height="44"></iconify-icon>
                        </button>
                        <button title="Meio-Esquerda" class="p-2">
                            <iconify-icon class="hover:invert ease-in-out duration-200" icon="radix-icons:divider-vertical" style="color: black;" width="44" height="44"></iconify-icon>
                        </button>
                        <button title="Centro" class="p-2">
                            <iconify-icon class="hover:invert ease-in-out duration-200" icon="radix-icons:plus" style="color: black;" width="44" height="44"></iconify-icon>
                        </button>
                        <button title="Meio-Direita" class="p-2">
                            <iconify-icon class="hover:invert ease-in-out duration-200" icon="radix-icons:divider-vertical" style="color: black;" width="44" height="44"></iconify-icon>
                        </button>
                        <button title="Baixo-Esquerda" class="p-2">
                            <iconify-icon class="hover:invert ease-in-out duration-200" inline icon="radix-icons:corner-bottom-left" style="color: black;" width="44" height="44"></iconify-icon>
                        </button>
                        <button title="Baixo-Meio" class="p-2">
                            <iconify-icon class="hover:invert ease-in-out duration-200" icon="radix-icons:divider-horizontal" style="color: black;" width="44" height="44"></iconify-icon>
                        </button>
                        <button title="Baixo-Direita" class="p-2">
                            <iconify-icon class="hover:invert ease-in-out duration-200" inline icon="radix-icons:corner-bottom-right" style="color: black;" width="44" height="44"></iconify-icon>
                        </button>
                    </div>
                </div>
                <div class="">
                    <div class="flex flex-row justify-center items-center ">
                        <p class="text-2xl font-medium">Tamanho da Imagem:</p>
                    </div>
                    <div class="flex flex-row justify-center items-center">
                        <input class="h-4 w-4 m-3" name="tamanho" id="sm" type="radio">
                        <label class="text-lg font-medium" for="sm">Pequena</label>
                        <input class="h-4 w-4 m-3" name="tamanho" id="md" type="radio">
                        <label class="text-lg font-medium" for="md">Média</label>
                        <input class="h-4 w-4 m-3" name="tamanho" id="lg" type="radio">
                        <label class="text-lg font-medium" for="lg">Grande</label>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>