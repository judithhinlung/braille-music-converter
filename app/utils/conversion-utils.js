import { parseScore, serializeScore as MusicXML } from 'musicxml-interfaces';
 
export function xmlToJson(xmlData) {
    return parseScore(xmlData);
}

export function jsonToXml(jsonData) {
    return serializeScore(jsonData);
}
