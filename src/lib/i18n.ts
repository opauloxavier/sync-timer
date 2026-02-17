export type Locale = "en" | "pt-BR" | "es";

const translations = {
  en: {
    appName: "Sweet Timer",
    tagline: "Sweet moments, shared together",
    joinFriendTimer: "Join a friend's timer",
    pasteTimerId: "Paste timer name here",
    joinTimer: "Join Timer",
    orJoinFriend: "Or join a friend's timer",
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
    deleteTimer: "delete timer",
    deleteConfirm: "Are you sure you want to delete this timer?",
    deleting: "deleting...",
  },
  "pt-BR": {
    appName: "Sweet Timer",
    tagline: "Momentos doces, compartilhados juntos",
    joinFriendTimer: "Entre no timer de um amigo",
    pasteTimerId: "Cole o nome do timer aqui",
    joinTimer: "Entrar no Timer",
    orJoinFriend: "Ou entre no de um amigo",
    createStopwatch: "Criar Cronometro",
    createCountdown: "Criar Contagem Regressiva",
    creating: "Criando...",
    startCountdown: "Iniciar Contagem",
    setYourTimer: "Defina seu timer",
    min: "min",
    sec: "seg",
    warmingUp: "Preparando...",
    timerNotFound: "Ops! Timer nao encontrado",
    timerExpired: "Este timer pode ter expirado ou nao existe.",
    createNewTimer: "Criar Novo Timer",
    createNewTimerLink: "Criar um novo timer",
    stopwatch: "Cronometro",
    countdown: "Contagem",
    tapToShare: "Toque para compartilhar",
    copied: "Copiado!",
    tickingAway: "Contando~",
    takingBreak: "Fazendo uma pausinha",
    readyWhenYouAre: "Pronto quando voce estiver!",
    deleteTimer: "Excluir timer",
    deleteConfirm: "Tem certeza que deseja excluir este timer?",
    deleting: "Excluindo...",
  },
  es: {
    appName: "Sweet Timer",
    tagline: "Momentos dulces, compartidos juntos",
    joinFriendTimer: "Unete al timer de un amigo",
    pasteTimerId: "Pega el nombre del timer aqui",
    joinTimer: "Unirse al Timer",
    orJoinFriend: "O unete al de un amigo",
    createStopwatch: "Crear Cronometro",
    createCountdown: "Crear Cuenta Regresiva",
    creating: "Creando...",
    startCountdown: "Iniciar Cuenta",
    setYourTimer: "Configura tu timer",
    min: "min",
    sec: "seg",
    warmingUp: "Calentando...",
    timerNotFound: "Oh no! Timer no encontrado",
    timerExpired: "Este timer puede haber expirado o no existe.",
    createNewTimer: "Crear Nuevo Timer",
    createNewTimerLink: "Crear un nuevo timer",
    stopwatch: "Cronometro",
    countdown: "Cuenta regresiva",
    tapToShare: "Toca para compartir",
    copied: "Copiado!",
    tickingAway: "Contando~",
    takingBreak: "Tomando un descanso",
    readyWhenYouAre: "Listo cuando quieras!",
    deleteTimer: "Eliminar timer",
    deleteConfirm: "¿Estás seguro de que quieres eliminar este timer?",
    deleting: "Eliminando...",
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
