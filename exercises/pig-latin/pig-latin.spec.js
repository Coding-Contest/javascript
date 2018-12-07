import translator from './pig-latin';

describe('Pig Latin', () => {
  test('translates a word beginning with a', () => {
    expect(translator.translate('apple')).toEqual('appleay');
  });

  xtest('translates a word beginning with e', () => {
    expect(translator.translate('ear')).toEqual('earay');
  });

  xtest('translates a word beginning with p', () => {
    expect(translator.translate('pig')).toEqual('igpay');
  });

  xtest('translates a word beginning with k', () => {
    expect(translator.translate('koala')).toEqual('oalakay');
  });

  xtest('translates a word beginning with ch', () => {
    expect(translator.translate('chair')).toEqual('airchay');
  });

  xtest('translates a word beginning with qu', () => {
    expect(translator.translate('queen')).toEqual('eenquay');
  });

  xtest('translates a word with a consonant preceding qu', () => {
    expect(translator.translate('square')).toEqual('aresquay');
  });

  xtest('translates a word beginning with th', () => {
    expect(translator.translate('therapy')).toEqual('erapythay');
  });

  xtest('translates a word beginning with thr', () => {
    expect(translator.translate('thrush')).toEqual('ushthray');
  });

  xtest('translates a word beginning with sch', () => {
    expect(translator.translate('school')).toEqual('oolschay');
  });

  xtest('y is treated like a consonant at the beginning of a word', () => {
    expect(translator.translate('yellow'))
      .toEqual('ellowyay');
  });

  xtest('y is treated like a vowel at the end of a consonant cluster', () => {
    expect(translator.translate('rhythm'))
      .toEqual('ythmrhay');
  });

  xtest('y as second letter in two letter word', () => {
    expect(translator.translate('my'))
      .toEqual('ymay');
  });

  xtest('translates a phrase', () => {
    expect(translator.translate('quick fast run'))
      .toEqual('ickquay astfay unray');
  });
});
