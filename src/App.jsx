import { SignupForm } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { Table} from "./components/Table";
import './styles/global.css'

function App() {
  return (
    <>
      <Navbar/>
      <Table></Table>
      <SignupForm/>
    </>
  );
}

export default App;
