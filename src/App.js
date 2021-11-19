import './App.css';

// Components
import Header from './components/header';
import SocialNetworks from './components/socialNetworks';
import ViewsLikes from './components/viewsLikes';

function App() {
  return (
    <div className="bg-primary font-sans h-screen">
      <div className="bg-primary">

        <header className="bg-secondary rounded-b-3xl bg-opacity-5 pb-16  md:flex md:justify-between md:items-center lg:rounded-none">
          <div className="w-full xl:mx-auto xl:w-10/12">
            <Header />
          </div> 

        </header>

        <main className="relative w-full -top-12 h-full border-0 md:-top-16 xl:w-10/12 xl:mx-auto">

          <SocialNetworks />

          <div className="w-10/12 mx-auto md:w-11/12 xl:w-full">

            <h2 className="text-2xl font-bold text-white pt-16">Overview - Today</h2>

            <ViewsLikes />

          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
