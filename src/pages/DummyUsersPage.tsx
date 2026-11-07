import { useDummyUsers } from "../hooks/useDummyUsers";
import { useState } from "react";

interface DummyUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export default function DummyUsersPage() {
  const [page, setPage] = useState<number>(1);

  const { data, isPending, isError, error } = useDummyUsers(page);
  if (isPending) {
    return <p>Cargando usuarios...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const users: DummyUser[] = data.users;

  const totalPages = Math.ceil(data.total / data.limit);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Usuarios de DummyJSON</h1>

      {users.map((user) => (
        <div key={user.id} className="border p-4 mt-3 rounded">
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
        </div>
      ))}

      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span>
          Página {page} de {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
          className="bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
