import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Hacer la solicitud GET cuando el componente se monta
    axios.get('/api/lista_usuarios')
      .then(response => {
        // Actualizar el estado con los datos de los usuarios recibidos
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener la lista de usuarios:', error);
      });
  }, []); // El array vacío como segundo argumento indica que este efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
