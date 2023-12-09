import React, { forwardRef } from "react";

export default forwardRef(function Footer(props, ref) {
  return (
    <section className="h-screen" ref={ref}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2113.4785292371544!2d12.709351650613566!3d43.939582568742225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ce7207ce6ee35%3A0x7186b0319e152428!2sil%20Salice%20-%20massofisioterapia!5e0!3m2!1sit!2sit!4v1702048526615!5m2!1sit!2sit"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
});
