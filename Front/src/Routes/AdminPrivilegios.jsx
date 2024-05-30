import React, { useEffect, useState } from 'react';
import './AdminFilter.css';

const AdminPrivilegios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://script.google.com/macros/s/AKfycbyKuRs2XkSXW8ZuPhu3T_gcxSwuJXzasi3A1pL4-mqrh8QZgdKzFix8WesPxCDNml5u_A/exec?action=getUser')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };


/*
    console.log(userId);
    console.log(newAdminStatus);
    console.log(
      JSON.stringify({
      id: userId,
      admin: newAdminStatus.toString(), // Convertir a string para que coincida con "True" o "False"
      })
    )
*/


  const handleAdminToggle = async (userId, currentAdminStatus) => {

    const newAdminStatus = !currentAdminStatus;

    try {

      const response = await fetch('https://script.google.com/macros/s/AKfycbxCDzfvd7cjN47F51b4XIkZBNq4iKw4KPywmF9h9xCFrN5x3Zk08LCopoSkel3kFuS1pA/exec?action=updateAdminStatus', {

      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userId,
          admin: newAdminStatus.toString(), // Convertir a string para que coincida con "True" o "False"
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchData(); // Actualizar los datos después de la actualización exitosa
    } catch (error) {
      console.error(`Error updating admin status: ${error.message} (${response})`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map((user, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <table className='tablaFilter'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.mail}</td>
                <td>{user.rol}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px' }}>Admin:</label>
            <div
              style={{
                width: '50px',
                height: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => handleAdminToggle(user.id, user.admin)}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: user.admin ? '#4CAF50' : '#f44336',
                  borderRadius: '10px',
                  position: 'absolute',
                  left: user.admin ? '30px' : '0',
                  transition: 'left 0.3s ease',
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPrivilegios;
