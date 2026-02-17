export type Locale = "en" | "pt-BR" | "es";

const translations = {
  en: {
    appName: "Sweet Timer",
    tagline: "sweet moments, shared together",
    joinFriendTimer: "join a friend's timer",
    pasteTimerId: "paste timer name here",
    joinTimer: "Join Timer",
    orCreateNew: "or create a new one",
    createStopwatch: "Create Stopwatch",
    createCountdown: "Create Countdown",
    creating: "Creating...",
    startCountdown: "Start Countdown",
    setYourTimer: "set your timer",
    min: "min",
    sec: "sec",
    warmingUp: "warming up...",
    timerNotFound: "Oh no! Timer not found",
    timerExpired: "This timer may have expired or doesn't exist.",
    createNewTimer: "Create a New Timer",
    createNewTimerLink: "create a new timer",
    stopwatch: "stopwatch",
    countdown: "countdown",
    tapToShare: "tap to share",
    copied: "copied!",
    tickingAway: "ticking away~",
    takingBreak: "taking a little break",
    readyWhenYouAre: "ready when you are!",
  },
  "pt-BR": {
    appName: "Sweet Timer",
    tagline: "momentos doces, compartilhados juntos",
    joinFriendTimer: "entre no timer de um amigo",
    pasteTimerId: "cole o nome do timer aqui",
    joinTimer: "Entrar no Timer",
    orCreateNew: "ou crie um novo",
    createStopwatch: "Criar Cronometro",
    createCountdown: "Criar Contagem Regressiva",
    creating: "Criando...",
    startCountdown: "Iniciar Contagem",
    setYourTimer: "defina seu timer",
    min: "min",
    sec: "seg",
    warmingUp: "preparando...",
    timerNotFound: "Ops! Timer nao encontrado",
    timerExpired: "Este timer pode ter expirado ou nao existe.",
    createNewTimer: "Criar Novo Timer",
    createNewTimerLink: "criar um novo timer",
    stopwatch: "cronometro",
    countdown: "contagem",
    tapToShare: "toque para compartilhar",
    copied: "copiado!",
    tickingAway: "contando~",
    takingBreak: "fazendo uma pausinha",
    readyWhenYouAre: "pronto quando voce estiver!",
  },
  es: {
    appName: "Sweet Timer",
    tagline: "momentos dulces, compartidos juntos",
    joinFriendTimer: "unete al timer de un amigo",
    pasteTimerId: "pega el nombre del timer aqui",
    joinTimer: "Unirse al Timer",
    orCreateNew: "o crea uno nuevo",
    createStopwatch: "Crear Cronometro",
    createCountdown: "Crear Cuenta Regresiva",
    creating: "Creando...",
    startCountdown: "Iniciar Cuenta",
    setYourTimer: "configura tu timer",
    min: "min",
    sec: "seg",
    warmingUp: "calentando...",
    timerNotFound: "Oh no! Timer no encontrado",
    timerExpired: "Este timer puede haber expirado o no existe.",
    createNewTimer: "Crear Nuevo Timer",
    createNewTimerLink: "crear un nuevo timer",
    stopwatch: "cronometro",
    countdown: "cuenta regresiva",
    tapToShare: "toca para compartir",
    copied: "copiado!",
    tickingAway: "contando~",
    takingBreak: "tomando un descanso",
    readyWhenYouAre: "listo cuando quieras!",
  },
};

export type Translations = typeof translations.en;

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language;
  if (lang.startsWith("pt")) return "pt-BR";
  if (lang.startsWith("es")) return "es";
  return "en";
}
