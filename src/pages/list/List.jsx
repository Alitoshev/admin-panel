import Datatable from "../home/components/datatable/Datatable";
import Navbar from "../home/components/navbar/Navbar";
import Sidebar from "../home/components/sidebar/Sidebar";
import "./list.scss";

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}

export default List;
