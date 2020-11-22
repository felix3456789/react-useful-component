import SamplePage from "./SamplePage"
import ParallexDemo from "./ParallexDemoPage"
interface PagesObject {
  [key: string]: React.FunctionComponent
}

const Pages: PagesObject = {
  SamplePage,
  ParallexDemo,
}

export default Pages
