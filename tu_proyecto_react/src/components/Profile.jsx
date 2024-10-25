import { useState } from "react";

const UserProfile = ({ user, handleUpdateProfile }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(false);

  const handleSaveChanges = async () => {
    if (!name || !email) {
      alert("Todos los campos son obligatorios");
      return;
    }

    setLoading(true);
    try {
      await handleUpdateProfile({ name, email });
      setEditing(false);
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      alert("Ocurrió un error. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-4">
      {user ? (
        <div className="w-full max-w-md">
          {editing ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Editar Perfil</h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full mb-4"
                placeholder="Nombre..."
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full mb-4"
                placeholder="Correo..."
              />
              <button
                onClick={handleSaveChanges}
                disabled={loading}
                className={`bg-green-500 text-white p-2 rounded-md w-full ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Guardando..." : "Guardar Cambios"}
              </button>
              <button
                onClick={() => setEditing(false)}
                className="bg-gray-500 text-white p-2 rounded-md w-full mt-2"
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
              <p>
                <strong>Nombre:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-500 text-white p-2 rounded-md w-full mt-4"
              >
                Editar Perfil
              </button>
            </>
          )}
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default UserProfile;
