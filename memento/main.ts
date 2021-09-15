import Document from "./document";
import DocumentHistory from "./DocumentHistory";

const document = new Document();
const history = new DocumentHistory();
document.content = "simple content";
document.fontName = "aerial";
document.fontSize = "18px";
history.push(document.createState());
document.fontSize = "38px";
console.log(document);
document.restore(history.pop());
console.log(document);
