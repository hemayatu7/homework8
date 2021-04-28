import { useContext, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { HotelContext } from "../contexts/HotelContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";

const Hotel = () => {
  const { loading, hotel, getHotel } = useContext(HotelContext);

  useEffect(() => {
    getHotel();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {loading && <Spinner animation="border" />}

      {hotel.length > 0 ? (
        <Table striped hover>
          <thead>
            <tr>
              <th>LOCATION</th>
              <th>TYPE</th>
              <th>NAME</th>
              <th>CONTACT</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {hotel.map((f) => (
              <tr key={f._id}>
                <td>{f.location} </td>
                <td>{f.type}</td>
                <td>{f.name}</td>
                <td>{f.contact}</td>
                <td>
                  <FiEdit /> <FiDelete /> <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
};
export default Hotel;
