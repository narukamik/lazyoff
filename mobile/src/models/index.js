export class Task {
  constructor() {
    (this.name = ''),
      (this.startDateTime = ' '),
      (this.endDateTime = ' '),
      (this.substaks = [new Subtask(), new Subtask()]),
      (this.categoria_id = 0);
    this.status - false;
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
