import HomepageContent from "./_homepageContent";
import Image from "next/image";
import MainBanner from "@/public/images/tipi-outside-arty-overlay.svg";

export default function HomePage() {
  return (
    <>
      <h1>
        <span
          // Visually hidden heading as the main heading is the banner image
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            border: 0,
          }}
        >
          Wedding Race
        </span>

        <Image
          src={MainBanner}
          alt="Welcome to the Race Wedding"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
      </h1>

      <HomepageContent />
    </>
  );
}
