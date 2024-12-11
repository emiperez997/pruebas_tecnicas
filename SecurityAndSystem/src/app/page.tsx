import "./page.module.css";
import { Header } from "../components/Header/Header";
import { About } from "../components/About/About";
import { Interest } from "../components/Interest/Interest";
import { Contact } from "../components/Contact/Contact";
import { users } from "@/data/users";

export default function Home() {
  const user = users[Math.floor(Math.random() * users.length)];

  return (
    <>
      <Header
        avatar={user.avatar}
        fullName={`${user.firstName} ${user.lastName}`}
        username={user.username}
      />

      <main>
        <About about={user.about} />

        <Interest interests={user.interests} />
      </main>

      <footer>
        <Contact />
      </footer>
    </>
  );
}
