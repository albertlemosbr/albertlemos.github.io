const switchLanguage = async (lang) => {
    const res = await fetch(`locales/${lang}.json`);
    const translations = await res.json();
    if (!res.ok) {
        throw new Error(`Erro ao carregar ${lang}.json: ${res.status}`);
    }
    console.log("translations: ",translations);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        console.log(res)
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            el.textContent = translations[key];
        }
    });
};

document.getElementById("langSwitcher").addEventListener("change", (e) => {
    const lang = e.target.value;
    switchLanguage(lang);
});

  // Carrega idioma padrão
document.addEventListener("DOMContentLoaded", () => {
    switchLanguage("en");
});