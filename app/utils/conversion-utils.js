import * as MusicXML from "musicxml-interfaces";

export function xmlToJson(xmlData) {
  return MusicXML.parseScore(xmlData);
}

export function jsonToXml(jsonData) {
  return MusicXML.serializeScore(jsonData);
}
