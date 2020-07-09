export class Task {
  constructor(titulo, time, endDateTime, categoria_id) {
    (this.titulo= titulo);
    (this.time = time);
    (this.endDateTime = endDateTime);
    (this.substaks = [new Subtask(), new Subtask()]);
    (this.categoria_id = '1');
  }
}

export class Subtask {
  constructor() {
    (this.name = ''),
      (this.startDateTime = ''),
      (this.endDateTime = ''),
      (this.status = false);
  }
}
