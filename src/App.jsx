import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  );
}
