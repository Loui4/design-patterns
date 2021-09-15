import DocumentState from "./DocumentState";

export default class Document {
  private _content: string;
  private _fontName: string;
  private _fontSize: string;

  public set content(content: string) {
    this._content = content;
  }

  public set fontName(fontName: string) {
    this._fontName = fontName;
  }

  public set fontSize(fontSize: string) {
    this._fontSize = fontSize;
  }

  public createState(): DocumentState {
    return new DocumentState(this._content, this._fontName, this._fontSize);
  }

  public restore(state: DocumentState) {
    const { content, fontName, fontSize } = state.getState();
    this._content = content;
    this._fontName = fontName;
    this.fontSize = fontSize;
  }
}
