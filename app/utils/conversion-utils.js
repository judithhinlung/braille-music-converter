import * as MusicXML from "musicxml-interfaces";

export function xmlToJson(xmlData) {
  return JSON.stringify(MusicXML.parseScore(xmlData), undefined, 2);
}

export function jsonToXml(jsonData) {
  return MusicXML.serializeScore(jsonData);
}
