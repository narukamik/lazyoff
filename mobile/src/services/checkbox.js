import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');
export class TaskService {
  static addData(param) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO task (name, startDateTime, endDateTime, active) 
             VALUES (?)`,
            [
              param.name,
              param.startDateTime,
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
            `SELECT t.name, t.active, t.startDateTime, t.endDateTime
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
    let sql = `SELECT t.nome, t.active, t.startDateTime, t.endDateTime
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
            `update subtask set ? = ? where id = ?;`,
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
          `delete from subtask where id = ?;`,
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
