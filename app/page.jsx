
import Link from "next/link";
import Navbar from "./components/navbar";
import Clock from './clock';
import Registerwithus from "./registerwithus";
import Createnewuser from './createnewuser';
import Subscribe from "./subscribe/subscribe";


function Home(){
 

  return (
    <main className="flex min-h-screen flex-col items-center z-10 max-w-10xl w-full justify-center shadow md:shadow-lg border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
    <div className="sticky inset-0 h-full w-full object-cover object-right md:object-center">
      <Navbar />
    </div>
      
      <div className=" inset-0 h-full w-full object-cover object-right md:object-center">
        <Registerwithus />
      </div>
        <div className="mt-6 p-6">
           <Createnewuser />
        </div>
        <div className=" inset-0 h-full w-full object-cover object-right md:object-center">
          <Subscribe />
        </div>
        
        <div className="flex left-2 top-6 z-10 max-w-10xl w-full justify-center shadow md:shadow-lg border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <Clock />
        </div> 
    </main>
  )
}

  export default Home;


