const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item .accordion-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const currentAccordionBody = event.currentTarget.nextElementSibling;

    if (currentAccordionBody.classList.contains("show")) {
      currentAccordionBody.classList.remove("show");
      currentAccordionBody.querySelector(".accordion-body").style.maxHeight =
        null;
    } else {
      const accordionBodies = document.querySelectorAll(".accordion-body");
      accordionBodies.forEach((accordionBody) => {
        accordionBody.classList.remove("show");
        accordionBody.style.maxHeight = null;
      });

      currentAccordionBody.classList.add("show");
      currentAccordionBody.querySelector(".accordion-body").style.maxHeight =
        currentAccordionBody.querySelector(".accordion-body").scrollHeight +
        "px";
    }
  });
});
