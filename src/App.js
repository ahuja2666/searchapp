import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("")
  const [copy, setCopy] = useState(data)

  const setAll = (data) => {
    setData(data);
    setCopy(data);
  }


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setAll(data));
  }, []);

  const handelSearch = () => {
    let temp = data.filter((each) => {
      return (each.title.includes(value))
    })
    setCopy(temp)
    setValue("")

  };


  return (
    <>
      <div className="parnet-cpntainer">
        <section className="input-section">
          <input className="s-input" placeholder="Search" onChange={(e) => setValue(e.target.value)} value={value} />
          <button className="s-btn" onClick={() => handelSearch()}>Serach</button>
        </section>
        <section>
          {
            copy.map((each) => {
              return (
                <div key={each.id} className="card-conatiner">
                  <h3>User id: {each.userId}</h3>
                  <h4>Title: {each.title}</h4>
                  <p><strong>Post:</strong> {each.body}</p>

                </div>
              )
            })
          }
        </section>
      </div>
    </>
  );
}

export default App;
