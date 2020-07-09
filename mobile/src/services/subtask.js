import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');

  db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
    // eslint-disable-next-line no-console
    console.log('Foreign keys turned on')
  );

export class TaskService{
  static addData(param) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO subtask (titulo, time, endDateTime, active) 
             VALUEs (?)`,
            [
              param.titulo,
              param.time,
              param.endDateTime,
              param.active,
            ],
            (_, { insertId, rows }) => {
              console.log('id insert: ' + insertId);
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
            `SELECT t.titulo, t.status, t.time, t.endDateTime, t.color
             FROM subtask as t
             WHERE id= ?`,
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
    let sql = `SELECT t.nome, t.active, t.time, t.endDateTime
               FROM subtask as t
               INNER JOIN category as c`;

    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          console.log('get all tasks : ' + sql);
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
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `UPDATE subtask SET ? = ? WHERE id = ?;`,
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
          `DELETE FROM subtask WHERE id = ?;`,
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
