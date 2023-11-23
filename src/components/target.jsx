import { forwardRef } from "react";

export default forwardRef(function Target() {
  return (
    <section
      style={{
        backgroundColor: "rgb(157,168,134)",
        background:
          "linear-gradient(rgba(157,168,134,1) 0%, rgba(223,228,214,1) 49%, rgba(157,168,134,1) 100%)",
      }}
      className="h-[1200px]"
    ></section>
  );
});
