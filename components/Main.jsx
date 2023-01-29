import Sidebar from "./Sidebar";

export default function Main({ children }) {
  return (
    <main className="main">
      <div className="container mx-auto flex  md:flex-row   flex-col ">
        <div className="sidebar xl:w-1/6 w-2/6 hidden md:block pt-4 ">
          <Sidebar />
        </div>
        <div className="content w-6/6 md:w-4/6 xl:w-5/6  md:ml-[1rem]">{children}</div>
      </div>
    </main>
  );
}
