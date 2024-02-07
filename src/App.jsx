import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection/TeachingSection";
import DifferencesSection from "./components/DifferencesSection/DifferencesSection";



export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <TeachingSection />
        <DifferencesSection />
      </main>
    </div>
  );
}
