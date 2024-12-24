// import { Pool } from "../config/db.config";
// import type { ResultSetHeader } from "mysql2";

// // Select queries
// export async function SelectQuery<T>(
//   queryString: string,
//   params?: any[]
// ): Promise<Partial<T>[]> {
//   const [results] = await Pool.execute(queryString, params);
//   return results as T[];
// }

// // Insert, Update, Delete queries
// export async function ModifyQuery(
//   queryString: string,
//   params: any[]
// ): Promise<ResultSetHeader> {
//   const [results] = await Pool.execute(queryString, params);
//   return results as ResultSetHeader;
// }
