import DocumentState from "./DocumentState";

export default class DocumentHistory {
  private states: DocumentState[];

  constructor() {
    this.states = [];
  }

  public push(documentState: DocumentState): void {
    this.states.push(documentState);
  }

  public pop(): DocumentState {
    return this.states.pop();
  }
}
