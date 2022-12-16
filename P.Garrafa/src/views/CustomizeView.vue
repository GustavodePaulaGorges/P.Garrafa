<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      formDataCreate: {},
      image: "",
    };
  },
  methods: {
    onChange(image) {
      console.log("New picture selected!");
      if (image) {
        console.log("Picture loaded.");
        this.image = URL.createObjectURL(image.target.files[0]);
        const formData = new FormData();
        formData.append("imageForPrinting", image.target.files[0]);
        this.formDataCreate = formData;
        console.log(this.formDataCreate);
      }
    },
    generate() {
      let token = this.$cookies.get("token");
      let decoded = jwt_decode(token);
      const id = decoded.user_id;
      console.log(decoded);
      this.formDataCreate.append("user", id);
      this.formDataCreate.append("bottle", "1");

      axios
        .post("http://localhost:8000/orders/", this.formDataCreate)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <main class="w-screen h-screen">
    <div class="flex m-20 shadow-lg rounded-xl p-10 bg-slate-200">
      <div class="w-1/2 shadow-lg">
        <div>
          <img src="@/assets/Guia.png" />
        </div>
        <div>
          <img :src="image" alt="Preview" />
        </div>
      </div>
      <div class="flex flex-col w-1/2 items-center justify-center">
        <div class="flex flex-row items-center">
          <p class="font-medium text-2xl py-2">Posição da imagem:</p>
        </div>
        <div class="flex flex-row">
          <div class="grid grid-cols-3 items-center">
            <button title="Cima-Esquerda" class="p-2">
              <iconify-icon
                class="hover:invert ease-in-out duration-200"
                inline
                icon="radix-icons:corner-top-left"
                style="color: black"
                width="44"
                height="44"
              ></iconify-icon>
            </button>
            <button title="Cima-Meio" class="p-2">
              <iconify-icon
                class="hover:invert ease-in-out duration-200"
                inline
                icon="radix-icons:divider-horizontal"
                style="color: black"
                width="44"
                height="44"
              ></iconify-icon>
            </button>
            <button title="Cima-Direita" class="p-2">
              <iconify-icon
                class="hover:invert ease-in-out duration-200"
                inline
                icon="radix-icons:corner-top-right"
                style="color: black"
                width="44"
                height="44"
              ></iconify-icon>
            </button>
            <button title="Meio-Esquerda" class="p-2">
              <iconify-icon
                class="hover:invert ease-in-out duration-200"
                icon="radix-icons:divider-vertical"
                style="color: black"
                width="44"
                height="44"
              ></iconify-icon>
            </button>
            <button title="Centro" class="p-2">
              <iconify-icon
                class="hover:invert ease-in-out duration-200"
                icon="radix-icons:plus"
                style="color: black"
                width="44"
                height="44"
              ></iconify-icon>
            </button>
            <button title="Meio-Direita" class="p-2">
              <iconify-icon
                class="hover:invert ease-in-out duration-200"
                icon="radix-icons:divider-vertical"
                style="color: black"
                width="44"
                height="44"
              ></iconify-icon>
            </button>
            <button title="Baixo-Esquerda" class="p-2">
              <iconify-icon
                class="hover:invert ease-in-out duration-200"
                inline
                icon="radix-icons:corner-bottom-left"
                style="color: black"
                width="44"
                height="44"
              ></iconify-icon>
            </button>
            <button title="Baixo-Meio" class="p-2">
              <iconify-icon
                class="hover:invert ease-in-out duration-200"
                icon="radix-icons:divider-horizontal"
                style="color: black"
                width="44"
                height="44"
              ></iconify-icon>
            </button>
            <button title="Baixo-Direita" class="p-2">
              <iconify-icon
                class="hover:invert ease-in-out duration-200"
                inline
                icon="radix-icons:corner-bottom-right"
                style="color: black"
                width="44"
                height="44"
              ></iconify-icon>
            </button>
          </div>
        </div>
        <div class="">
          <div class="flex flex-row justify-center items-center">
            <p class="text-2xl font-medium">Tamanho da Imagem:</p>
          </div>
          <div class="flex flex-row justify-center items-center">
            <input class="h-4 w-4 m-3" name="tamanho" id="sm" type="radio" />
            <label class="text-lg font-medium" for="sm">Pequena</label>
            <input class="h-4 w-4 m-3" name="tamanho" id="md" type="radio" />
            <label class="text-lg font-medium" for="md">Média</label>
            <input class="h-4 w-4 m-3" name="tamanho" id="lg" type="radio" />
            <label class="text-lg font-medium" for="lg">Grande</label>
          </div>
        </div>
        <div class="">
          <div class="flex flex-row justify-center items-center">
            <p class="text-2xl font-medium">Cor da garrafinha:</p>
          </div>
          <div class="flex flex-row justify-center items-center">
            <input class="h-4 w-4 m-3" name="color" id="colorA" type="radio" />
            <label class="text-lg font-medium" for="Azul">Azul</label>
            <input class="h-4 w-4 m-3" name="color" id="colorB" type="radio" />
            <label class="text-lg font-medium" for="Cinza">Cinza</label>
            <input class="h-4 w-4 m-3" name="color" id="colorC" type="radio" />
            <label class="text-lg font-medium" for="Carbono">Carbono</label>
          </div>
        </div>
        <div class="flex flex-col items-center p-10">
          <div>
            <input
              accept="image/jpeg,image/png"
              type="file"
              @change="onChange"
            />
          </div>
          <div class="mt-10 flex flex-row justify-center items-center">
            <button
              class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
              @click="generate"
            >
              Gerar
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
