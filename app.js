const titleEl = document.querySelector(".title");
const subtitleEl = document.querySelector(".subtitle");
const borderIcon = document.querySelector(".border-icon");

const getAdvice = async () => {
  try {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const data = await resp.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const updateTitleAndSubtitle = (title, subtitle) => {
  titleEl.innerHTML = title;
  subtitleEl.innerHTML = subtitle;
};

const updateAdvice = async () => {
  const data = await getAdvice();
  const title = `Advice #${data.slip.id}`;
  const subtitle = data.slip.advice;

  updateTitleAndSubtitle(title, subtitle);
};

updateAdvice();

borderIcon.addEventListener("click", (e) => {
  updateAdvice();
});
