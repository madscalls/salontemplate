// Halden Hair Studio palette (from the design mockup). The pages use these hex values inline;
// search and replace a value across src/pages to re-skin the template.
export const PALETTE = {
  black: '#0F0E0D', // page background
  charcoal: '#181715', // bands
  deep: '#080807', // gallery band and footer
  text: '#F2EDE4', // headings
  body: '#B8B1A7', // body text
  gold: '#C6A15B', // buttons, labels, selected states (hover #E0C285)
  line: '#2E2A26', // hairlines
};

export function useTheme(pageDefaults) {
  return { ...pageDefaults };
}
