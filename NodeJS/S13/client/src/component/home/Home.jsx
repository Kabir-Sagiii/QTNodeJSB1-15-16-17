import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("http://localhost:7979/getusers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        alert("error while fetching user data");
      });
  };

  const removeUser = (id) => {
    axios
      .delete(`http://localhost:7979/removeuser/${id}`)
      .then(() => {
        getUser();
      })
      .catch(() => {
        alert("error while removing the user");
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Home Page</h2>
      <button>Logout</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius
        consequuntur dolorem exercitationem praesentium laudantium maiores
        eligendi dolorum possimus modi, quisquam, nihil porro pariatur officiis
        impedit ut nisi facere eum qui saepe! Molestias, similique dolorem! Enim
        atque ratione voluptatibus voluptates labore incidunt minus at soluta,
        dicta nesciunt. Libero, placeat. Animi quod alias sunt ad maxime
        similique magnam obcaecati illo nostrum ipsum eaque, deserunt eum est
        earum veniam cupiditate. Ratione delectus incidunt quidem quisquam rem,
        voluptatem alias, nobis aperiam harum, asperiores blanditiis ad ipsa!
        Eos incidunt neque repellat minima beatae enim corporis labore hic,
        laborum in aspernatur, sunt maxime reiciendis placeat.
      </p>
      <div>
        {users.length > 0 ? (
          <div>
            <table width="100%" rules="groups">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>PHONE</th>
                  <th>PASSWORD</th>
                  <th colSpan={2}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users.map(function (element, index) {
                  const { name, phone, password, _id } = element;
                  return (
                    <tr key={index + 1}>
                      <td>{name}</td>
                      <td>{phone}</td>
                      <td>{password}</td>
                      <td>
                        <button>Update</button>
                      </td>
                      <td>
                        <button
                          style={{ border: "3px solid red" }}
                          onClick={() => {
                            removeUser(_id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <div>
              <h1
                style={{
                  color: "red",

                  textAlign: "center",
                }}
              >
                No Users Details To Show
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
