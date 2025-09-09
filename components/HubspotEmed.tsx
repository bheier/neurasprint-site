"use client";
import Script from "next/script";

export default function HubspotEmbed() {
  return (
    <>
      <Script
        src="https://js-na2.hsforms.net/forms/embed/243814167.js"
        strategy="lazyOnload"
      />
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="c447797e-294e-4a4b-9514-b21a61aee947"
        data-portal-id="243814167"
      />
    </>
  );
}
