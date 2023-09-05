import Header from "./Components/Layout/Header"
import Showcase from "./Components/Layout/Showcase"
import AboutUs from "./Components/Layout/AboutUs"
import Testimonail from "./Components/Layout/Testimonail"
import CTA from "./Components/Layout/CTA"
import Footer from "./Components/Layout/Footer"
import { Toaster } from "sonner"
import { MantineProvider,  } from '@mantine/core';
const App = () => {
  return (
    <div>
      <MantineProvider>
      <Toaster richColors   position="bottom-right" />
      <Header/>
      <Showcase/>
      <AboutUs/>
      <Testimonail/>
      <CTA/>
      <Footer/>
      </MantineProvider>

    </div>
  )
}
export default App