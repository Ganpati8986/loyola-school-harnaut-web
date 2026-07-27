// import { clamp } from "framer-motion";
// import React, { useEffect, useState } from "react";


// const ProtectedImage = ({ src, alt, watermark = `Loyola School Harnaut`, className, referrerPolicy }) => {
//     const [blur, setBlur] = useState(false);

//     useEffect(() => {

//         // Disable right click
//         const disableRightClick = (e) => {
//             e.preventDefault();
//         };
//         document.addEventListener("contextmenu", function (e) {
//             e.preventDefault();
//         });

//         document.addEventListener("keydown", function (e) {

//             if (e.key === "PrintScreen") {
//                 navigator.clipboard.writeText("");
//                 alert("Screenshot not allowed");
//             }

//         });

//         document.addEventListener("keyup", function (e) {

//             if (e.key === "PrintScreen") {
//                 document.body.style.filter = "blur(25px)";
//             }

//         });

//         document.addEventListener("visibilitychange", () => {

//             if (document.hidden) {
//                 document.body.style.display = "none";
//             } else {
//                 document.body.style.display = "block";
//             }

//         });

//         setInterval(() => {

//             if (window.outerWidth - window.innerWidth > 200) {
//                 document.body.innerHTML = "Developer tools not allowed";
//             }

//         }, 1000);

//         // Disable keyboard shortcuts
//         const disableKeys = (e) => {
//             if (
//                 e.key === "PrintScreen" ||
//                 (e.ctrlKey && ["s", "u", "c"].includes(e.key.toLowerCase())) ||
//                 (e.ctrlKey && e.shiftKey && ["i", "j"].includes(e.key.toLowerCase()))
//             ) {
//                 e.preventDefault();
//                 alert("Action not allowed");
            
//             }
//         };

//         // DevTools detection
//         const devToolsCheck = setInterval(() => {
//             if (window.outerWidth - window.innerWidth > 200) {
//                 setBlur(true);
//             } else {
//                 setBlur(false);
//             }
//         }, 500);

//         document.addEventListener("contextmenu", disableRightClick);
//         document.addEventListener("keydown", disableKeys);

//         return () => {
//             document.removeEventListener("contextmenu", disableRightClick);
//             document.removeEventListener("keydown", disableKeys);
//             clearInterval(devToolsCheck);
//         };

//     }, []);

//     return (
//         <div
//             style={{
//                 position: "relative",
//                 display: "inline-block",
//                 overflow: "hidden"
//             }}
//         >
//             <img
//                 src={src}
//                 alt={alt}
//                 draggable="false"
//                 onDragStart={(e) => e.preventDefault()}
//                 className={className}
//                 referrerPolicy={referrerPolicy}
//             style={{
//                 maxWidth: "100%",
//                 userSelect: "none",
//                 pointerEvents: "none",
//                 filter: blur ? "blur(15px)" : "none"

//             }}
//             />

//             {/* Watermark */}
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%) rotate(-30deg)",
//                     fontSize: "40px",
//                     color: "rgba(255,255,255,0.35)",
//                     fontWeight: "bold",
//                     pointerEvents: "none",
//                     userSelect: "none"
//                 }}
//             >
//                 {watermark}
//             </div>
//         </div>
//     );
// };

// export default ProtectedImage;



import React, { useEffect, useState } from "react";

const ProtectedImage = ({
  src,
  alt,
  watermark = "",
  className,
  referrerPolicy
}) => {
  const [blur, setBlur] = useState(false);

  useEffect(() => {

    const disableRightClick = (e) => {
      e.preventDefault();
    };

    const disableDrag = (e) => {
      e.preventDefault();
    };

    const disableCopy = (e) => {
      e.preventDefault();
    };

    const disableKeys = (e) => {
      const key = e.key.toLowerCase();

      if (
        key === "printscreen" ||
        (e.ctrlKey && ["s", "u", "c", "x"].includes(key)) ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12"
      ) {
        e.preventDefault();
        alert("Action not allowed");
      }
    };

    const handlePrintScreen = async (e) => {
      if (e.key === "PrintScreen") {
        try {
          await navigator.clipboard.writeText("");
        } catch (err) {}

        setBlur(true);

        setTimeout(() => {
          setBlur(false);
        }, 2000);
      }
    };

    const visibilityChange = () => {
      if (document.hidden) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };

    const detectDevTools = setInterval(() => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if (widthDiff > 160 || heightDiff > 160) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    }, 800);

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("dragstart", disableDrag);
    document.addEventListener("copy", disableCopy);
    document.addEventListener("keydown", disableKeys);
    document.addEventListener("keyup", handlePrintScreen);
    document.addEventListener("visibilitychange", visibilityChange);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("keydown", disableKeys);
      document.removeEventListener("keyup", handlePrintScreen);
      document.removeEventListener("visibilitychange", visibilityChange);
      clearInterval(detectDevTools);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        userSelect: "none"
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable="false"
        className={className}
        referrerPolicy={referrerPolicy}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          pointerEvents: "none",
          filter: blur ? "blur(20px)" : "none"
        }}
      />

      {/* Strong Watermark Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{
              transform: "rotate(-30deg)",
              fontSize: "24px",
              color: "rgba(255,255,255,0.25)",
              fontWeight: "bold",
              margin: "40px"
            }}
          >
            {watermark}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProtectedImage;