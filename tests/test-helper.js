import Application from 'braille-music-converter/app';
import config from 'braille-music-converter/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
