import { Activites } from "../Activites";
import { Balance } from "../Balance";
import { FastChange } from "../FastingChange";
import { MyCard } from "../Mycard";
import Suggestion from "../Suggestion";

function HomeScreen() {
  return (
    <main className="p-4 md:p-6 max-w-4xl mx-auto space-y-8 flex-grow mb-20">
      <Balance />
      <FastChange />
      <MyCard />
      <Suggestion />
      <Activites />
    </main>
  );
}

export default HomeScreen;
