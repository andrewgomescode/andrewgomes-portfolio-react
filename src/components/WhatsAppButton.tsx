import Image from "next/image";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css"
      />
      <Link
        id="robbu-whatsapp-button"
        className="right -mb-3 animate-bounce drop-shadow-sm"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5521971339545&text=Ol%C3%A1%20Andrew,%20vim%20pelo%20seu%20website%20portf%C3%B3lio.%20"
      >
        <div className="rwb-tooltip bg-white">Vamos conversar?</div>
        <Image
          width={50}
          height={50}
          alt="WhatsApp Logo"
          src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg"
        />
      </Link>
    </>
  );
}
