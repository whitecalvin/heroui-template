import { HeroUIAccordion, HeroUIAutocomplete, HeroUIButton } from "./page.component";

export default function HeroUIPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
        <HeroUIAccordion />
        <HeroUIButton />
        <HeroUIAutocomplete />
      </main>
    </div>
  );
}
