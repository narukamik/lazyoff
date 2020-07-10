import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');

db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
  // eslint-disable-next-line no-console
  console.log('Foreign keys turned on')
);

export class TaskService {
  static addData(param) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO task (titulo, time, endDateTime, categoria_id) 
             VALUES (?)`,
            [param.titulo, param.time, param.endDateTime, param.categoria_id],
            (_, { insertId, rows }) => {
              console.log(`id insert: ${insertId}`);
              resolve(insertId);
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

  static findById(id) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select t.id, t.titulo, t.status, t.date, t.time, t.endTime, c.titulo as category, c.color
                           FROM task as t
                           INNER JOIN category as c
                           ON t.category_id = category.id
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
    const sql = `SELECT t.id, t.titulo, t.date, t.time, t.endTime, c.titulo as category, c.color
                 FROM task as t
                 INNER JOIN category as c
                 ON t.category_id = c.id`;

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
    this.getById(); // gets by id, compare, then update

    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `update task set ? = ? where id = ?;`,
            [param.param, param.value, param.id],
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
          `delete from task where id = ?;`,
          [id],
          (_, { rows }) => {}
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
