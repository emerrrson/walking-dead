// ===== RESET GLOBAL =====
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background =
  "radial-gradient(circle at top, #3A0806, #2D0000)";
document.body.style.color = "#f5f5f5";
document.body.style.overflow = "hidden";

// ===== FOG / ATMOSPHERE =====
const fog = document.createElement("div");
fog.style.position = "absolute";
fog.style.inset = "0";
fog.style.background =
  "radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)";
fog.style.opacity = "0.6";
fog.style.pointerEvents = "none";
document.body.appendChild(fog);

// ===== CONTAINER =====
const container = document.createElement("section");
container.style.minHeight = "100vh";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.padding = "40px";
container.style.position = "relative";
container.style.zIndex = "2";

// ===== CARD =====
const card = document.createElement("div");
card.style.maxWidth = "900px";
card.style.background = "rgba(72, 15, 11, 0.65)";
card.style.border = "1px solid rgba(255,255,255,0.08)";
card.style.borderRadius = "24px";
card.style.padding = "70px";
card.style.textAlign = "center";
card.style.backdropFilter = "blur(20px)";
card.style.boxShadow = "0 0 120px rgba(45,0,0,0.9)";
card.style.opacity = "0";
card.style.transform = "translateY(50px)";
card.style.transition = "1.2s ease";

// ===== TITLE =====
const title = document.createElement("h1");
title.innerText = "THE WALKING DEAD";
title.style.fontSize = "3.6rem";
title.style.letterSpacing = "4px";
title.style.marginBottom = "20px";

// ===== LINE =====
const line = document.createElement("div");
line.style.width = "80px";
line.style.height = "2px";
line.style.background = "#621E16";
line.style.margin = "0 auto 30px";

// ===== TEXT =====
const text = document.createElement("p");
text.innerText =
  "O mundo acabou. A lei caiu. Os mortos andam. Nesta nova realidade, não se trata de viver — trata-se de sobreviver.";
text.style.fontSize = "1.2rem";
text.style.lineHeight = "1.8";
text.style.opacity = "0.9";

// ===== BUTTON =====
const button = document.createElement("button");
button.innerText = "Entrar no Apocalipse";
button.style.marginTop = "45px";
button.style.padding = "18px 46px";
button.style.fontSize = "16px";
button.style.border = "none";
button.style.borderRadius = "999px";
button.style.cursor = "pointer";
button.style.background =
  "linear-gradient(135deg, #621E16, #2D0000)";
button.style.color = "#fff";
button.style.letterSpacing = "1px";
button.style.transition = "0.3s";

// ===== BUTTON INTERACTION =====
button.addEventListener("mouseenter", () => {
  button.style.transform = "scale(1.1)";
  button.style.boxShadow = "0 0 35px rgba(98,30,22,0.9)";
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "scale(1)";
  button.style.boxShadow = "none";
});

button.addEventListener("click", () => {
  text.innerText =
    "🩸 Cada escolha importa. Cada passo pode ser o último. Bem-vindo ao mundo dos mortos.";
  button.innerText = "Sobrevivendo...";
});

// ===== APPEND =====
card.appendChild(title);
card.appendChild(line);
card.appendChild(text);
card.appendChild(button);
container.appendChild(card);
document.body.appendChild(container);

// ===== ENTRANCE ANIMATION =====
setTimeout(() => {
  card.style.opacity = "1";
  card.style.transform = "translateY(0)";
}, 300);