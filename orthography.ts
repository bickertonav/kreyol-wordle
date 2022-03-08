import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'an',
  'b',
  'ch',
  'd',
  'e',
  'en',
  'è',
  'f',
  'g',
  'h',
  'j',
  'i',
  'k',
  'l',
  'm',
  'n',
  'ng',
  'o',
  'ò',
  'on',
  'ou',
  'oun',
  'p',
  'r',
  's',
  't',
  'ui',
  'v',
  'w',
  'y',
  'Z'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
