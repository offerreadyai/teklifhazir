import { useState } from "react";
import { content } from "../lib/translations";
import { sendProposalEmail } from "../lib/SendProposalEmail";

export default function Home() {
  const [language, setLanguage] = useState("TR");
  const t = content[language];

  return (
    <div>
      <h1>{t.headline}</h1>
      <p>{t.subtext}</p>
    </div>
  );
}