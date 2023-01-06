import React, { useContext, useState } from "react";
import { Container } from "../components/Container";
import { EditorComp } from "../components/Editor";
import { Executor } from "../components/Executor";
import { Navbar } from "../components/Navbar";
import { PostContext } from "../context/PostContext";
import { UsersDrawer } from "../components/UsersDrawer";
import { LanguageDropdown } from "../components/LanguageDropdown";


function Home() {
  const[openSideDrawer,setOpenSideDrawer]=useState(false);
  const { setSelectedLanguage} =
    useContext(PostContext);
    const [theme, setTheme] = useState("cobalt");



const onSelectChange = (sl) => {
  console.log("selected Option...", sl);
  setSelectedLanguage(sl);
};








  return (
    <>
      <Navbar setOpenSideDrawer={setOpenSideDrawer}/>
      <main className="mt-5">
        <Container>
          <div className="flex space-x-3 w-[300px] ">
          <LanguageDropdown onSelectChange={onSelectChange}/>
          </div>
          <div className="grid grid-cols-3 space-x-3 mt-10">
            <EditorComp />
            <Executor />
          </div>
        </Container>
      </main>
      {openSideDrawer&&
      <UsersDrawer setOpenSideDrawer={setOpenSideDrawer}/>
      }
    </>
  );
}

export default Home;
