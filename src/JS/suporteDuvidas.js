
  document.addEventListener("DOMContentLoaded", function () {
      const items = document.querySelectorAll(".faq-item");

      items.forEach((item) => {
          const question = item.querySelector(".faq-question");

          question.addEventListener("click", () => {
              // Fecha outros abertos
              items.forEach((otherItem) => {
                  if (otherItem !== item) {
                      otherItem.classList.remove("active");
                  }
              });

              // Alterna a classe 'active'
              item.classList.toggle("active");
          });
      });
  });

