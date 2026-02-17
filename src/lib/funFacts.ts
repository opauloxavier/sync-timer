import { Locale } from "./i18n";

export interface FunFact {
  emoji: string;
  text: string;
}

const funFacts: Record<Locale, FunFact[]> = {
  en: [
    { emoji: "🐕", text: "Cinnamoroll was born on a cloud and floated down to earth!" },
    { emoji: "☁️", text: "Cinnamoroll's tail is shaped like a cinnamon roll." },
    { emoji: "✈️", text: "His big floppy ears let him fly through the sky!" },
    { emoji: "☕", text: "He was found on the doorstep of Cafe Cinnamon." },
    { emoji: "🎂", text: "Cinnamoroll's birthday is March 6th." },
    { emoji: "💤", text: "His favorite hobby is napping on fluffy clouds." },
    { emoji: "🐶", text: "Cinnamoroll is actually a puppy, not a bunny!" },
    { emoji: "🌟", text: "He won the Sanrio character ranking in 2020, 2021, 2022, and 2023!" },
    { emoji: "👀", text: "His blue eyes are his most charming feature." },
    { emoji: "🍳", text: "Cafe Cinnamon serves the best espresso in town." },
    { emoji: "🐾", text: "His best friends are Cappuccino, Mocha, and Chiffon." },
    { emoji: "🎀", text: "Hello Kitty's full name is Kitty White." },
    { emoji: "🇬🇧", text: "Hello Kitty was born in London, England!" },
    { emoji: "🍎", text: "Hello Kitty's favorite food is apple pie." },
    { emoji: "🐱", text: "Hello Kitty has a twin sister named Mimmy." },
    { emoji: "📏", text: "Hello Kitty is five apples tall and weighs three apples." },
    { emoji: "🎹", text: "My Melody loves playing the violin." },
    { emoji: "🐸", text: "Keroppi is a frog who lives in Donut Pond." },
    { emoji: "⭐", text: "Pompompurin is a golden retriever who loves pudding." },
    { emoji: "🌈", text: "Little Twin Stars Kiki and Lala came from a star far away." },
  ],
  "pt-BR": [
    { emoji: "🐕", text: "Cinnamoroll nasceu em uma nuvem e flutuou ate a terra!" },
    { emoji: "☁️", text: "A cauda do Cinnamoroll tem formato de cinnamon roll." },
    { emoji: "✈️", text: "Suas orelhas grandes permitem que ele voe pelo ceu!" },
    { emoji: "☕", text: "Ele foi encontrado na porta do Cafe Cinnamon." },
    { emoji: "🎂", text: "O aniversario do Cinnamoroll e 6 de marco." },
    { emoji: "💤", text: "Seu hobby favorito e tirar sonecas em nuvens fofinhas." },
    { emoji: "🐶", text: "Cinnamoroll e na verdade um filhote de cachorro, nao um coelho!" },
    { emoji: "🌟", text: "Ele ganhou o ranking de personagens Sanrio em 2020, 2021, 2022 e 2023!" },
    { emoji: "👀", text: "Seus olhos azuis sao seu charme mais marcante." },
    { emoji: "🍳", text: "O Cafe Cinnamon serve o melhor espresso da cidade." },
    { emoji: "🐾", text: "Seus melhores amigos sao Cappuccino, Mocha e Chiffon." },
    { emoji: "🎀", text: "O nome completo da Hello Kitty e Kitty White." },
    { emoji: "🇬🇧", text: "Hello Kitty nasceu em Londres, na Inglaterra!" },
    { emoji: "🍎", text: "A comida favorita da Hello Kitty e torta de maca." },
    { emoji: "🐱", text: "Hello Kitty tem uma irma gemea chamada Mimmy." },
    { emoji: "📏", text: "Hello Kitty tem cinco macas de altura e pesa tres macas." },
    { emoji: "🎹", text: "My Melody adora tocar violino." },
    { emoji: "🐸", text: "Keroppi e um sapinho que mora no Lago Rosquinha." },
    { emoji: "⭐", text: "Pompompurin e um golden retriever que ama pudim." },
    { emoji: "🌈", text: "Os Little Twin Stars Kiki e Lala vieram de uma estrela distante." },
  ],
  es: [
    { emoji: "🐕", text: "Cinnamoroll nacio en una nube y floto hasta la tierra!" },
    { emoji: "☁️", text: "La cola de Cinnamoroll tiene forma de cinnamon roll." },
    { emoji: "✈️", text: "Sus grandes orejas le permiten volar por el cielo!" },
    { emoji: "☕", text: "Fue encontrado en la puerta del Cafe Cinnamon." },
    { emoji: "🎂", text: "El cumpleanos de Cinnamoroll es el 6 de marzo." },
    { emoji: "💤", text: "Su pasatiempo favorito es dormir siestas en nubes esponjosas." },
    { emoji: "🐶", text: "Cinnamoroll es en realidad un cachorro, no un conejo!" },
    { emoji: "🌟", text: "Gano el ranking de personajes Sanrio en 2020, 2021, 2022 y 2023!" },
    { emoji: "👀", text: "Sus ojos azules son su rasgo mas encantador." },
    { emoji: "🍳", text: "El Cafe Cinnamon sirve el mejor espresso de la ciudad." },
    { emoji: "🐾", text: "Sus mejores amigos son Cappuccino, Mocha y Chiffon." },
    { emoji: "🎀", text: "El nombre completo de Hello Kitty es Kitty White." },
    { emoji: "🇬🇧", text: "Hello Kitty nacio en Londres, Inglaterra!" },
    { emoji: "🍎", text: "La comida favorita de Hello Kitty es el pastel de manzana." },
    { emoji: "🐱", text: "Hello Kitty tiene una hermana gemela llamada Mimmy." },
    { emoji: "📏", text: "Hello Kitty mide cinco manzanas y pesa tres manzanas." },
    { emoji: "🎹", text: "A My Melody le encanta tocar el violin." },
    { emoji: "🐸", text: "Keroppi es una ranita que vive en el Estanque Dona." },
    { emoji: "⭐", text: "Pompompurin es un golden retriever que ama el pudin." },
    { emoji: "🌈", text: "Los Little Twin Stars Kiki y Lala vinieron de una estrella lejana." },
  ],
};

export function getFunFacts(locale: Locale): FunFact[] {
  return funFacts[locale];
}
