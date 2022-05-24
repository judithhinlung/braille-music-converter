const defaultOption = "Choose one";

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  readFile,
  saveFile,
  getFileExtension,
  getFileNameWithoutExtension,
} from '../utils/file-utils';
import {
  xmlToJson,
  jsonToXml,
} from '../utils/conversion-utils';
import { SUPPORTED_FILE_TYPES as supportedTypes } from '../utils/constants';
 
export default class ConvertComponent extends Component {
  sourceFormats = supportedTypes;
  targetFormats = supportedTypes;
  @tracked
  sourceFile;
  targetFormat = defaultOption;
  @tracked
  convertedFile;

  get isConvertButtonDisabled() {
    return !this.sourceFile || this.args.target === defaultOption;
  }

  @action
  updateSourceFile(evt) {
    let input = evt.target;
    if (input.files && input.files[0]) {
      this.sourceFile = input.files[0];
    }
  }

  @action
  async convertFile() {
    let sourceData = await readFile(this.sourceFile);
    let sourceFormat = getFileExtension(this.sourceFile.name);
    let targetFileName = getFileNameWithoutExtension(this.sourceFile.name).concat(
      this.targetFormat
    );
    let convertedData, destinationFile;
    if (sourceFormat == this.targetFormat) {
      this.convertedFile = await saveFile(sourceData, targetFileName);
    }
  if (sourceFormat === 'xml') {
    if (targetFormat === 'json') {
      convertedData = xmlToJson(sourceData);
    }
  } else if (sourceFormat === 'json') {
    if (targetFormat === 'xml') {
      convertedData = xmlToJson(sourceData);
    }
  }
    this.convertedFile = saveFile(convertedData, targetFileName);
  }
}
