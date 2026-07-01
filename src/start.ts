import { createStart } from "@tanstack/react-start";

export const startInstance = createStart();

 slide label text is not visible in the new color theme,so make sure to add suitable background and change the color of the text to white.
 and for the explore service in this component,  change its styles to use like whatsapp button as this:            className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-heading font-bold text-white transition-all hover:bg-white/20"
  to make sure it is visible in this new color theme. and the thing in the hero slider is to reduce the bakcground gradinet effect by little