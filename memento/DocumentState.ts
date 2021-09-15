export default class DocumentState {
  private content: string;
  private fontName: string;
  private fontSize: string;

  constructor(content: string, fontName: string, fontSize: string) {
    this.content = content;
    this.fontName = fontName;
    this.fontSize = fontSize;
  }

  getState() {
    return {
      content: this.content,
      fontName: this.fontName,
      fontSize: this.fontSize,
    };
  }
}
