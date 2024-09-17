import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://thewsystem_user:siai3UZUyHgBcqBsFmmZYlBAQe0AcIU8@dpg-crbp05jqf0us73dfaddg-a.oregon-postgres.render.com/thewsystem";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
