import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');

db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
  // eslint-disable-next-line no-console
  console.log('Foreign keys turned on')
);

export class CategoryService {
  static addData(param) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO category (titulo, color) 
             VALUES (?,?)`,
            [param.titulo, param.color],
            (_, { insertId, rows }) => {
              console.log(`id insert: ${insertId}`);
              resolve(insertId);
            }
          ),
            (sqlError) => {
              console.log('insertCatError', sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static findById(id) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `SELECT c.titulo, c.color, (SELECT COUNT(*) FROM task as t INNER JOIN category as c WHERE t.category_id = c.id) as qtd
             FROM category as c
             WHERE id = ?`,
            [id],
            (_, { rows }) => {
              resolve(rows);
            }
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static getAll() {
    const sql = `SELECT c.id , c.titulo, c.color, (SELECT COUNT(*) FROM task WHERE category_id = c.id) as qtd
                 FROM category as c`;

    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          console.log(`get all tasks : ${sql}`);
          return (
            tx.executeSql(sql, [], (_, { rows }) => {
              resolve(rows);
            }),
            (sqlError) => {
              console.log(sqlError);
            }
          );
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static updateById(params) {
    // this.getById(); // gets by id, compare, then update

    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `update category set titulo = ?, color = ? where id = ?;`,
            [params.titulo, params.color, params.id],
            () => {}
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static deleteById(id) {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `delete from category where id = ?;`,
          [id],
          (_, { rows }) => {
            console.log('deleteCat', rows, _);
          }
        ),
          (sqlError) => {
            console.log(sqlError);
          };
      },
      (txError) => {
        console.log(txError);
      }
    );
  }
}
