// aora — landing "coming soon"
// Progressive enhancement for the waitlist form. The <form> already has a
// working `action`/`method` as a no-JS fallback (real browser POST + normal
// page navigation to Formspree). If JS is available we intercept the submit,
// send it via fetch, and show inline feedback instead of leaving the page.
//
// NOTE: the action currently points at a demo Formspree endpoint that does
// not exist. See the HTML comment above the <form> for how to point this at
// a real Formspree form (or swap this whole block for a Google Form / mailto
// only flow) before launch.

(function () {
  var form = document.getElementById("waitlist-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var emailInput = document.getElementById("email");
    var submitBtn = form.querySelector("button[type=submit]");
    var existingStatus = form.parentElement.querySelector(".form-status");
    if (existingStatus) existingStatus.remove();

    var status = document.createElement("p");
    status.className = "form-status";

    submitBtn.disabled = true;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          form.classList.add("is-success");
          status.textContent = "¡Listo! Ya quedaste en la lista. Nos vemos muy pronto.";
        } else {
          throw new Error("form endpoint not ready");
        }
      })
      .catch(function () {
        status.textContent =
          "Este formulario todavía no está conectado — mándanos un correo a hola@aoracoffee.mx o síguenos en Instagram, ahí también te anotamos.";
      })
      .finally(function () {
        submitBtn.disabled = false;
        form.insertAdjacentElement("afterend", status);
      });
  });
})();
